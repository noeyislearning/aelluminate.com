import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"

import { InlineTOC } from "fumadocs-ui/components/inline-toc"
import defaultMdxComponents from "fumadocs-ui/mdx"
import * as RemixIcons from "@remixicon/react"

import { blog } from "@/lib/source"
import { createMetadata } from "@/utils/meta/metadata"
import { ButtonVariants } from "@/components/"
import { Control } from "./page.client"
import { HomeLayout } from "fumadocs-ui/layouts/home"
import { navLinks } from "@/lib/links"
import { NavLogo, GoToTopButton, Footer } from "@/components"

const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.95' 
      numOctaves='3'
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
  </svg>`

export default async function Page(props: {
  params: Promise<{ slug: string }>
}): Promise<React.ReactElement> {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return RemixIcons.RiGithubLine
      case "linkedin":
        return RemixIcons.RiLinkedinBoxLine
      default:
        return RemixIcons.RiLinkM
    }
  }

  return (
    <HomeLayout nav={{ title: <NavLogo /> }} links={navLinks} className="h-full">
      <main className="container max-sm:px-0 md:py-12">
        <div
          className="container py-12 md:px-12"
          style={{
            backgroundColor: "black",
            backgroundImage: `url(${page.data.thumbnail}), url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
            backgroundBlendMode: "difference, difference, normal",
          }}
        >
          <h1 className="mb-2 font-lora text-5xl font-bold text-white">{page.data.title}</h1>
          <p className="mb-4 text-white/80">{page.data.description}</p>
          <Link href="/blog" className={ButtonVariants({ size: "sm", variant: "secondary" })}>
            See more posts
          </Link>
        </div>
        <article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-4">
          <div className="prose min-w-0 flex-1 p-4">
            <InlineTOC items={page.data.toc} />
            <page.data.body
              components={{
                defaultMdxComponents,
              }}
            />
          </div>
          <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
            <div>
              <p className="mb-1 text-fd-muted-foreground">Written by</p>
              <div className="flex flex-row items-center gap-2">
                {page.data.authorLinks?.map((link, index) => {
                  const Icon = getIcon(link.platform)
                  return (
                    <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5 text-fd-primary" />
                    </Link>
                  )
                })}
                <div className="h-6 border-r"></div>
                <p className="font-medium">{page.data.author}</p>
              </div>
            </div>
            <div>
              <p className="mb-1 text-sm text-fd-muted-foreground">Posted at</p>
              <p className="font-medium">
                {new Date(page.data.date ?? page.file.name).toDateString()}
              </p>
            </div>
            <Control url={page.url} />
          </div>
        </article>
        <GoToTopButton />
      </main>
      <Footer />
    </HomeLayout>
  )
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const page = blog.getPage([params.slug])

  if (!page) notFound()

  return createMetadata({
    title: page.data.title,
    description: page.data.description ?? "Written by Aelluminate",
  })
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }))
}

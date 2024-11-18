import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import * as RemixIcons from "@remixicon/react"

import defaultMdxComponents from "fumadocs-ui/mdx"
import { InlineTOC } from "fumadocs-ui/components/inline-toc"
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock"
import { Callout } from "fumadocs-ui/components/callout"
import { ImageZoom } from "fumadocs-ui/components/image-zoom"
import { HomeLayout } from "fumadocs-ui/layouts/home"

import { blog } from "@/lib/source"
import { navLinks } from "@/lib/links"
import { createMetadata } from "@/utils/meta/metadata"
import { ButtonVariants, NavLogo, GoToTopButton, Footer } from "@/components/"
import { Control } from "./page.client"
import { svg } from "@/lib/backgrounds"

export default async function BlogPage(props: {
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
          <h1 className="mb-2 font-lora text-4xl font-bold text-white lg:text-5xl">
            {page.data.title}
          </h1>
          <p className="mb-4 text-white/80">{page.data.description}</p>
          <Link href="/blog" className={ButtonVariants({ size: "sm", variant: "secondary" })}>
            See more posts
          </Link>
        </div>
        <article className="container flex flex-col px-0 py-8 lg:flex-row lg:px-48">
          <div className="prose min-w-0 flex-1 p-4">
            <page.data.body
              components={{
                defaultMdxComponents,
                Callout,
                pre: ({ ...props }) => (
                  <CodeBlock {...props}>
                    <Pre>{props.children}</Pre>
                  </CodeBlock>
                ),
                img: (props) => (
                  <ImageZoom
                    {...(props as any)}
                    className="rounded-md border border-fd-border contrast-75"
                  />
                ),
              }}
            />
          </div>
          <div className="flex flex-col gap-4 border-l p-4 text-sm lg:w-[250px]">
            <div>
              <p className="mb-1 text-fd-muted-foreground">Written by</p>
              <div className="flex flex-col items-start gap-2">
                {page.data.authors?.map((author, authorIndex) => (
                  <div key={authorIndex} className="flex flex-row items-center gap-2">
                    {author.links?.map((link, linkIndex) => {
                      const Icon = getIcon(link.platform)
                      return (
                        <Link
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon className="h-5 w-5 text-fd-primary" />
                        </Link>
                      )
                    })}
                    <div className="h-6 border-r"></div>
                    <p className="font-medium">{author.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-1 text-sm text-fd-muted-foreground">Published at</p>
              <p className="font-medium">
                {new Date(page.data.date ?? page.file.name).toDateString()}
              </p>
            </div>
            <Control url={page.url} />
            <div className="sticky top-16 text-sm md:text-base lg:text-base">
              <InlineTOC items={page.data.toc} defaultOpen={true} />
            </div>
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

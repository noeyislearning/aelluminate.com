import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import defaultMdxComponents from "fumadocs-ui/mdx"

import { labsSource } from "@/lib/source"

interface Params {
  params: Promise<{ slug?: string[] }>
}

export default async function LabsPage({ params }: Params) {
  const resolvedParams = await params
  const page = labsSource.getPage(resolvedParams.slug || [])
  if (!page) notFound()

  const MDX = page.data.body
  const path = `content/labs/${page.file.path}`

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={{
        repo: "aelluminate.com",
        owner: "noeyislearning",
        sha: "main",
        path,
      }}
      tableOfContent={{
        single: false,
        style: "clerk",
      }}
      tableOfContentPopover={{ enabled: true }}
    >
      <DocsTitle className="font-lora text-3xl lg:text-4xl">{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
          }}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  const params = labsSource.generateParams().map((params) => ({
    slug: params.slug || [],
  }))
  params.push({ slug: [] })
  return params
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params
  const page = labsSource.getPage(resolvedParams.slug || [])
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}

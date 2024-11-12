import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import defaultMdxComponents from "fumadocs-ui/mdx"

import { labsSource } from "@/lib/source"

export default async function LabsDocsPage({ params }: { params: { slug?: string[] } }) {
  const resolvedParams = await params
  const page = labsSource.getPage(resolvedParams.slug || [])
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle className="font-lora text-3xl lg:text-4xl">{page.data.title}</DocsTitle>{" "}
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

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] }
}): Promise<Metadata> {
  const resolvedParams = await params
  const page = labsSource.getPage(resolvedParams.slug || [])
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}

import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import defaultMdxComponents from "fumadocs-ui/mdx"

import { hiveSource } from "@/lib/source"

interface Params {
  params: { slug?: string[] }
}

export default async function HivePage({ params }: Params) {
  const page = hiveSource.getPage(params.slug || [])
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle className="font-lora">{page.data.title}</DocsTitle>
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
  const params = hiveSource.generateParams().map((params) => ({
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
  const page = hiveSource.getPage(params.slug || [])
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}

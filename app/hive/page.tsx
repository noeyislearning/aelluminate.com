import { notFound } from "next/navigation"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import defaultMdxComponents from "fumadocs-ui/mdx"

import { hiveSource } from "@/lib/source"

interface PageProps {
  params: { slug?: string[] }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function HivePage({ params }: PageProps) {
  const page = hiveSource.getPage(params.slug || [])
  if (!page) notFound()
  const MDX = page.data.body
  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
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

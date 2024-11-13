import { notFound } from "next/navigation"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import defaultMdxComponents from "fumadocs-ui/mdx"

import { labsSource } from "@/lib/source"

interface PageProps {
  params: Promise<{ slug?: string[] }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LabsPage({ params }: PageProps) {
  const resolvedParams = await params
  const page = labsSource.getPage(resolvedParams.slug || [])
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

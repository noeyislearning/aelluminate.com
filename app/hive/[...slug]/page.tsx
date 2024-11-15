import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getGithubLastEdit } from "fumadocs-core/server"
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import defaultMdxComponents from "fumadocs-ui/mdx"

import { hiveSource } from "@/lib/source"

interface Params {
  params: Promise<{ slug?: string[] }>
}

export default async function HivePage({ params }: Params) {
  const resolvedParams = await params
  const page = hiveSource.getPage(resolvedParams.slug || [])
  if (!page) notFound()

  const MDX = page.data.body
  const path = `content/hive/${page.file.path}`

  const edit = {
    repo: "aelluminate.com",
    owner: "noeyislearning",
    sha: "main",
    path,
  }
  const time = await getGithubLastEdit({
    repo: "aelluminate.com",
    owner: "noeyislearning",
    path,
  })

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      editOnGithub={edit}
      lastUpdate={time ? new Date(time) : new Date()}
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
  const params = hiveSource.generateParams().map((params) => ({
    slug: params.slug || [],
  }))
  params.push({ slug: [] })
  return params
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params
  const page = hiveSource.getPage(resolvedParams.slug || [])
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}

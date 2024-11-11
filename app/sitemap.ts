import type { MetadataRoute } from "next"
import { baseUrl } from "@/utils/meta/metadata"
import { source } from "@/lib/source"

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string): string => new URL(path, baseUrl).toString()

  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/docs"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...source.getPages().map<MetadataRoute.Sitemap[number]>((page) => ({
      url: url(page.url),
      lastModified: page.data.lastModified ? new Date(page.data.lastModified) : undefined,
      changeFrequency: "weekly",
      priority: 0.5,
    })),
  ]
}

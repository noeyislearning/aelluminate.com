import { createElement } from "react"
import { icons } from "lucide-react"
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "fumadocs-mdx"

import { IconContainer } from "@/components"
import { labsDocs, labsMeta, hiveDocs, hiveMeta, blog as blogPosts } from "@/.source"

// Loader for Hive
export const hiveSource = loader({
  baseUrl: "/hive",
  icon(icon) {
    if (icon && icon in icons)
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      })
  },
  source: createMDXSource(hiveDocs, hiveMeta),
})

// Loader for Labs
export const labsSource = loader({
  baseUrl: "/labs",
  icon(icon) {
    if (icon && icon in icons)
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      })
  },
  source: createMDXSource(labsDocs, labsMeta),
})

// Combined source for search functionality
export const source = loader({
  baseUrl: "/",
  icon(icon) {
    if (icon && icon in icons)
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      })
  },
  source: createMDXSource([...labsDocs, ...hiveDocs], [...labsMeta, ...hiveMeta]),
})

// Loader for Blog
export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, []),
})

import { createElement } from "react"

import { icons } from "lucide-react"
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "fumadocs-mdx"

import { IconContainer } from "@/components"
import { docs, meta, blog as blogPosts } from "@/.source"

export const source = loader({
  baseUrl: "/",
  icon(icon) {
    if (icon && icon in icons)
      return createElement(IconContainer, {
        icon: icons[icon as keyof typeof icons],
      })
  },
  source: createMDXSource(docs, meta),
})

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, []),
})

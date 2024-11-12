import { type DocsLayoutProps } from "fumadocs-ui/layouts/docs"
import { type BaseLayoutProps } from "fumadocs-ui/layouts/shared"

import * as Icon from "lucide-react"

import { source } from "@/lib/source"

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <div className="text-xl">Aelluminate</div>,
    transparentMode: "top",
  },
}

export const pagesOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [
    {
      text: "/home",
      url: "/",
      active: "nested-url",
      icon: <Icon.LayoutGrid />,
    },
    {
      text: "/blog",
      url: "/blog",
      active: "nested-url",
      icon: <Icon.LibraryBig />,
    },
  ],
}

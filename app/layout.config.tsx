import { type DocsLayoutProps } from "fumadocs-ui/layouts/docs"
import { type BaseLayoutProps } from "fumadocs-ui/layouts/shared"

import { source } from "@/lib/source"

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Aelluminate",
    transparentMode: "top",
  },
}

export const pagesOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: [
    {
      text: "/hive",
      url: "/hive",
      active: "nested-url",
    },
    {
      text: "/labs",
      url: "/labs",
      active: "nested-url",
    },
  ],
}

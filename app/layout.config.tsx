import { type DocsLayoutProps } from "fumadocs-ui/layouts/docs"
import { type HomeLayoutProps } from "fumadocs-ui/layouts/home"

import { source } from "@/lib/source"

export const baseOptions: HomeLayoutProps = {
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
      text: "LABS.",
      url: "/labs",
      active: "nested-url",
    },
    {
      text: "HIVE.",
      url: "/hive",
      active: "nested-url",
    },
  ],
}

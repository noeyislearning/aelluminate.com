import { type DocsLayoutProps } from "fumadocs-ui/layouts/docs"
import { type BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { LinkItemType } from "fumadocs-ui/layouts/links"

import * as Icon from "lucide-react"

import { labsSource, hiveSource } from "@/lib/source"

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <div className="font-lora text-xl font-bold">Aelluminate.</div>,
    transparentMode: "top",
  },
}

const links: LinkItemType[] = [
  {
    text: "Hive",
    url: "/hive",
    active: "nested-url",
    icon: <Icon.GraduationCap />,
  },
  {
    text: "Labs",
    url: "/labs",
    active: "nested-url",
    icon: <Icon.TestTubeDiagonal />,
  },
  {
    text: "Blog",
    url: "/blog",
    active: "nested-url",
    icon: <Icon.LibraryBig />,
  },
  {
    text: "Showcase",
    url: "/showcase",
    active: "nested-url",
    icon: <Icon.Award />,
  },
]

export const labPagesOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: labsSource.pageTree,
  links,
}

export const hivePagesOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: hiveSource.pageTree,
  links,
}

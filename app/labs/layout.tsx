import type { ReactNode } from "react"

import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { labPagesOptions } from "../layout.config"

import { SidebarFooter, DocsBanner } from "@/components/"

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...labPagesOptions}
      sidebar={{
        prefetch: true,
        banner: <DocsBanner />,
        footer: <SidebarFooter />,
        collapsible: true,
        tabs: false,
      }}
    >
      {children}
    </DocsLayout>
  )
}

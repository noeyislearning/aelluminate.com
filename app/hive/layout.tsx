import type { ReactNode } from "react"

import { DocsLayout } from "fumadocs-ui/layouts/docs"

import { hivePagesOptions } from "../layout.config"
import { SidebarFooter, DocsBanner } from "@/components/"

export default function HiveLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...hivePagesOptions}
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

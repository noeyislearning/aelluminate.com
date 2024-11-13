import type { ReactNode } from "react"

import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { labPagesOptions } from "../layout.config"

import { SidebarFooter } from "@/components/"

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...labPagesOptions}
      sidebar={{
        prefetch: true,
        banner: <div className="text-xs">Promoting knowledge sharing.</div>,
        footer: <SidebarFooter />,
        collapsible: true,
        tabs: false,
      }}
    >
      {children}
    </DocsLayout>
  )
}

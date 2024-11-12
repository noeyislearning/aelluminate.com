import type { ReactNode } from "react"

import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { pagesOptions } from "../../layout.config"

import { SidebarFooter } from "@/components/"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...pagesOptions}
      sidebar={{
        prefetch: true,
        banner: <div className="text-xs">Promoting knowledge sharing.</div>,
        footer: <SidebarFooter />,
        collapsible: true,
      }}
    >
      {children}
    </DocsLayout>
  )
}

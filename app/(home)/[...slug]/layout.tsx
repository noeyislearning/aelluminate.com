import { DocsLayout } from "fumadocs-ui/layouts/docs"
import type { ReactNode } from "react"
import { pagesOptions } from "../../layout.config"

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...pagesOptions}>{children}</DocsLayout>
}

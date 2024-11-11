import type { ReactNode } from "react"
import type { Metadata } from "next"

import { RootProvider } from "fumadocs-ui/provider"
import "@/assets/core.css"

import { lora, lexend } from "@/utils/fonts"
import { metadata as SiteMetadata } from "@/utils/meta/metadata"
export const metadata: Metadata = SiteMetadata

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={[lora.variable, lexend.variable].join(" ")} suppressHydrationWarning>
      <body className="h-screen font-lexend tracking-tight">
        <RootProvider
          theme={{
            enabled: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  )
}

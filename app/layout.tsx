import type { ReactNode } from "react"

import { RootProvider } from "fumadocs-ui/provider"
import "@/assets/core.css"

import { lora, lexend } from "@/utils/fonts"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={[lora.variable, lexend.variable].join(" ")} suppressHydrationWarning>
      <body className="font-lexend tracking-tight">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}

import type { ReactNode } from "react"
import type { Metadata } from "next"

import "@/assets/core.css"

import { lora, lexend, jetbrains } from "@/utils/fonts"
import { metadata as SiteMetadata } from "@/utils/meta/metadata"
export const metadata: Metadata = SiteMetadata

import { Provider } from "./provider"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={[lora.variable, lexend.variable, jetbrains.variable].join(" ")}
      suppressHydrationWarning
    >
      <body className="min-h-full font-lexend tracking-tight">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}

"use client"

import { RootProvider } from "fumadocs-ui/provider"

import type { ReactNode } from "react"
import { TooltipProvider } from "@radix-ui/react-tooltip"

export function Provider({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <RootProvider
      theme={{
        enabled: true,
        defaultTheme: "light",
      }}
    >
      <TooltipProvider>
        <script suppressHydrationWarning />
        {children}
      </TooltipProvider>
    </RootProvider>
  )
}

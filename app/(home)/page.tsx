import * as React from "react"

import { HomeLayout } from "fumadocs-ui/layouts/home"
import { navLinks } from "@/lib/nav-links"
import { HomeHero } from "@/components"

export default function HomePage() {
  return (
    <HomeLayout
      nav={{ title: <p>Aelluminate</p> }}
      links={navLinks}
      githubUrl="https://github.com/LiterateInk"
    >
      <div className="grid min-h-screen" style={{ gridTemplateRows: "1fr auto" }}>
        <main className="relative w-full space-y-16 overflow-hidden px-4 pb-48 pt-8 lg:px-0">
          <section className="mx-auto w-full max-w-6xl overflow-x-hidden">
            <HomeHero />
          </section>
          <div className="absolute -bottom-12 left-0 right-0 h-[150px] w-full rounded-full bg-[hsl(var(--hue),60,40)]/30 blur-[100px] transition-colors dark:bg-[hsl(var(--hue),50,60)]/60" />
        </main>
      </div>
    </HomeLayout>
  )
}

import * as React from "react"

import { HomeLayout } from "fumadocs-ui/layouts/home"
import { navLinks } from "@/lib/links"
import { NavLogo, HomeHero, Footer } from "@/components"

export default function HomePage() {
  return (
    <HomeLayout nav={{ title: <NavLogo /> }} links={navLinks} className="container h-full">
      <div className="grid h-full" style={{ gridTemplateRows: "1fr auto" }}>
        <main className="relative w-full overflow-hidden px-4 pt-8 lg:px-0">
          <section className="mx-auto w-full overflow-x-hidden">
            <HomeHero />
          </section>
        </main>
        <Footer />
      </div>
    </HomeLayout>
  )
}

import Link from "next/link"
import * as RemixIcons from "@remixicon/react"
import { socialLinks } from "@/lib/links"

export default function Footer() {
  return (
    <footer className="mt-auto flex border-t">
      <div className="container flex w-full flex-col items-center justify-between gap-2 p-2 md:flex-row lg:flex-row">
        <p className="order-2 text-sm text-stone-800 dark:text-stone-100 md:order-1">
          &copy; {new Date().getFullYear()} Aelluminate. All rights reserved.
        </p>
        <div className="order-1 flex flex-row items-center gap-4 md:order-2">
          <div className="flex flex-row items-center gap-4">
            {socialLinks
              .filter((link) => link.text)
              .map((link) => {
                const Icon = RemixIcons[`${link.icon}` as keyof typeof RemixIcons]
                return (
                  Icon && (
                    <Link key={link.url} href={link.url} target={"_blank"}>
                      <span className="flex items-center text-sm hover:text-fd-primary">
                        <Icon className="h-5 w-5" />
                        <span className="text-sm">{link.text}</span>
                      </span>
                    </Link>
                  )
                )
              })}
          </div>
          <div className="mx-2 h-6 border-r"></div>
          <div className="flex flex-row items-center gap-2">
            {socialLinks
              .filter((link) => !link.text)
              .map((link) => {
                const Icon = RemixIcons[`${link.icon}` as keyof typeof RemixIcons]
                return (
                  Icon && (
                    <Link key={link.url} href={link.url} target={"_blank"}>
                      <span className="flex items-center gap-1 text-sm hover:text-fd-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                    </Link>
                  )
                )
              })}
          </div>
        </div>
      </div>
    </footer>
  )
}

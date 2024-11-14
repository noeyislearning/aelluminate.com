import Link from "next/link"
import { blog } from "@/lib/source"

import { HomeLayout } from "fumadocs-ui/layouts/home"
import { navLinks } from "@/lib/links"
import { NavLogo, Footer } from "@/components"
import { svg } from "@/lib/backgrounds"

export default function BlogsPage(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  )

  return (
    <HomeLayout nav={{ title: <NavLogo /> }} links={navLinks} className="h-screen">
      <main className="container max-sm:px-0 md:py-12">
        <div
          className="h-[300px] p-8 md:h-[400px] md:p-12"
          style={{
            backgroundImage: [
              "radial-gradient(circle at 70% 10%, rgba(224, 92, 70, 0.5), transparent)",
              "radial-gradient(circle at 0% 80%, rgba(224, 92, 70, 0.5), transparent)",
              "radial-gradient(circle at 50% 50%, rgba(224, 92, 70, 0.3), transparent)",
              `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
            ].join(", "),
          }}
        >
          <h1 className="mb-4 border-b-4 border-fd-foreground pb-2 text-4xl font-bold md:text-5xl">
            Welcome to /blog
          </h1>
          <p className="text-sm md:text-base">
            Here you&apos;ll find all the latest posts from the Aelluminate team. Stay tuned for
            more updates!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 pt-4 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="flex flex-col border border-fd-primary/25 bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <p className="font-lora text-xl font-bold">{post.data.title}</p>
              <p className="line-clamp-4 text-sm text-fd-muted-foreground">
                {post.data.description}
              </p>

              <div className="mt-auto flex w-full flex-col items-start justify-between pt-4">
                <div className="text-xs">
                  by <span>{post.data.authors?.map((author) => author.name).join(", ")}</span>
                </div>
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="text-xs text-fd-muted-foreground">
                    {new Date(post.data.date ?? post.file.name).toDateString()}
                  </p>
                  {new Date().getTime() - new Date(post.data.date ?? post.file.name).getTime() <=
                    7 * 24 * 60 * 60 * 1000 && (
                    <span className="bg-fd-primary px-2 py-1 text-xs">Latest</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </HomeLayout>
  )
}

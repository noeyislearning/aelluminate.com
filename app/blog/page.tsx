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
          className="h-fit p-8 text-white md:h-[200px] md:p-12"
          style={{
            backgroundColor: "black",
            backgroundImage: `url(${"https://images.unsplash.com/photo-1626282874430-c11ae32d2898"}), url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
            backgroundBlendMode: "difference, difference, normal",
          }}
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Welcome to /blog</h1>
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
              className="bg-fd-cardtransition-colors flex h-full w-full flex-col border border-fd-primary hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <div className="flex h-full flex-col items-start p-4">
                <p className="font-lora text-xl font-bold">{post.data.title}</p>
                <p className="line-clamp-4 pt-2 text-sm text-fd-muted-foreground">
                  {post.data.description}
                </p>
                <div className="mt-auto pt-4 text-xs">
                  by <span>{post.data.authors?.map((author) => author.name).join(", ")}</span>
                </div>
              </div>

              <div className="flex w-full flex-row items-center justify-between bg-fd-primary px-4 text-xs text-fd-primary-foreground">
                <p>{new Date(post.data.date ?? post.file.name).toDateString()}</p>
                <div className="flex flex-row items-center justify-between">
                  {new Date().getTime() - new Date(post.data.date ?? post.file.name).getTime() <=
                    7 * 24 * 60 * 60 * 1000 && <span className="px-2 py-1">Latest</span>}
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

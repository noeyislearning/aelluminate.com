import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from "fumadocs-mdx/config"
import { fileGenerator, remarkDocGen, remarkInstall, typescriptGenerator } from "fumadocs-docgen"
import { z } from "zod"

export const { docs, meta } = defineDocs()

export const blog = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    authorLinks: z
      .array(
        z.object({
          platform: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
    date: z.string().date().or(z.date()).optional(),
    thumbnail: z.string().url().optional(),
  }),
  type: "doc",
})

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "min-light",
        dark: "github-dark-dimmed",
      },
    },
    remarkPlugins: [
      [remarkInstall, { Tabs: "InstallTabs" }],
      [remarkDocGen, { generators: [typescriptGenerator(), fileGenerator()] }],
    ],
  },
})

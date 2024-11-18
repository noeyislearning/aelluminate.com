import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from "fumadocs-mdx/config"
import { fileGenerator, remarkDocGen, remarkInstall, typescriptGenerator } from "fumadocs-docgen"
import { remarkAdmonition, remarkImage, remarkStructure } from "fumadocs-core/mdx-plugins"
import { remarkKbdNested } from "remark-kbd-nested"
import rehypeExternalLinks from "rehype-external-links"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import { z } from "zod"

export const { docs: labsDocs, meta: labsMeta } = defineDocs({
  dir: "content/labs",
})

export const { docs: hiveDocs, meta: hiveMeta } = defineDocs({
  dir: "content/hive",
})

export const blog = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    authors: z.array(
      z.object({
        name: z.string(),
        links: z
          .array(
            z.object({
              platform: z.string(),
              url: z.string().url(),
            }),
          )
          .optional(),
      }),
    ),
    tags: z.array(
      z.object({
        name: z.string(),
      }),
    ).optional(),
    date: z.string().date().or(z.date()).optional(),
    thumbnail: z.string().url().optional(),
  }),
  type: "doc",
})

export default defineConfig({
  lastModifiedTime: "git",
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
      [remarkAdmonition],
      [remarkImage],
      [remarkStructure],
      [remarkKbdNested],
      [remarkMath],
    ],
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
      [rehypeKatex],
    ],
  },
})

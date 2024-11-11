import { defineDocs, defineConfig } from "fumadocs-mdx/config"
import { fileGenerator, remarkDocGen, remarkInstall, typescriptGenerator } from "fumadocs-docgen"

export const { docs, meta } = defineDocs()

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

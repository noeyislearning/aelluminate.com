import { DocsPageProps } from "fumadocs-ui/page"

export interface ExtendedDocsPageProps extends DocsPageProps {
  params: { slug?: string[] }
}

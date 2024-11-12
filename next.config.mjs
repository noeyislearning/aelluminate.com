import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
}

export default withMDX(config)

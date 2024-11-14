import { createMDX } from "fumadocs-mdx/next"

const withMDX = createMDX()

const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
}

export default withMDX(config)

import { Metadata } from "next"
import { keywords } from "./keywords"

export const metadata: Metadata = {
  title: {
    default: "Aelluminate",
    template: "%s | Aelluminate",
  },
  keywords: keywords,
  manifest: "https://aelluminate.com/manifest.json",
  generator: "Aelluminate",
  applicationName: "Aelluminate",
  description: "Exploring the future through machine learning, AI, and data science.",
  openGraph: {
    title: "Aelluminate",
    description: "Exploring the future through machine learning, AI, and data science.",
    url: "https://aelluminate.com",
    siteName: "Aelluminate",
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Aelluminate",
    card: "summary_large_image",
    site: "@aelluminate",
    creator: "@aelluminate",
    creatorId: "1658936245899370503",
    description: "Exploring the future through machine learning, AI, and data science.",
    images: [
      {
        url: "https://aelluminate.com/og.png",
        width: 1920,
        height: 1080,
        alt: "Aelluminate Open Graph Image",
      },
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
  alternates: {
    canonical: "https://aelluminate.com",
    languages: {},
  },
  verification: {
    other: {
      me: ["support@aelluminate.com"],
    },
  },
  appLinks: {
    web: {
      url: "https://aelluminate.com",
      should_fallback: true,
    },
  },
  category: "business",
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://aelluminate.com")

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://aelluminate.com",
      images: "/og.png",
      siteName: "Aelluminate",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@aelluminate",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/og.png",
      ...override.twitter,
    },
  }
}

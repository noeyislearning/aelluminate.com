import { Metadata } from "next"
import { keywords } from "./keywords"

export const metadata: Metadata = {
  title: {
    default: "Aelluminate",
    template: "%s | Aelluminate",
  },
  keywords: keywords,
  manifest: "",
  generator: "Aelluminate",
  applicationName: "Aelluminate",
  description: "",
  openGraph: {
    title: "Aelluminate",
    description: "",
    url: "",
    siteName: "Aelluminate",
    images: [
      {
        url: "",
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
    description: "",
    images: [
      {
        url: "",
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
    canonical: "",
    languages: {},
  },
  verification: {
    other: {
      me: [""],
    },
  },
  appLinks: {
    web: {
      url: "",
      should_fallback: true,
    },
  },
  category: "service",
}

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? new URL("http://localhost:3000")
    : new URL("https://aelluminate.com")

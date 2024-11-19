import React from "react"
import Image from "next/image"

import { ImageSMBannerProps } from "@/types/components"

export default function ImageSMBanner({
  link,
  alt,
  author = "Aelluminate Team",
}: ImageSMBannerProps & { author: string }) {
  return (
    <div className="relative h-48 w-full rounded-md bg-fd-primary/75 contrast-75">
      <Image
        src={link}
        width={1000}
        height={1000}
        alt={alt}
        className="h-48 w-full rounded-md object-cover"
      />
      <div className="absolute bottom-2 right-2 rounded bg-black bg-opacity-50 px-2 py-1 text-[10px] text-white">
        by {author}
      </div>
    </div>
  )
}

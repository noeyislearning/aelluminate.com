"use client"

import * as React from "react"
import { ChevronsUp } from "lucide-react"

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-fd-primary p-2 text-white shadow-lg"
      >
        <ChevronsUp className="size-6" />
      </button>
    )
  )
}

export default GoToTopButton

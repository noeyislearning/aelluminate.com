import { GridPattern } from "@/components"

import { cn } from "@/utils/cn"

export function HomeHero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-2 py-16 text-center md:py-20 lg:px-0">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "-z-20 [mask-image:radial-gradient(650px_circle_at_center,white,transparent)]",
        )}
      />
      <h1
        className={cn(
          "mb-2 flex flex-col text-balance font-lora text-4xl font-extrabold tracking-tight sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl xl:text-8xl",
          "[&>span]:dark:bg-gradient-to-t [&>span]:dark:from-muted-foreground [&>span]:dark:to-foreground",
          "[&>span]:dark:to-40% [&>span]:dark:bg-clip-text [&>span]:dark:text-transparent",
        )}
      >
        <span>Exploring the future through machine learning, AI, and data science.</span>
      </h1>
      <p className="font-base max-w-5xl text-balance font-light text-muted-foreground sm:text-lg md:text-xl lg:text-2xl">
        We are not just <span className="font-medium text-secondary-foreground">building</span>{" "}
        solutions; we are <span className="font-medium text-secondary-foreground">shaping</span> the
        future.{" "}
      </p>
    </section>
  )
}

export default HomeHero

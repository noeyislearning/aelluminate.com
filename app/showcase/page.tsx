import Link from "next/link"

import { HomeLayout } from "fumadocs-ui/layouts/home"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip"
import * as Icon from "lucide-react"

import { navLinks } from "@/lib/links"
import { cn } from "@/utils/cn"
import { NavLogo, Footer, ButtonVariants } from "@/components"

import projectsData from "@/data/projects.json"

function formatGitHubURL(url: string): string {
  const urlParts = url.split("/")
  const repoName = urlParts[urlParts.length - 1]
  const truncatedRepoName = repoName.length > 10 ? `${repoName.substring(0, 7)}...` : repoName
  return `github.com/.../${truncatedRepoName}`
}

export default function ShowcasePage(): React.ReactElement {
  const projects = projectsData.projects

  return (
    <HomeLayout nav={{ title: <NavLogo /> }} links={navLinks} className="h-screen">
      <main className="container max-sm:px-0 md:py-12">
        <div className="absolute inset-0 z-[-1] select-none overflow-hidden opacity-30">
          {/* <Image
          alt="spot"
          src={Spot}
          sizes="100vw"
          className="size-full min-w-[800px] max-w-fd-container"
          priority
        /> */}
        </div>
        <div className="container my-12 text-center">
          <h1 className="mb-4 font-lora text-4xl font-bold md:text-5xl">
            Learning, Building, Sharing
          </h1>
          <p className="text-fd-muted-foreground">
            Explore projects built by our team and talented students.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <div rel="noreferrer noopener" className={cn(ButtonVariants(), "cursor-pointer")}>
              Share yours now!
            </div>
            <span className="text-xs">Will be available soon.</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 pt-4 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <Link
              href={project.githubURL}
              key={project.githubURL}
              rel="noreferrer noopener"
              target="_blank"
              className="flex cursor-pointer flex-col border border-fd-primary/25 bg-fd-card p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <div className="mb-2 flex flex-row items-center justify-between gap-2 text-fd-primary">
                <span className="text-sm">/{project.org}</span>
                {project.isFeatured && <Icon.Award className="h-5 w-5" />}
              </div>
              <h2 className="font-lora text-xl font-bold">{project.name}</h2>
              <p className="line-clamp-4 text-sm text-fd-muted-foreground">{project.description}</p>

              <div className="mt-auto flex w-full flex-row items-center justify-between gap-2 pt-4 md:flex-col md:items-start lg:flex-row lg:items-center">
                <div className="flex flex-row items-center gap-1 text-xs">
                  {project.contributors.slice(0, 3).map((contributor, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip delayDuration={50}>
                        <TooltipTrigger asChild>
                          <div className="relative inline-flex h-5 w-5 items-center justify-center overflow-hidden bg-fd-primary">
                            <span className="font-medium">
                              {contributor.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          align="center"
                          className="mb-2 bg-fd-muted px-4 py-1"
                        >
                          <span className="text-sm">@{contributor.name}</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                  {project.contributors.length > 3 && (
                    <TooltipProvider>
                      <Tooltip delayDuration={50}>
                        <TooltipTrigger asChild>
                          <div className="relative inline-flex h-5 w-5 cursor-pointer items-center justify-center overflow-hidden bg-fd-primary">
                            <span className="font-medium">+{project.contributors.length - 3}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          align="center"
                          className="mb-2 bg-fd-muted px-4 py-1"
                        >
                          <span className="text-sm">
                            {project.contributors.slice(3).map((contributor, index) => (
                              <span key={index}>
                                @{contributor.name}
                                {index < project.contributors.slice(3).length - 1 && ", "}
                              </span>
                            ))}
                          </span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                <span className="text-xs">{formatGitHubURL(project.githubURL)}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </HomeLayout>
  )
}

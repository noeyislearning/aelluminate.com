import React, { ReactNode } from "react"
import { Callout as OriginalCallout } from "fumadocs-ui/components/callout"

interface CustomCalloutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string | ReactNode
  type?: "info" | "warn" | "error"
  icon?: ReactNode
}

const CustomCallout: React.FC<CustomCalloutProps> = ({ children, ...props }) => {
  const processChildren = (children: ReactNode): ReactNode => {
    if (Array.isArray(children)) {
      return children.map((child, index) => {
        if (
          React.isValidElement<React.AnchorHTMLAttributes<HTMLAnchorElement>>(child) &&
          child.type === "a"
        ) {
          return React.cloneElement(child, {
            target: "_blank",
            rel: "noopener noreferrer",
            key: index,
          })
        }
        if (
          React.isValidElement(child) &&
          child.props &&
          (child.props as { children?: ReactNode }).children
        ) {
          return React.cloneElement(child, {
            children: processChildren((child.props as { children?: ReactNode }).children),
            key: index,
          } as React.HTMLAttributes<HTMLElement>)
        }
        return child
      })
    }
    return children
  }

  return <OriginalCallout {...props}>{processChildren(children)}</OriginalCallout>
}

export default CustomCallout

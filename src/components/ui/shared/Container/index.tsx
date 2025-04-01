import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"

type ContainerProps<T extends React.ElementType = 'section'> = {
  id: string
  children: React.ReactNode
  className?: string
  maxW?: boolean
  role?: string
  ariaLabel?: string
  dataTestId?: string
  sectionName?: string
  container?: string
  as?: T
} & React.ComponentPropsWithoutRef<T>

const Container = forwardRef<HTMLElement, ContainerProps<any>>((
  {
    id,
    children,
    className,
    maxW = false,
    role,
    ariaLabel,
    dataTestId,
    sectionName,
    as = 'main',
    container = "relative min-h-screen    w-full content-center",
    ...props
  }, 
  ref
) => {
  const Component = as

  return (
    <Component
      id={id}
      className={cn(
        container, 
        maxW ? '' : 'p-6'
      )}
      role={role || "region"}
      aria-label={ariaLabel || sectionName || id}
      data-testid={dataTestId || `section-${id}`}
      data-section-name={sectionName || id}
      ref={ref} 
    >
      <main 
        {...props}
        className={cn(
          "mx-auto  relative    w-full",
          className,
          maxW ? '' : 'max-w-7xl '
        )}
      >
        {children}
      </main>
    </Component>
  )
})



export default Container;
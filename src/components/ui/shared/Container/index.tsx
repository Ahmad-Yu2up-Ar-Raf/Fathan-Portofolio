import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"

type ContainerProps<T extends React.ElementType = 'main'> = {
  id: string
  children: React.ReactNode
  className?: string
  maxW?: boolean
  role?: string
  ariaLabel?: string
  dataTestId?: string
  sectionName?: string
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
    ...props
  }, 
  ref
) => {
  const Component = as

  return (
    <section
      id={id}
      className={cn(
        "relative min-h-screen w-full content-center",
        maxW ? '' : 'p-6'
      )}
      role={role || "region"}
      aria-label={ariaLabel || sectionName || id}
      data-testid={dataTestId || `section-${id}`}
      data-section-name={sectionName || id}
      ref={ref} 
    >
      <Component 
        {...props}
        className={cn(
          "mx-auto  relative   w-full",
          className,
          maxW ? '' : 'max-w-7xl'
        )}
      >
        {children}
      </Component>
    </section>
  )
})



export default Container;
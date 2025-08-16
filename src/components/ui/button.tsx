import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-brand-forest to-brand-navy text-primary-foreground hover:shadow-premium transform hover:scale-105 border border-brand-forest/30",
        destructive:
          "bg-gradient-to-r from-destructive to-red-500 text-destructive-foreground hover:shadow-fresh transform hover:scale-105",
        outline:
          "border-2 border-brand-forest/40 bg-background/80 backdrop-blur-sm hover:bg-brand-forest/5 hover:border-brand-forest hover:shadow-premium text-brand-forest",
        secondary:
          "bg-gradient-to-r from-brand-navy to-brand-sage text-secondary-foreground hover:shadow-luxury transform hover:scale-105",
        ghost: "hover:bg-brand-forest/5 hover:text-brand-forest hover:shadow-fresh/50",
        link: "text-brand-forest underline-offset-4 hover:underline hover:text-fresh-green",
        premium: "bg-gradient-fresh text-primary-foreground hover:shadow-premium transform hover:scale-105 animate-premium-pulse golden-accent",
        luxury: "glass-morphism elegant-border text-brand-forest hover:shadow-luxury transform hover:scale-105 luxury-gradient",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

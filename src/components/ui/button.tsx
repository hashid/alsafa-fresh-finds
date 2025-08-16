import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-brand-cyber to-brand-electric text-primary-foreground hover:shadow-cyber transform hover:scale-105 border border-brand-cyber/50",
        destructive:
          "bg-gradient-to-r from-destructive to-red-500 text-destructive-foreground hover:shadow-neon transform hover:scale-105",
        outline:
          "border-2 border-brand-cyber/50 bg-background/50 backdrop-blur-sm hover:bg-brand-cyber/10 hover:border-brand-cyber hover:shadow-cyber text-brand-cyber",
        secondary:
          "bg-gradient-to-r from-neural-purple to-brand-neon text-secondary-foreground hover:shadow-neural transform hover:scale-105",
        ghost: "hover:bg-brand-cyber/10 hover:text-brand-cyber hover:shadow-cyber/50",
        link: "text-brand-cyber underline-offset-4 hover:underline hover:text-brand-neon",
        cyber: "bg-gradient-quantum text-primary-foreground hover:shadow-cyber transform hover:scale-105 animate-cyber-pulse",
        neural: "glass-morphism neural-border text-brand-cyber hover:shadow-neural transform hover:scale-105",
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

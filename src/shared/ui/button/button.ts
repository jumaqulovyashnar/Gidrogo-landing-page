import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        default:
          'bg-sky-600 text-white shadow-md shadow-sky-600/20 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-600/30',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-sky-50/70 hover:border-sky-300 hover:text-sky-600',
        secondary:
          'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-100',
        ghost: 'hover:bg-sky-50 hover:text-sky-600 text-slate-700',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2.5',
        sm: 'h-9 rounded-lg px-4 text-xs',
        lg: 'h-13 rounded-2xl px-8 text-base font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

import { HTMLAttributes, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "font-medium bg-blue-500 text-white rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    children: ReactNode;
  };

export function ButtonForm({ children }: ButtonProps) {
  return (
    <button className={button({ size: "sm", color: "secondary" })}>
      {children}
    </button>
  );
}

import { HTMLAttributes, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "bg-bg text-white rounded-xl text-center",
  variants: {
    color: {
      primary: "bg-bg text-white hover:bg-bgDark",
      secondary: "text-bg border border-bg hover:bg-bgBase",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-5 h-12 w-full",
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
    <button className={button({ size: "lg", color: "primary" })}>
      {children}
    </button>
  );
}

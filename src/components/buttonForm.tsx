import { HTMLAttributes, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "bg-bg text-white rounded-xl text-center",
  variants: {
    color: {
      primary: "bg-bg text-white hover:bg-bgDark",
      secondary: "bg-white text-bg border border-bg hover:bg-bgBase",
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
    type?: "submit" | "reset" | "button" | undefined;
  };

export function ButtonForm({
  children,
  size,
  color,
  type,
  ...props
}: ButtonProps) {
  return (
    <button type={type} {...props} className={button({ size, color })}>
      {children}
    </button>
  );
}

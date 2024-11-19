interface IconProps {
  children: React.ReactNode;
}

export function Icon({ children }: IconProps) {
  return (
    <span className="rounded-xl bg-blueLight h-24 w-20 flex items-center justify-center">
      {children}
    </span>
  );
}

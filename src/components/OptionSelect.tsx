import { Check } from "lucide-react";
import { ReactNode } from "react";

interface OptionSelectProps {
  children: ReactNode;
  isSelect: boolean;
}

export function OptionSelect({ children, isSelect }: OptionSelectProps) {
  return isSelect ? (
    <li className="px-4 h-12 flex items-center cursor-pointer justify-between text-bg hover:text-bgDark">
      {children}
      <span>
        <Check />
      </span>
    </li>
  ) : (
    <li className="px-4 h-12 flex items-center hover:text-bgDark cursor-pointer">
      {children}
    </li>
  );
}

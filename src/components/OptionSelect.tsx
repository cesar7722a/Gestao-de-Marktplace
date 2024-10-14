import { Check } from "lucide-react";
import { ReactNode } from "react";

interface OptionSelectProps {
  children: ReactNode;
  isSelect: boolean;
  key: string | number;
}

export function OptionSelect({ children, isSelect, key }: OptionSelectProps) {
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return isSelect ? (
    <li
      key={key}
      onClick={handleClick}
      className="px-4 h-12 flex items-center cursor-pointer justify-between text-bg hover:text-bgDark"
    >
      {children}
      <span>
        <Check />
      </span>
    </li>
  ) : (
    <li
      key={key}
      onClick={handleClick}
      className="px-4 h-12 flex items-center hover:text-bgDark cursor-pointer"
    >
      {children}
    </li>
  );
}

import { Check } from "lucide-react";
import React, { ReactNode } from "react";

interface option {
  name: string;
  isSelect: boolean;
  id: number;
}

interface OptionSelectProps {
  children: ReactNode;
  isSelect: boolean;
  id: string | number;
  options: option[];
  setOptions: React.Dispatch<React.SetStateAction<option[]>>;
}

export function OptionSelect({
  children,
  isSelect,
  id,
  setOptions,
  options,
}: OptionSelectProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    idSelect: number | string
  ) => {
    event.stopPropagation();

    console.log(idSelect);
    options.map((option) => {
      if (option.id === idSelect) {
        option.isSelect = true;
      } else {
        option.isSelect = false;
      }
    });
    setOptions(options);
    console.log(options);
  };

  return isSelect ? (
    <li
      key={id}
      onClick={(e) => handleClick(e, id)}
      className="px-4 h-12 flex items-center cursor-pointer justify-between text-bg hover:text-bgDark"
    >
      {children}
      <span>
        <Check />
      </span>
    </li>
  ) : (
    <li
      key={id}
      onClick={(e) => handleClick(e, id)}
      className="px-4 h-12 flex items-center hover:text-bgDark cursor-pointer"
    >
      {children}
    </li>
  );
}

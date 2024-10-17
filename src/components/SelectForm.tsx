import { ChevronDown, ChevronUp, X } from "lucide-react";
import { OptionSelect } from "./OptionSelect";
import React, { useState } from "react";

interface option {
  name: string;
  isSelect: boolean;
  id: number;
}

interface SelectFormProps {
  options: option[];
  setOptions: React.Dispatch<React.SetStateAction<option[]>>;
}

export function SelectForm({ options, setOptions }: SelectFormProps) {
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

  const handleSelect = () => {
    if (selectIsOpen) {
      setSelectIsOpen(false);
    } else {
      setSelectIsOpen(true);
    }
  };

  const optionSelect = options.find((a) => a.isSelect === true);
  return (
    <label htmlFor="" className="border border-t-0 border-r-0 border-l-0">
      <span className="text-xs text-textPrimary">Categoria</span>
      <span
        onClick={handleSelect}
        className="relative  py-[14px] flex text-textPrimary cursor-pointer"
      >
        <aside className="flex-1 text-textSecondary">
          {optionSelect?.name}
        </aside>
        <X className="size-6 cursor-pointer p-1 bg-bgGeral rounded-full" />
        {selectIsOpen ? (
          <ChevronUp className="size-6 cursor-pointer" />
        ) : (
          <ChevronDown className="size-6 cursor-pointer" />
        )}

        {selectIsOpen && (
          <ul className="absolute flex bg-white flex-col gap-2 py-3 px-6 w-full top-16 rounded-lg border">
            {options.map((option) => (
              <OptionSelect
                key={option.id}
                setOptions={setOptions}
                id={option.id}
                isSelect={option.isSelect}
                options={options}
              >
                {option.name}
              </OptionSelect>
            ))}
          </ul>
        )}
      </span>
    </label>
  );
}

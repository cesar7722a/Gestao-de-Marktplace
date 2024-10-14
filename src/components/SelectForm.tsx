import { ChevronDown, ChevronUp, X } from "lucide-react";
import { OptionSelect } from "./OptionSelect";

interface option {
  name: string;
  isSelect: boolean;
}

interface SelectFormProps {
  handleSelect: () => void;
  options: option[];
  selectIsOpen: boolean;
}

export function SelectForm({
  handleSelect,
  options,
  selectIsOpen,
}: SelectFormProps) {
  return (
    <label htmlFor="" className="border border-t-0 border-r-0 border-l-0">
      <span className="text-xs text-textPrimary">Categoria</span>
      <span
        onClick={handleSelect}
        className="relative  py-[14px] flex text-textPrimary cursor-pointer"
      >
        <aside className="flex-1 text-textSecondary">Móvel</aside>
        <X className="size-6 cursor-pointer p-1 bg-bgGeral rounded-full" />
        {selectIsOpen ? (
          <ChevronUp className="size-6 cursor-pointer" />
        ) : (
          <ChevronDown className="size-6 cursor-pointer" />
        )}

        {selectIsOpen && (
          <ul className="absolute flex bg-white flex-col gap-2 py-3 px-6 w-full top-16 rounded-lg">
            {options.map((option) => (
              <OptionSelect key={option.name} isSelect={option.isSelect}>
                {option.name}
              </OptionSelect>
            ))}
          </ul>
        )}
      </span>
    </label>
  );
}

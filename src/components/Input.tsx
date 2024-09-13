import { LucideIcon } from "lucide-react";

type InputProps = {
  titleLabel: string;
  name: string;
  placeholder: string;
  type: string;
  Icon: LucideIcon;
};

export function Input({
  name,
  placeholder,
  titleLabel,
  type,
  Icon,
}: InputProps) {
  return (
    <label htmlFor="" className="flex flex-col text-[#666666] text-xs">
      {titleLabel}
      <span className="flex gap-2 px-2 py-2 border border-r-0 border-t-0 border-l-0 border-[#666666]">
        <Icon className="size-6 text-[#949494]" />
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="text-base flex-1 outline-none text-[#949494]"
        />
      </span>
    </label>
  );
}

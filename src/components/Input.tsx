import { LucideIcon } from "lucide-react";

type InputProps = {
  titleLabel?: string;
  name: string;
  placeholder: string;
  type: string;
  value: string | undefined | number;
  Icon: LucideIcon;
  handleChange?: (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => void;
};

export function Input({
  name,
  placeholder,
  titleLabel,
  type,
  Icon,
  value,
  handleChange,
}: InputProps) {
  return (
    <label htmlFor="" className="flex flex-col text-textPrimary text-xs">
      {titleLabel}
      <span className="flex gap-2 px-2 py-2 border border-r-0 border-t-0 border-l-0 border-textPrimary">
        <Icon className="size-6 text-textTerciary" />
        <input
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          className="text-base flex-1 outline-none text-textTerciary"
          onChange={handleChange}
        />
      </span>
    </label>
  );
}

import { InputProps } from "../type/types";

export function TextArea({ name, value, handleChange }: InputProps) {
  return (
    <label
      htmlFor=""
      className="flex flex-col gap-2 border border-t-0 border-r-0 border-l-0 pb-2"
    >
      <span className="text-xs text-textPrimary">Descrição</span>
      <textarea
        name={name}
        value={value}
        id=""
        cols={5}
        className="max-w-[539px] h-20 text-textSecondary px-2 outline-none"
        onChange={handleChange}
      />
    </label>
  );
}

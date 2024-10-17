import { ChangeEvent } from "react";

interface InputNameProps {
  name?: string | undefined;
  price?: string | undefined | number;
  handleChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export function InputName({ handleChange, name }: InputNameProps) {
  return (
    <label className="flex-1 flex flex-col gap-2 border border-t-0 border-r-0 border-l-0">
      <span className="text-xs text-textPrimary">Título</span>
      <input
        type="text"
        name="name"
        value={name}
        className="text-[#3D3D3D] outline-none"
        onChange={handleChange}
      />
    </label>
  );
}
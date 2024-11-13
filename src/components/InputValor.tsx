import { InputProps } from "../type/types";

export function InputValor({ price, handleChange }: InputProps) {
  return (
    <label className="pb-2 flex flex-col gap-2 max-w-[200px] border border-t-0 border-r-0 border-l-0">
      <span className="text-xs text-textPrimary">Valor</span>
      <span className="flex gap-2 text-textSecondary">
        <aside className="text-bg">R$</aside>
        <input
          type="text"
          name="price"
          value={Number(price).toFixed(2)}
          className=" outline-none max-w-40"
          onChange={handleChange}
          placeholder="Digete o preço"
        />
      </span>
    </label>
  );
}

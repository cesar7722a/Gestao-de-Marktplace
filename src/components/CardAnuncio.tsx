import { ProdutosProps } from "../type/types";

export function CardAnuncio({ categoria, status }: ProdutosProps) {
  return (
    <span className="absolute z-50 top-1.5 right-2 flex gap-1 text-[10px] text-white">
      <aside className="rounded-full px-2 py-1  bg-bgBlue ">{status}</aside>
      <aside className="rounded-full px-2 py-1 bg-textSecondary">
        {categoria}
      </aside>
    </span>
  );
}

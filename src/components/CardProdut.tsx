import { ProdutosProps } from "../type/types";
import { CardAnuncio } from "./CardAnuncio";

interface CardProdutProps {
  changeToPageEdit: (id: number | undefined) => void;
  produt: ProdutosProps;
}

export function CardProdut({ produt, changeToPageEdit }: CardProdutProps) {
  return (
    <div
      onClick={() => changeToPageEdit(produt.id)}
      className="p-1 space-y-1 bg-white rounded-[20px] w-[331px] border hover:border-[#5EC5FD] cursor-pointer"
    >
      <figure className="relative">
        <img
          src={produt.image}
          alt="imagem produto"
          width={323}
          height={144}
          className="rounded-2xl"
        />
        <CardAnuncio categoria={produt.categoria} />
      </figure>
      <div className="px-3 pt-3 pb-4 space-y-2">
        <div className="flex text-[#1D1D1D]">
          <span className="flex-1 text-[#3D3D3D] font-semibold text-lg">
            {produt.name}
          </span>
          <span className="flex gap-1 items-center">
            <aside className="text-xs">R$</aside>
            <aside className="text-lg font-semibold">
              {Number(produt.price).toFixed(2)}
            </aside>
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-[#666]">{produt.descri}</p>
      </div>
    </div>
  );
}

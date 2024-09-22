type CardProdutProps = {
  image: string;
  name: string;
  price: number;
  descri: string;
};

export function CardProdut({ name, image, price, descri }: CardProdutProps) {
  return (
    <div className="p-1 space-y-1 bg-white rounded-[20px] w-[331px] border hover:border-[#5EC5FD]">
      <figure className="relative">
        <img
          src={image}
          alt="imagem produto"
          width={323}
          height={144}
          className="rounded-2xl"
        />
        <span className="absolute z-50 top-1.5 right-2 flex gap-1 text-[10px] text-white">
          <aside className="rounded-full px-2 py-1  bg-[#009CF0] ">
            anunciado
          </aside>
          <aside className="rounded-full px-2 py-1 bg-[#3D3D3D]">móvel</aside>
        </span>
      </figure>
      <div className="px-3 pt-3 pb-4 space-y-2">
        <div className="flex text-[#1D1D1D]">
          <span className="flex-1 text-[#3D3D3D] font-semibold text-lg">
            {name}
          </span>
          <span className="flex gap-1 items-center">
            <aside className="text-xs">R$</aside>
            <aside className="text-lg font-semibold">{price.toFixed(2)}</aside>
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-[#666]">{descri}</p>
      </div>
    </div>
  );
}

interface CardToatalProdutosProps {
  children: React.ReactNode;
}

export function CardToatalProdutos({ children }: CardToatalProdutosProps) {
  return (
    <div className="pl-3 pr-7 flex gap-4 bg-white h-28 items-center rounded-2xl">
      {children}
    </div>
  );
}

import { Header } from "../components/Header";

export function Produtos() {
  return (
    <div className="space-y-12">
      <Header />
      <div className="max-w-5xl flex flex-col justify-center items-center">
        <div className="text-start">
          <h1 className="text-2xl font-bold text-[#1D1D1D]">Seus produtos</h1>
          <h2 className="text-lg text-[#666666]">
            Acesse gerencie a sua lista de produtos à venda
          </h2>
        </div>
      </div>
    </div>
  );
}

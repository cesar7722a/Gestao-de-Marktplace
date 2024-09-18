import { ChevronDown, Search, Tag } from "lucide-react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Produtos() {
  return (
    <div className="space-y-12">
      <Header />
      <div className="max-w-5xl flex gap-8 flex-col justify-center items-center">
        <div className="text-start">
          <h1 className="text-2xl font-bold text-[rgb(29,29,29)]">
            Seus produtos
          </h1>
          <h2 className="text-lg text-[#666666]">
            Acesse gerencie a sua lista de produtos à venda
          </h2>
        </div>
        <div className="flex gap-6">
          <div className="p-6 space-y-6 rounded-[20px] bg-white">
            <h2 className="text-lg text-[#666666]">Filtrar</h2>
            <div>
              <form className="space-y-10">
                <div>
                  <Input
                    Icon={Search}
                    type="text"
                    name="seach"
                    placeholder="Pesquisar"
                  />
                  <div className="flex justify-between px-2 py-[14px] border border-r-0 border-t-0 border-l-0 border-[#666666] text-[#949494] cursor-pointer">
                    <div className="flex gap-2">
                      <Tag className="size-6" />
                      <span>Status</span>
                    </div>
                    <ChevronDown className="size-6" />
                  </div>
                </div>
                <button className="px-5 w-full bg-[#F24D0D] hover:bg-[#C43C08] text-white rounded-[10px] h-14">
                  Aplicar filtro
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

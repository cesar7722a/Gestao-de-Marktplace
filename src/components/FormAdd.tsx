import { ChevronDown } from "lucide-react";

export function FormAdd() {
  return (
    <div className="p-6 space-y-6 bg-white rounded-[20px] w-[591px]">
      <div className="flex gap-2">
        <h1 className="text-lg text-[#666666] flex-1 font-medium">
          Dados do produto
        </h1>
      </div>
      <form className="space-y-20">
        <div className="flex flex-col gap-5">
          <span className="flex gap-5">
            <label className="flex-1 flex flex-col gap-2 border border-t-0 border-r-0 border-l-0">
              <span className="text-xs text-[#666]">Título</span>
              <input
                type="text"
                className="text-[#3D3D3D] outline-none"
                placeholder="Nome do produto"
              />
            </label>

            <label className="pb-2 flex flex-col gap-2 max-w-[200px] border border-t-0 border-r-0 border-l-0">
              <span className="text-xs text-[#666]">Valor</span>
              <span className="flex gap-2 text-[#3D3D3D]">
                <aside className="text-[#3D3D3D]">R$</aside>
                <input
                  type="text"
                  className=" outline-none max-w-40"
                  placeholder="0,00"
                />
              </span>
            </label>
          </span>

          <label
            htmlFor=""
            className="flex flex-col gap-2 border border-t-0 border-r-0 border-l-0 pb-2"
          >
            <span className="text-xs text-[#666]">Descrição</span>
            <textarea
              name="descri"
              id=""
              cols={5}
              className="max-w-[539px] h-20 text-[#3D3D3D] px-2 outline-none"
              placeholder="Escreva detalhes sobre o produto, tamanho, características"
            />
          </label>

          <label htmlFor="" className="border border-t-0 border-r-0 border-l-0">
            <span className="text-xs text-[#666]">Categoria</span>
            <span className="px-[2px] py-[14px] flex text-[#666]">
              <aside className="flex-1 text-[#3D3D3D]">Selecione</aside>
              <ChevronDown className="size-6 cursor-pointer" />
            </span>
          </label>
        </div>
        <div className="flex gap-3">
          <button className="px-5 rounded-xl h-12 border border-[#F24D0D] hover:bg-[#FBF4F4] w-full items-center text-[#F24D0D]">
            Cancelar
          </button>
          <button className="px-5 rounded-xl h-12 bg-[#F24D0D] hover:bg-[#C43C08] w-full items-center text-white">
            Salvar e publicar
          </button>
        </div>
      </form>
    </div>
  );
}

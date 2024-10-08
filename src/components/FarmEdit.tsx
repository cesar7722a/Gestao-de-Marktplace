import { ChevronDown, X } from "lucide-react";
import { ProdutosProps } from "../type/types";
import { ButtonForm } from "./buttonForm";

export function FormEdit({ descri, name, price }: ProdutosProps) {
  return (
    <div className="p-6 space-y-6 bg-white rounded-[20px] w-[591px]">
      <div className="flex gap-2">
        <h1 className="text-lg text-[#666666] flex-1 font-medium">
          Dados do produto
        </h1>
        <span className="px-2 py-1 rounded-full bg-[#009CF0] text-white">
          anunciado
        </span>
      </div>
      <form onSubmit={} className="space-y-20">
        <div className="flex flex-col gap-5">
          <span className="flex gap-5">
            <label className="flex-1 flex flex-col gap-2 border border-t-0 border-r-0 border-l-0">
              <span className="text-xs text-[#666]">Título</span>
              <input
                type="text"
                value={name}
                className="text-[#3D3D3D] outline-none"
              />
            </label>

            <label className="pb-2 flex flex-col gap-2 max-w-[200px] border border-t-0 border-r-0 border-l-0">
              <span className="text-xs text-[#666]">Valor</span>
              <span className="flex gap-2 text-[#3D3D3D]">
                <aside className="text-bg">R$</aside>
                <input
                  type="text"
                  value={price}
                  className=" outline-none max-w-40"
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
              value={descri}
            />
          </label>

          <label htmlFor="" className="border border-t-0 border-r-0 border-l-0">
            <span className="text-xs text-[#666]">Categoria</span>
            <span className="px-[2px] py-[14px] flex text-[#666]">
              <aside className="flex-1 text-[#3D3D3D]">Móvel</aside>
              <X className="size-6 cursor-pointer p-1 bg-[#F5EAEA] rounded-full" />
              <ChevronDown className="size-6 cursor-pointer" />
            </span>
          </label>
        </div>
        <div className="flex gap-3">
          <ButtonForm size="lg" color="secondary">
            Cancelar
          </ButtonForm>

          <ButtonForm type="submit" size="lg" color="primary">
            Salvar e atualizar
          </ButtonForm>
        </div>
      </form>
    </div>
  );
}

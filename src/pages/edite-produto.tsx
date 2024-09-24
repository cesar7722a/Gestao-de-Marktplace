import { Ban, Check, ChevronDown, X } from "lucide-react";
import { Container } from "../components/container";
import { HeaderText } from "../components/headerText";

export function EditeProdutos() {
  return (
    <Container>
      <div className="flex justify-between gap-6 items-end">
        <HeaderText
          headerPrimary="Editar produto"
          headerSecundary="Gerencie as informações do produto cadastrado"
        />
        <div className="pr-3 flex gap-4 text-sm text-[#F24D0D] font-medium">
          <button className="p-[2px] flex gap-2 hover:text-[#C43C08]">
            <Check className="size-5" />
            <span>Marcar como vendido</span>
          </button>
          <button className="p-[2px] flex gap-2 hover:text-[#C43C08]">
            <Ban className="size-5" />
            <span>Desativar anúncio</span>
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        <figure className="w-[415px] h-[340px] rounded-[20px]">
          <img
            src="../public/sofaGrande.png"
            alt="imagem produto"
            className="rounded-[20px]"
          />
        </figure>
        <div className="p-6 space-y-6 bg-white rounded-[20px] w-[591px]">
          <div className="flex gap-2">
            <h1 className="text-lg text-[#666666] flex-1 font-medium">
              Dados do produto
            </h1>
            <span className="px-2 py-1 rounded-full bg-[#009CF0] text-white">
              anunciado
            </span>
          </div>
          <form className="space-y-20">
            <div className="flex flex-col gap-5">
              <span className="flex gap-5">
                <label className="flex-1 flex flex-col gap-2 border border-t-0 border-r-0 border-l-0">
                  <span className="text-xs text-[#666]">Título</span>
                  <input
                    type="text"
                    value="Sofá"
                    className="text-[#3D3D3D] outline-none"
                  />
                </label>

                <label className="pb-2 flex flex-col gap-2 max-w-[200px] border border-t-0 border-r-0 border-l-0">
                  <span className="text-xs text-[#666]">Valor</span>
                  <span className="flex gap-2 text-[#3D3D3D]">
                    <aside className="text-[#F24D0D]">R$</aside>
                    <input
                      type="text"
                      value={1200.9}
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
                  cols={10}
                  className="max-w-[539px] h-40 text-[#3D3D3D] px-2 outline-none"
                  value="Sofá revestido em couro legítimo, com estrutura em madeira
                  maciça e pés em metal cromado"
                />
              </label>

              <label
                htmlFor=""
                className="border border-t-0 border-r-0 border-l-0"
              >
                <span className="text-xs text-[#666]">Categoria</span>
                <span className="px-[2px] py-[14px] flex text-[#666]">
                  <aside className="flex-1 text-[#3D3D3D]">Móvel</aside>
                  <X className="size-6 cursor-pointer p-1 bg-[#F5EAEA] rounded-full" />
                  <ChevronDown className="size-6 cursor-pointer" />
                </span>
              </label>
            </div>
            <div className="flex gap-3">
              <button className="px-5 rounded-xl h-12 border border-[#F24D0D] hover:bg-[#FBF4F4] w-full items-center text-[#F24D0D]">
                Cancelar
              </button>
              <button className="px-5 rounded-xl h-12 bg-[#F24D0D] hover:bg-[#C43C08] w-full items-center text-white">
                Salvar e atualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

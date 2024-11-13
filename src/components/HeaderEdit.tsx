import { Ban, Check, MoveLeft } from "lucide-react";
import { HeaderText } from "./headerText";
import { Link, useSearchParams } from "react-router-dom";
import { Mycontext } from "../context/context";
import { useContext } from "react";

export function HeaderEdit() {
  const [searchParams] = useSearchParams();
  const idUrl = searchParams.get("id");
  const context = useContext(Mycontext);

  if (!context) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }

  const { editProduto } = context;
  const handleStatusVendido = () => {
    const produto = {
      status: "Vendido",
    };
    editProduto(Number(idUrl), produto);
  };
  const handleStatusDesativarAnuncio = () => {
    const produto = {
      status: "Cancelado",
    };
    editProduto(Number(idUrl), produto);
  };

  return (
    <div className="flex flex-col gap-2">
      <Link to={"/"} className="text-bg flex gap-2 hover:text-bgDark">
        <MoveLeft />
        Voltar
      </Link>
      <div className="flex justify-between gap-6 items-end">
        <HeaderText
          headerPrimary="Editar produto"
          headerSecundary="Gerencie as informações do produto cadastrado"
        />
        <div className="pr-3 flex gap-4 text-sm text-bg font-medium">
          <button
            onClick={handleStatusVendido}
            className="p-[2px] flex gap-2 hover:text-bgDark"
          >
            <Check className="size-5" />
            <span>Marcar como vendido</span>
          </button>
          <button
            onClick={handleStatusDesativarAnuncio}
            className="p-[2px] flex gap-2 hover:text-bgDark"
          >
            <Ban className="size-5" />
            <span>Desativar anúncio</span>
          </button>
        </div>
      </div>
    </div>
  );
}

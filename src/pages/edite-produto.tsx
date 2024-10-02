import { Container } from "../components/container";
import { HeaderEdit } from "../components/HeaderEdit";
import { FormEdit } from "../components/FarmEdit";
import { useContext } from "react";
import { Mycontext } from "../components/context";
import { useSearchParams } from "react-router-dom";

export function EditeProdutos() {
  const [searchParams] = useSearchParams();
  const idUrl = searchParams.get("id");
  const context = useContext(Mycontext);

  if (!context) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }

  const { produts } = context;
  const produtoTOedit = produts.find((a) => a.id === Number(idUrl));

  return (
    <Container>
      {
        <>
          <HeaderEdit />
          <div className="flex gap-6">
            <figure className="w-[415px] h-[340px] rounded-[20px]">
              <img
                src={produtoTOedit?.image}
                alt={produtoTOedit?.name}
                className="rounded-[20px]"
              />
            </figure>
            <FormEdit />
          </div>
        </>
      }
    </Container>
  );
}

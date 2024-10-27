import { ImageUp } from "lucide-react";
import { Container } from "../components/container";
import { HeaderText } from "../components/headerText";
import { FormAdd } from "../components/FormAdd";

export function AddProduto() {
  return (
    <Container>
      <div className="pt-16 space-y-6">
        <HeaderText
          headerPrimary="Novo produto"
          headerSecundary="Cadastre um produto para venda no marketplace"
        />
        <div className="flex gap-6">
          <figure className="w-[415px] h-[340px] rounded-[20px] bg-bgGeral flex justify-center items-center cursor-pointer">
            <div className="space-y-4 w-[159px] flex flex-col justify-center items-center">
              <ImageUp className="size-10 text-bg" />
              <p className="text-textPrimary text-center text-sm">
                Selecione a imagem do produto
              </p>
            </div>
          </figure>
          <FormAdd />
        </div>
      </div>
    </Container>
  );
}

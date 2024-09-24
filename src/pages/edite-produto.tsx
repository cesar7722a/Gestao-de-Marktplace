import { Ban, Check } from "lucide-react";
import { Container } from "../components/container";
import { HeaderText } from "../components/headerText";

export function EditeProdutos() {
  return (
    <Container>
      <div className="flex justify-between gap-6">
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
    </Container>
  );
}

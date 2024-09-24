import { Container } from "../components/container";
import { HeaderEdit } from "../components/HeaderEdit";
import { FormEdit } from "../components/FarmEdit";

export function EditeProdutos() {
  return (
    <Container>
      <HeaderEdit />
      <div className="flex gap-6">
        <figure className="w-[415px] h-[340px] rounded-[20px]">
          <img
            src="../public/sofaGrande.png"
            alt="imagem produto"
            className="rounded-[20px]"
          />
        </figure>
        <FormEdit />
      </div>
    </Container>
  );
}

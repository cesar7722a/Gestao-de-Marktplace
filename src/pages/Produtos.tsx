import { useContext } from "react";
import { CardProdut } from "../components/CardProdut";
import { CardFilter } from "../components/CardFilter";
import { useNavigate } from "react-router-dom";
import { HeaderText } from "../components/headerText";
import { Container } from "../components/container";
import { Mycontext } from "../components/context";

export function Produtos() {
  const context = useContext(Mycontext);

  if (!context) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }

  const { produts } = context;
  const navigate = useNavigate();

  const changeToPageEdit = (id: number) => {
    navigate(`/edite-produto/${id}`);
  };

  return (
    <Container>
      <HeaderText
        headerPrimary="Seus produtos"
        headerSecundary="Acesse gerencie a sua lista de produtos à venda"
      />
      <div className="flex gap-6">
        <CardFilter />

        <div className="grid grid-cols-2 gap-4">
          {produts.map((produt) => (
            <CardProdut
              changeToPageEdit={changeToPageEdit}
              key={produt.id}
              id={produt.id}
              name={produt.name}
              image={produt.image}
              price={produt.price}
              descri={produt.descri}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

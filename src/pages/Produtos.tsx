import { useContext, useState } from "react";
import { CardProdut } from "../components/CardProdut";
import { CardFilter } from "../components/CardFilter";
import { useNavigate } from "react-router-dom";
import { HeaderText } from "../components/headerText";
import { Container } from "../components/container";
import { Mycontext } from "../context/context";
import { ProdutosProps } from "../type/types";

export function Produtos() {
  const context = useContext(Mycontext);

  if (!context) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }

  const { produts } = context;
  const [ProductSerch, setProductSerch] = useState<ProdutosProps[]>(produts);
  const navigate = useNavigate();

  const changeToPageEdit = (id: number | undefined) => {
    navigate(`/edite-produto/:?id=${id}`);
  };
  const [valueSerch, setValueSerch] = useState("");
  const [status, setStatus] = useState<string | undefined>("");

  const HandleFilter = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const newProduct = produts.filter((a) =>
      a.name?.toLocaleLowerCase()?.includes(valueSerch.toLocaleLowerCase())
    );
    if (newProduct.length != 0) {
      setProductSerch(newProduct);
    } else {
      setProductSerch(produts);
    }
  };

  return (
    <Container>
      <HeaderText
        headerPrimary="Seus produtos"
        headerSecundary="Acesse gerencie a sua lista de produtos à venda"
      />
      <div className="flex gap-6">
        <CardFilter
          HandleFilter={HandleFilter}
          setStatus={setStatus}
          status={status}
          setValueSerch={setValueSerch}
          valueSerch={valueSerch}
        />

        <div className="grid grid-cols-2 gap-4">
          {ProductSerch?.map((produt) => (
            <CardProdut
              produt={produt}
              changeToPageEdit={changeToPageEdit}
              key={produt.id}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

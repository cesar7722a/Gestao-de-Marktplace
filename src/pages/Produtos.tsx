import { useState } from "react";
import { CardProdut } from "../components/CardProdut";
import { CardFilter } from "../components/CardFilter";
import { useNavigate } from "react-router-dom";
import { HeaderText } from "../components/headerText";

type ProdutosProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  descri: string;
};

export function Produtos() {
  const [produts, setProducts] = useState<ProdutosProps[]>([
    {
      id: 0,
      name: "Sofá",
      price: 1200.9,
      image: "../public/sofa.png",
      descri:
        "Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.",
    },
    {
      id: 1,
      name: "Camiseta masculina",
      price: 35.89,
      image: "../public/t-shert.png",
      descri:
        "Camiseta básica cinza, confeccionada em algodão 100%, com corte slim fit e gola redonda.",
    },
    {
      id: 2,
      name: "Kit utensílios",
      price: 86.79,
      image: "../public/kit-untesilio.png",
      descri: "Conjunto com 10 de cozinha, feitos medeira de bambu.",
    },
    {
      id: 3,
      name: "Kit de cremes",
      price: 150.9,
      image: "../public/ccreme.png",
      descri:
        "Conjunto de cuidados com a pele contendo 3 cremes: hidratante facial, creme para as mãos e crememe anti-idade.",
    },
    {
      id: 4,
      name: "Caderno de desenho",
      price: 56,
      image: "../public/caderno.png",
      descri:
        "Caderno tamanho A4 com 120 páginas, gramatura de 180g/m², ideal para técnicas variadas como lápis, carvão e tinta.",
    },
    {
      id: 5,
      name: "Carro de brinquedo",
      price: 24.6,
      image: "../public/carro.png",
      descri:
        "Carrinho de brinquedo na cor amarela, feito de metal, com detalhes realistas. ",
    },
  ]);

  const navigate = useNavigate();

  const changeToPageEdit = (id: number) => {
    navigate(`/edite-produto/${id}`);
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-center items-center pb-12">
        <div className="flex gap-8 flex-col">
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
        </div>
      </div>
    </div>
  );
}

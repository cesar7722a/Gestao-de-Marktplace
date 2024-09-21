import { Search } from "lucide-react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { useState } from "react";
import { CardProdut } from "../components/CardProdut";

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

  return (
    <div className="space-y-12">
      <Header />
      <div className="max-w-5xl flex gap-8 flex-col justify-center items-center">
        <div className="text-start">
          <h1 className="text-2xl font-bold text-[rgb(29,29,29)]">
            Seus produtos
          </h1>
          <h2 className="text-lg text-[#666666]">
            Acesse gerencie a sua lista de produtos à venda
          </h2>
        </div>
        <div className="flex gap-6">
          <div className="p-6 space-y-6 rounded-[20px] bg-white">
            <h2 className="text-lg text-[#666666]">Filtrar</h2>
            <div>
              <form className="space-y-10">
                <div>
                  <Input
                    Icon={Search}
                    type="text"
                    name="seach"
                    placeholder="Pesquisar"
                  />
                  <Select />
                </div>
                <button className="px-5 w-full bg-[#F24D0D] hover:bg-[#C43C08] text-white rounded-[10px] h-14">
                  Aplicar filtro
                </button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {produts.map((produt) => (
              <CardProdut
                key={produt.id}
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
  );
}

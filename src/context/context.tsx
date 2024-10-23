import { createContext, useState } from "react";
import {
  MycontextProviderProps,
  MycontextTypes,
  ProdutosProps,
} from "../type/types";

export const Mycontext = createContext<MycontextTypes | undefined>(undefined);

export function MycontextProvider({ children }: MycontextProviderProps) {
  const [produts, setProducts] = useState<ProdutosProps[]>([
    {
      id: 0,
      name: "Sofá",
      price: 1200.9,
      image: "../public/sofa.png",
      categoria: "Móvel",
      descri:
        "Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.",
    },
    {
      id: 1,
      name: "Camiseta masculina",
      price: 35.89,
      image: "../public/t-shert.png",
      categoria: "Vestuário",
      descri:
        "Camiseta básica cinza, confeccionada em algodão 100%, com corte slim fit e gola redonda.",
    },
    {
      id: 2,
      name: "Kit utensílios",
      price: 86.79,
      image: "../public/kit-untesilio.png",
      categoria: "Utensílio",
      descri: "Conjunto com 10 de cozinha, feitos medeira de bambu.",
    },
    {
      id: 3,
      name: "Kit de cremes",
      price: 150.9,
      image: "../public/ccreme.png",
      categoria: "Saúde & Beleza",
      descri:
        "Conjunto de cuidados com a pele contendo 3 cremes: hidratante facial, creme para as mãos e crememe anti-idade.",
    },
    {
      id: 4,
      name: "Caderno de desenho",
      price: 56,
      image: "../public/caderno.png",
      categoria: "Papelaria",
      descri:
        "Caderno tamanho A4 com 120 páginas, gramatura de 180g/m², ideal para técnicas variadas como lápis, carvão e tinta.",
    },
    {
      id: 5,
      name: "Carro de brinquedo",
      price: 24.6,
      image: "../public/carro.png",
      categoria: "Brinquedo",
      descri:
        "Carrinho de brinquedo na cor amarela, feito de metal, com detalhes realistas. ",
    },
  ]);
  const addProduto = ({ descri, id, image, name, price }: ProdutosProps) => {
    const newProduto = {
      descri: descri,
      id: id,
      image: image,
      name: name,
      price: price,
    };
    setProducts([...produts, newProduto]);
  };

  const editProduto = (id: number, produto: Partial<ProdutosProps>) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...produto } : item))
    );
  };
  return (
    <Mycontext.Provider
      value={{ addProduto, produts, setProducts, editProduto }}
    >
      {children}
    </Mycontext.Provider>
  );
}

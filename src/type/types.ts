import { ReactNode } from "react";

export type ProdutosProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  descri: string;
};

export type MycontextTypes = {
  children: ReactNode;
  produto: ProdutosProps[];
  addProduto: ({ name, id, descri, image, price }: ProdutosProps) => void;
  aditProduto: (id: number) => void;
  deleteProduto: (id: number) => void;
};

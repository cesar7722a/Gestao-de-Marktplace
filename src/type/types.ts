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
  produts: ProdutosProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProdutosProps[]>>;
  addProduto: ({ name, id, descri, image, price }: ProdutosProps) => void;
  editProduto: (id: number) => void;
  deleteProduto: (id: number) => void;
};

export type MycontextProviderProps = {
  children: ReactNode;
};

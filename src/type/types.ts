import { ReactNode } from "react";

export type ProdutosProps = {
  id?: number;
  name: string | undefined;
  price: number | undefined;
  image?: string | undefined;
  descri: string | undefined;
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

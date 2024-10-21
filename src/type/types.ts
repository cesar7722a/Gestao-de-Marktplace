import { FormEvent, ReactNode } from "react";

export type ProdutosProps = {
  id?: number | undefined;
  name: string | undefined;
  price: number | undefined;
  image?: string | undefined;
  descri: string | undefined;
  categoria?: string | undefined;
};

export type MycontextTypes = {
  children: ReactNode;
  produts: ProdutosProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProdutosProps[]>>;
  addProduto: ({ name, id, descri, image, price }: ProdutosProps) => void;
  editProduto: (id: number, produto: ProdutosProps) => void;
  deleteProduto: (id: number) => void;
};

export type MycontextProviderProps = {
  children: ReactNode;
};

export interface FormDataProps {
  descri?: string | undefined;
  name?: string | undefined;
  price?: number | undefined;
}

export interface option {
  name: string;
  isSelect: boolean;
  id: number;
}

export interface OptionSelectProps {
  children: ReactNode;
  isSelect: boolean;
  id: string | number;
  options: option[];
  setOptions: React.Dispatch<React.SetStateAction<option[]>>;
  setSelectIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SelectFormProps {
  options: option[];
  setOptions: React.Dispatch<React.SetStateAction<option[]>>;
}

export interface FormEditProps {
  descri?: string | undefined;
  name?: string | undefined;
  price?: number | undefined;
  formData: FormDataProps;
  handleEdit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

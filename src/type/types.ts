import { ChangeEvent, FormEvent, ReactNode } from "react";

export type ProdutosProps = {
  id?: number | undefined;
  name?: string | undefined;
  price?: number | undefined;
  image?: string | undefined;
  descri?: string | undefined;
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
  categoria?: string | undefined;
  setCategoria: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export interface FormEditProps {
  descri?: string | undefined;
  name?: string | undefined;
  price?: number | undefined;
  categoria?: string | undefined;
  formData: FormDataProps;
  setCategoria: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleEdit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export interface InputProps {
  name?: string | undefined;
  price?: string | undefined | number;
  value?: string | undefined;
  handleChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => void;
}

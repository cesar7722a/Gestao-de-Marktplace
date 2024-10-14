import { ChevronDown, ChevronUp, X } from "lucide-react";
import { ButtonForm } from "./buttonForm";
import { FormDataProps } from "../type/types";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextArea } from "./TextArea";
import { OptionSelect } from "./OptionSelect";

interface FormProps {
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

export function FormEdit({ formData, handleChange, handleEdit }: FormProps) {
  const navigate = useNavigate();
  const pageIndex = () => {
    navigate("/Produtos");
  };
  const [options, setOptions] = useState([
    { name: "Brinquedo", isSelect: false },
    { name: "Móvel", isSelect: false },
    { name: "Papelaria", isSelect: true },
    { name: "Saúde & Beleza", isSelect: false },
    { name: "Utensílio", isSelect: false },
    { name: "Vestuário", isSelect: false },
  ]);

  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

  const handleSelect = () => {
    if (selectIsOpen) {
      setSelectIsOpen(false);
    } else {
      setSelectIsOpen(true);
    }
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-[20px] w-[591px]">
      <div className="flex gap-2">
        <h1 className="text-lg text-textPrimary flex-1 font-medium">
          Dados do produto
        </h1>
        <span className="px-2 py-1 rounded-full bg-[#009CF0] text-white">
          anunciado
        </span>
      </div>
      <form onSubmit={handleEdit} className="space-y-20">
        <div className="flex flex-col gap-5">
          <span className="flex gap-5">
            <label className="flex-1 flex flex-col gap-2 border border-t-0 border-r-0 border-l-0">
              <span className="text-xs text-textPrimary">Título</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                className="text-[#3D3D3D] outline-none"
                onChange={handleChange}
              />
            </label>

            <label className="pb-2 flex flex-col gap-2 max-w-[200px] border border-t-0 border-r-0 border-l-0">
              <span className="text-xs text-textPrimary">Valor</span>
              <span className="flex gap-2 text-textSecondary">
                <aside className="text-bg">R$</aside>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  className=" outline-none max-w-40"
                  onChange={handleChange}
                />
              </span>
            </label>
          </span>

          <TextArea
            name="descri"
            value={formData.descri}
            handleChange={handleChange}
          />

          <label htmlFor="" className="border border-t-0 border-r-0 border-l-0">
            <span className="text-xs text-textPrimary">Categoria</span>
            <span
              onClick={handleSelect}
              className="relative  py-[14px] flex text-textPrimary cursor-pointer"
            >
              <aside className="flex-1 text-textSecondary">Móvel</aside>
              <X className="size-6 cursor-pointer p-1 bg-[#F5EAEA] rounded-full" />
              {selectIsOpen ? (
                <ChevronUp className="size-6 cursor-pointer" />
              ) : (
                <ChevronDown className="size-6 cursor-pointer" />
              )}

              {selectIsOpen && (
                <ul className="absolute flex bg-white flex-col gap-2 py-3 px-6 w-full top-16 rounded-lg">
                  {options.map((option) => (
                    <OptionSelect isSelect={option.isSelect}>
                      {option.name}
                    </OptionSelect>
                  ))}
                </ul>
              )}
            </span>
          </label>
        </div>
        <div className="flex gap-3">
          <ButtonForm
            onClick={pageIndex}
            type="button"
            size="lg"
            color="secondary"
          >
            Cancelar
          </ButtonForm>

          <ButtonForm type="submit" size="lg" color="primary">
            Salvar e atualizar
          </ButtonForm>
        </div>
      </form>
    </div>
  );
}

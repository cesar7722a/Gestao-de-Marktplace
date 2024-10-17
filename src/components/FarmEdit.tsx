import { ButtonForm } from "./buttonForm";
import { FormDataProps } from "../type/types";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextArea } from "./TextArea";
import { SelectForm } from "./SelectForm";
import { InputValor } from "./InputValor";
import { InputName } from "./InputName";

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
    { name: "Brinquedo", isSelect: false, id: 1 },
    { name: "Móvel", isSelect: false, id: 2 },
    { name: "Papelaria", isSelect: true, id: 3 },
    { name: "Saúde & Beleza", isSelect: false, id: 4 },
    { name: "Utensílio", isSelect: false, id: 5 },
    { name: "Vestuário", isSelect: false, id: 6 },
  ]);

  return (
    <div className="p-6 space-y-6 bg-white rounded-[20px] w-[591px]">
      <div className="flex gap-2">
        <h1 className="text-lg text-textPrimary flex-1 font-medium">
          Dados do produto
        </h1>
        <span className="px-2 py-1 rounded-full bg-bgBlue text-white">
          anunciado
        </span>
      </div>
      <form onSubmit={handleEdit} className="space-y-20">
        <div className="flex flex-col gap-5">
          <span className="flex gap-5">
            <InputName handleChange={handleChange} name={formData.name} />
            <InputValor handleChange={handleChange} price={formData.price} />
          </span>

          <TextArea
            name="descri"
            value={formData.descri}
            handleChange={handleChange}
          />

          <SelectForm setOptions={setOptions} options={options} />
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

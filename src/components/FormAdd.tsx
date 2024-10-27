import { ButtonForm } from "./buttonForm";
import { InputValor } from "./InputValor";
import { InputName } from "./InputName";
import { TextArea } from "./TextArea";
import { FormEvent, useState } from "react";
import { SelectForm } from "./SelectForm";
import { ProdutosProps } from "../type/types";
import { useNavigate } from "react-router-dom";

export function FormAdd() {
  const [options, setOptions] = useState([
    { name: "Seleccione uma cateoria", isSelect: true, id: 0 },
    { name: "Brinquedo", isSelect: false, id: 1 },
    { name: "Móvel", isSelect: false, id: 2 },
    { name: "Papelaria", isSelect: false, id: 3 },
    { name: "Saúde & Beleza", isSelect: false, id: 4 },
    { name: "Utensílio", isSelect: false, id: 5 },
    { name: "Vestuário", isSelect: false, id: 6 },
  ]);
  const [categoria, setCategoria] = useState<string | undefined>();

  const [formData, setFormData] = useState<ProdutosProps>({
    name: "",
    categoria: "",
    descri: "",
    price: undefined,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddProduto = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(categoria);
    console.log(formData.name);
    console.log(formData.descri);
    console.log(formData.price);
  };

  const navigate = useNavigate();
  const pageIndex = () => {
    navigate("/Produtos");
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-[20px] w-[591px]">
      <div className="flex gap-2">
        <h1 className="text-lg text-[#666666] flex-1 font-medium">
          Dados do produto
        </h1>
      </div>
      <form className="space-y-20" onSubmit={handleAddProduto}>
        <div className="flex flex-col gap-5">
          <span className="flex gap-5">
            <InputName
              name={formData.name}
              value={formData.name}
              handleChange={handleChange}
            />
            <InputValor
              name="price"
              price={formData.price}
              handleChange={handleChange}
            />
          </span>
          <TextArea
            name="descri"
            value={formData.descri}
            handleChange={handleChange}
          />
          <SelectForm
            options={options}
            setCategoria={setCategoria}
            categoria={categoria}
            setOptions={setOptions}
          />
        </div>
        <div className="flex gap-3">
          <ButtonForm
            type="button"
            size="lg"
            color="secondary"
            onClick={pageIndex}
          >
            Cancelar
          </ButtonForm>
          <ButtonForm type="submit" size="lg" color="primary">
            Salvar e publicar
          </ButtonForm>
        </div>
      </form>
    </div>
  );
}

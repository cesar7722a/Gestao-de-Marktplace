import { ButtonForm } from "./buttonForm";
import { InputValor } from "./InputValor";
import { InputName } from "./InputName";
import { TextArea } from "./TextArea";
import { useState } from "react";
import { SelectForm } from "./SelectForm";

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
  return (
    <div className="p-6 space-y-6 bg-white rounded-[20px] w-[591px]">
      <div className="flex gap-2">
        <h1 className="text-lg text-[#666666] flex-1 font-medium">
          Dados do produto
        </h1>
      </div>
      <form className="space-y-20">
        <div className="flex flex-col gap-5">
          <span className="flex gap-5">
            <InputName name="name" handleChange={handleChange} />
            <InputValor price={0.0} handleChange={handleChange} />
          </span>

          <TextArea name="text-area" value="" handleChange={handleChange} />

          <SelectForm />
        </div>
        <div className="flex gap-3">
          <ButtonForm type="button" size="lg" color="secondary">
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

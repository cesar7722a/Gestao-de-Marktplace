import { MoveRight } from "lucide-react";
import { HeaderForm } from "./HeaderForm";
import { FormCadastro } from "./FormCadastro";
import { useState } from "react";
import { userProps } from "../type/types";

type CardCadastroProps = {
  closeCadastro: () => void;
};

export function CardCadastro({ closeCadastro }: CardCadastroProps) {
  const [formdata, setFormData] = useState<userProps>({
    name: "",
    telefone: undefined,
    email: "",
    password: "",
    isPassword: "",
    imagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  };

  const handleAddUser = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(formdata);
  };
  return (
    <div className="p-6">
      <div className="bg-white rounded-[32px] w-[494px]">
        <div className="space-y-20 px-20 py-[72px]">
          <HeaderForm
            h1="Crie sua conta"
            h2="Informe os seus dados pessoais e de acesso"
          />
          <FormCadastro
            handleChange={handleChange}
            formdata={formdata}
            handleAddUser={handleAddUser}
          />

          <div className="space-y-3">
            <h3 className="text-base text-textPrimary">Já tem uma conta?</h3>
            <button
              className="px-5 rounded-xl h-14 flex justify-between border border-bg hover:bg-bgBase w-full items-center text-bg"
              onClick={closeCadastro}
            >
              <span>Acessar</span>
              <MoveRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

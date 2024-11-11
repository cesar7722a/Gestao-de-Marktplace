import { MoveRight } from "lucide-react";
import { HeaderForm } from "./HeaderForm";
import { FormCadastro } from "./FormCadastro";
import { useContext, useEffect, useState } from "react";
import { userProps } from "../type/types";
import { ContextUser } from "../context/context-user";
import { useNavigate } from "react-router-dom";

type CardCadastroProps = {
  closeCadastro: () => void;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
};

export function CardCadastro({
  closeCadastro,
  isAuthenticated,
  setIsAuthenticated,
}: CardCadastroProps) {
  const [formdata, setFormData] = useState<userProps>({
    name: "",
    telefone: undefined,
    email: "",
    password: "",
    isPassword: "",
    imagem: "",
  });
  const navigate = useNavigate();
  const context = useContext(ContextUser);

  if (!context) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }

  const { addUse, users } = context;

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
    const user = {
      name: formdata.name,
      email: formdata.email,
      password: formdata.password,
      telefone: formdata.telefone,
      isLogado: false,
      image: "../../public/Logo.png",
    };
    addUse(user);
    setIsAuthenticated(true);
    navigate("/");
    console.log(users);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

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

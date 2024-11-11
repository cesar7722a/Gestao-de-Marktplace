import { MoveRight } from "lucide-react";
import { FormLogin } from "../components/FormLogin";
import { HeaderForm } from "./HeaderForm";
import { useNavigate } from "react-router-dom";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ContextUser } from "../context/context-user";

type CardLoginProps = {
  openCadastro: () => void;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
};

export function CardLogin({
  openCadastro,
  isAuthenticated,
  setIsAuthenticated,
}: CardLoginProps) {
  const [formDatas, setFormDatas] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormDatas({
      ...formDatas,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const findUser = users.find((a) => a.email === formDatas.email);
    if (findUser?.password === formDatas.password) {
      setUsers((prev) =>
        prev.map((item) =>
          item.id === findUser.id ? { ...item, isLogado: true } : item
        )
      );
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const contextUser = useContext(ContextUser);
  if (!contextUser) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }
  const { users, setUsers } = contextUser;
  return (
    <div className="p-6">
      <div className="bg-white rounded-[32px] w-[494px]">
        <div className="px-20 py-10 space-y-12">
          <div className="space-y-12">
            <HeaderForm
              h1="Acesse sua conta"
              h2="Informe seu e-mail e senha para entrar"
            />
          </div>
          <FormLogin
            pageIndex={handleLogin}
            handleOnchange={handleOnchange}
            formDatas={formDatas}
          />
          <div className="space-y-3">
            <h3 className="text-base text-[#666666]">
              Ainda não tem uma conta?
            </h3>
            <button
              className="px-5 rounded-xl h-14 flex justify-between border border-[#F24D0D] hover:bg-[#FBF4F4] w-full items-center text-[#F24D0D]"
              onClick={openCadastro}
            >
              <span>Cadastrar</span>
              <MoveRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

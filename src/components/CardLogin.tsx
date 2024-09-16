import { MoveRight } from "lucide-react";
import { FormLogin } from "../components/FormLogin";
import { HeaderForm } from "./HeaderForm";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

type CardLoginProps = {
  openCadastro: () => void;
};

export function CardLogin({ openCadastro }: CardLoginProps) {
  const navigate = useNavigate();

  const pageIndex = (e: FormEvent) => {
    e.preventDefault();
    navigate("/Produtos");
  };

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
          <FormLogin pageIndex={pageIndex} />
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

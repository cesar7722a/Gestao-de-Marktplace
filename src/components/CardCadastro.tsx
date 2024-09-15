import { MoveRight } from "lucide-react";
import { HeaderForm } from "./HeaderForm";
import { FormCadastro } from "./FormCadastro";

type CardCadastroProps = {
  closeCadastro: () => void;
};

export function CardCadastro({ closeCadastro }: CardCadastroProps) {
  return (
    <div className="p-6">
      <div className="bg-white rounded-[32px] w-[494px]">
        <div className="space-y-20 px-20 py-[72px]">
          <HeaderForm
            h1="Crie sua conta"
            h2="Informe os seus dados pessoais e de acesso"
          />
          <FormCadastro />

          <div className="space-y-3">
            <h3 className="text-base text-[#666666]">Já tem uma conta?</h3>
            <button
              className="px-5 rounded-xl h-14 flex justify-between border border-[#F24D0D] hover:bg-[#FBF4F4] w-full items-center text-[#F24D0D]"
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

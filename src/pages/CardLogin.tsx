import { MoveRight } from "lucide-react";

export function CardLogin() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-[32px] w-[494px]">
        <div className="px-20 py-10 space-y-12">
          <div className="space-y-12">
            <div className="space-y-2">
              <h1 className="text-2xl text-[#1D1D1D] font-semibold">
                Acesse sua conta
              </h1>
              <h2 className="text-sm text-[#666666]">
                Informe seu e-mail e senha para entrar
              </h2>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-base text-[#666666]">
              Ainda não tem uma conta?
            </h3>
            <button className="px-5 rounded-xl h-14 flex justify-between border border-[#F24D0D] w-full items-center text-[#F24D0D]">
              <span>Acessar</span>
              <MoveRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

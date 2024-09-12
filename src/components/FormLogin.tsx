import { Eye, KeyRound, Mail, MoveRight } from "lucide-react";

export function FormLogin() {
  return (
    <form action="" className="space-y-12">
      <div className="space-y-5">
        <label htmlFor="" className="flex flex-col text-[#666666] text-xs">
          Email
          <span className="flex gap-2 px-2 py-2 border border-r-0 border-t-0 border-l-0 border-[#666666]">
            <Mail className="size-6 text-[#949494]" />
            <input
              type="email"
              placeholder="Seu e-mail cadastrado"
              className="text-base flex-1 outline-none text-[#949494]"
            />
          </span>
        </label>

        <label htmlFor="" className="flex flex-col text-[#666666] text-xs">
          Senha
          <span className="flex gap-2 px-2 py-2 border border-r-0 border-t-0 border-l-0 border-[#666666]">
            <KeyRound className="size-6 text-[#949494]" />
            <input
              type="email"
              placeholder="Sua senha de acesso"
              className="text-base flex-1 outline-none text-[#949494]"
            />
            <Eye className="size-6 text-[#666666]" />
          </span>
        </label>
      </div>
      <button className="px-5 rounded-xl h-14 flex justify-between bg-[#F24D0D] w-full items-center text-white">
        <span>Acessar</span>
        <MoveRight className="size-6" />
      </button>
    </form>
  );
}

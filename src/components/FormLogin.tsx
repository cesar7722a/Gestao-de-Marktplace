import { Eye, KeyRound, Mail, MoveRight } from "lucide-react";
import { useRef } from "react";

export function FormLogin() {
  const mailIconRef = useRef<SVGSVGElement>(null);
  const KeyRoundIconRef = useRef<SVGSVGElement>(null);

  const inputFocos = () => {
    if (mailIconRef.current)
      if (mailIconRef.current.classList.contains("text-[#949494]")) {
        mailIconRef.current.classList.remove("text-[#949494]");
        mailIconRef.current.classList.add("text-[#F24D0D]");
      } else {
        mailIconRef.current.classList.remove("text-[#F24D0D]");
      }
  };

  const inputPassWordFocos = () => {
    if (KeyRoundIconRef.current)
      if (KeyRoundIconRef.current.classList.contains("text-[#949494]")) {
        KeyRoundIconRef.current.classList.remove("text-[#949494]");
        KeyRoundIconRef.current.classList.add("text-[#F24D0D]");
      } else {
        KeyRoundIconRef.current.classList.remove("text-[#F24D0D]");
      }
  };

  return (
    <form className="space-y-12">
      <div className="space-y-5">
        <label htmlFor="" className="flex flex-col text-[#666666] text-xs">
          Email
          <span className="flex gap-2 px-2 py-2 border border-r-0 border-t-0 border-l-0 border-[#666666]">
            <Mail ref={mailIconRef} className="size-6 text-[#949494]" />
            <input
              onFocus={inputFocos}
              name="email"
              type="email"
              placeholder="Seu e-mail cadastrado"
              className="text-base flex-1 outline-none text-[#949494]"
            />
          </span>
        </label>

        <label htmlFor="" className="flex flex-col text-[#666666] text-xs">
          Senha
          <span className="flex gap-2 px-2 py-2 border border-r-0 border-t-0 border-l-0 border-[#666666]">
            <KeyRound ref={KeyRoundIconRef} className="size-6 text-[#949494]" />
            <input
              onFocus={inputPassWordFocos}
              name="password"
              type="password"
              placeholder="Sua senha de acesso"
              className="text-base flex-1 outline-none text-[#949494]"
            />
            <Eye className="size-6 text-[#666666]" />
          </span>
        </label>
      </div>
      <button className="px-5 rounded-xl h-14 flex justify-between bg-[#F24D0D] hover:bg-[#C43C08] w-full items-center text-white">
        <span>Acessar</span>
        <MoveRight className="size-6" />
      </button>
    </form>
  );
}

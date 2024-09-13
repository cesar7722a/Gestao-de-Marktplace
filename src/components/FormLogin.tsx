import { Eye, KeyRound, Mail, MoveRight } from "lucide-react";
import { useRef } from "react";
import { Input } from "./Input";

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
        <Input
          Icon={Mail}
          name="email"
          placeholder="Seu e-mail cadastrado"
          titleLabel="Email"
          type="email"
        />

        <Input
          Icon={KeyRound}
          name="password"
          placeholder="Sua senha de acesso"
          titleLabel="Senha"
          type="password"
        />
      </div>
      <button className="px-5 rounded-xl h-14 flex justify-between bg-[#F24D0D] hover:bg-[#C43C08] w-full items-center text-white">
        <span>Acessar</span>
        <MoveRight className="size-6" />
      </button>
    </form>
  );
}

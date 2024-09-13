import { Eye, KeyRound, Mail, MoveRight } from "lucide-react";
import { Input } from "./Input";

export function FormLogin() {
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

import { KeyRound, Mail, MoveRight } from "lucide-react";
import { Input } from "./Input";
import { FormEvent } from "react";
import { FormDataProps } from "../type/types";

type FormLoginProps = {
  pageIndex: (e: FormEvent) => void;
  handleOnchange: (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => void;
  formDatas: FormDataProps;
};

export function FormLogin({
  pageIndex,
  handleOnchange,
  formDatas,
}: FormLoginProps) {
  return (
    <form className="space-y-12">
      <div className="space-y-5">
        <Input
          value={formDatas.email}
          Icon={Mail}
          name="email"
          placeholder="Seu e-mail cadastrado"
          titleLabel="Email"
          type="email"
          handleChange={handleOnchange}
        />

        <Input
          value={formDatas.password}
          Icon={KeyRound}
          name="password"
          placeholder="Sua senha de acesso"
          titleLabel="Senha"
          type="password"
          handleChange={handleOnchange}
        />
      </div>
      <button
        onClick={pageIndex}
        className="px-5 rounded-xl h-14 flex justify-between bg-bg hover:bg-bgDark w-full items-center text-white"
      >
        <span>Acessar</span>
        <MoveRight className="size-6" />
      </button>
    </form>
  );
}

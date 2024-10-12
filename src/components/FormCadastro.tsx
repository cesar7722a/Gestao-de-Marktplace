import {
  ImageUp,
  KeyRound,
  Mail,
  MoveRight,
  Phone,
  UserRound,
} from "lucide-react";
import { Input } from "./Input";

export function FormCadastro() {
  return (
    <form className="space-y-12">
      <div className="space-y-5">
        <h3 className="text-sm text-[#1D1D1D] font-semibold">Perfil</h3>

        <label
          htmlFor="foto"
          className=" w-[120px] h-[120px] p-11 rounded-xl bg-[#F5EAEA] cursor-pointer flex"
        >
          <input name="foto" type="file" className="hidden" />
          <ImageUp className="size-6 text-bg" />
        </label>

        <Input
          name="user"
          placeholder="Seu nome completo"
          titleLabel="Name"
          type="text"
          Icon={UserRound}
        />

        <Input
          name="contact"
          placeholder="(00) 00000-0000"
          titleLabel="Telefone"
          type="number"
          Icon={Phone}
        />
      </div>

      <div className="space-y-5">
        <h3 className="text-sm text-[#1D1D1D] font-semibold">Acesso</h3>
        <Input
          name="email"
          placeholder="Seu e-mail de acesso"
          titleLabel="E-mail"
          type="email"
          Icon={Mail}
        />

        <Input
          name="password"
          placeholder="Senha de acesso"
          titleLabel="Senha"
          type="email"
          Icon={KeyRound}
        />

        <Input
          name="passwordconfirma"
          placeholder="Confirme a senha"
          titleLabel="Confirmar senha"
          type="password"
          Icon={KeyRound}
        />
      </div>

      <button className="px-5 rounded-xl h-14 flex justify-between bg-bg hover:bg-bgDark w-full items-center text-white">
        <span>Cadastrar</span>
        <MoveRight className="size-6" />
      </button>
    </form>
  );
}

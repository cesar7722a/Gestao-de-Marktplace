import {
  ImageUp,
  KeyRound,
  Mail,
  MoveRight,
  Phone,
  UserRound,
} from "lucide-react";
import { HeaderForm } from "./HeaderForm";
import { Input } from "./Input";

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
          <form className="space-y-12">
            <div className="space-y-5">
              <h3 className="text-sm text-[#1D1D1D] font-semibold">Perfil</h3>

              <label
                htmlFor="foto"
                className=" w-[120px] h-[120px] p-11 rounded-xl bg-[#F5EAEA] cursor-pointer flex"
              >
                <input name="foto" type="file" className="hidden" />
                <ImageUp className="size-6 text-[#F24D0D]" />
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

            <button className="px-5 rounded-xl h-14 flex justify-between bg-[#F24D0D] hover:bg-[#C43C08] w-full items-center text-white">
              <span>Cadastrar</span>
              <MoveRight className="size-6" />
            </button>
          </form>

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

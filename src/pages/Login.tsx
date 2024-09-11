import { Eye, KeyRound, Mail, MoveRight } from "lucide-react";

export function Login() {
  return (
    <div className="h-screen">
      <div className="">
        <div className="flex items-center">
          <div>
            <figure className="pt-8 pl-8">
              <img src="../public/Title.png" alt="logo gestão marketplace" />
            </figure>
            <figure>
              <img
                src="../public/Background.png"
                alt="imagem background Login"
              />
            </figure>
          </div>
          <div className="m-6 max-w-2xl bg-white rounded-[32px]">
            <div className="px-20 py-8 space-y-12">
              <div className="space-y-12">
                <div className="space-y-2">
                  <h1 className="text-2xl text-[#1D1D1D] font-semibold">
                    Acesse sua conta
                  </h1>
                  <h2 className="text-sm text-[#666666]">
                    Informe seu e-mail e senha para entrar
                  </h2>
                </div>
                <form action="" className="space-y-12">
                  <div className="space-y-5">
                    <label
                      htmlFor=""
                      className="flex flex-col text-[#666666] text-xs"
                    >
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

                    <label
                      htmlFor=""
                      className="flex flex-col text-[#666666] text-xs"
                    >
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
                  </div>{" "}
                  <button className="px-5 rounded-xl h-14 flex justify-between bg-[#F24D0D] w-full items-center text-white">
                    <span>Acessar</span>
                    <MoveRight className="size-6" />
                  </button>
                </form>
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
      </div>
    </div>
  );
}

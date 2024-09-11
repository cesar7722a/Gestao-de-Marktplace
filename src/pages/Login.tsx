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
          <div className="p-6 max-w-2xl bg-white rounded-[32px]">
            <div className="px-20 py-[72px]">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-2xl text-[#1D1D1D] font-semibold">
                    Acesse sua conta
                  </h1>
                  <h2 className="text-sm text-[#666666]">
                    Informe seu e-mail e senha para entrar
                  </h2>
                </div>
                <form action="">
                  <span className="flex flex-col">
                    <label htmlFor="" className="text-[#666666] text-xs">
                      Email
                    </label>
                    <span>
                      <input type="email" placeholder="Seu e-mail cadastrado" />
                    </span>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Login() {
  return (
    <div className="h-screen">
      <div className="">
        <div className="flex">
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
          <div className="p-6 max-w-2xl bg-white">
            <div className="px-20 py-[72px]">
              <div>
                <div className="space-y-2">
                  <h1 className="text-2xl text-[#1D1D1D] font-semibold">
                    Acesse sua conta
                  </h1>
                  <h2 className="text-sm text-[#666666]">
                    Informe seu e-mail e senha para entrar
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

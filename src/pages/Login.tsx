import { useState } from "react";
import { CardLogin } from "../components/CardLogin";
import { CardCadastro } from "../components/CardCadastro";

interface LoginProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Login({ setIsAuthenticated }: LoginProps) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const openCadastro = () => {
    setIsLogin(true);
  };

  const closeCadastro = () => {
    setIsLogin(false);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between">
        <div className="w-[755px]">
          <figure className="pt-8 pl-8">
            <img src="../public/Title.png" alt="logo gestão marketplace" />
          </figure>
          <figure>
            <img src="../public/Background.png" alt="imagem background Login" />
          </figure>
        </div>
        {isLogin ? (
          <CardCadastro closeCadastro={closeCadastro} />
        ) : (
          <CardLogin
            setIsAuthenticated={setIsAuthenticated}
            openCadastro={openCadastro}
          />
        )}
      </div>
    </div>
  );
}

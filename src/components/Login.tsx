import { CardLogin } from "../pages/CardLogin";

export function Login() {
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center">
        <div className="w-[755px]">
          <figure className="pt-8 pl-8">
            <img src="../public/Title.png" alt="logo gestão marketplace" />
          </figure>
          <figure>
            <img src="../public/Background.png" alt="imagem background Login" />
          </figure>
        </div>
        <CardLogin />
      </div>
    </div>
  );
}

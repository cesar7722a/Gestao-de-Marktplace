import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-5xl font-semibold">404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <button
        className="px-6 py-2.5 bg-bg rounded-lg text-white hover:bg-bgDark"
        onClick={() => navigate("/")}
      >
        Voltar a pagina principal
      </button>
    </div>
  );
}

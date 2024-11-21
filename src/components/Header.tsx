import { ChartNoAxesCombined, Package, Plus } from "lucide-react";
import { Menu } from "./Menu";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const handleChangePageDashBord = () => {
    navigate("/dash-bord");
  };

  const handleChangePageProdutos = () => {
    navigate("/");
  };

  return (
    <header className="flex h-20 items-center justify-between px-4">
      <figure>
        <img src="../../public/Logo.png" alt="logo" />
      </figure>
      <div className="flex gap-2">
        <Menu
          handleChangePage={handleChangePageDashBord}
          title="Dashboard"
          Icon={ChartNoAxesCombined}
        />
        <Menu
          handleChangePage={handleChangePageProdutos}
          title="Produtos"
          Icon={Package}
        />
      </div>
      <div className="flex items-center gap-3">
        <Link
          to={"/add-produto"}
          className="flex gap-2 h-10 px-4 rounded-[10px] text-white bg-bg items-center hover:bg-bgDark"
        >
          <Plus />
          <span>Novo produto</span>
        </Link>
        <figure>
          <img src="../../public/User.png" alt="user imagem" />
        </figure>
      </div>
    </header>
  );
}

import { ChartNoAxesCombined, Package, Plus } from "lucide-react";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between px-4">
      <figure>
        <img src="../../public/Logo.png" alt="logo" />
      </figure>
      <div className="flex gap-2">
        <Menu title="Dashboard" Icon={ChartNoAxesCombined} />
        <Menu title="Produtos" Icon={Package} />
      </div>
      <div className="flex items-center gap-3">
        <Link
          to={"/add-produto"}
          className="flex gap-2 h-10 px-4 rounded-[10px] text-white bg-[#F24D0D] items-center hover:bg-[#C43C08]"
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

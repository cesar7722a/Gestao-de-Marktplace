import { Input } from "./Input";
import { Select } from "./Select";
import { Search } from "lucide-react";

export function CardFilter() {
  return (
    <div className="p-6 space-y-6 rounded-[20px] bg-white">
      <h2 className="text-lg text-[#666666]">Filtrar</h2>
      <div>
        <form className="space-y-10">
          <div>
            <Input
              Icon={Search}
              type="text"
              name="seach"
              placeholder="Pesquisar"
            />
            <Select />
          </div>
          <button className="px-5 w-full bg-[#F24D0D] hover:bg-[#C43C08] text-white rounded-[10px] h-14">
            Aplicar filtro
          </button>
        </form>
      </div>
    </div>
  );
}

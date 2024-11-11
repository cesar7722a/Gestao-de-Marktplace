import { Input } from "./Input";
import { Search } from "lucide-react";
import { SelectForm } from "./SelectForm";
import { useState } from "react";

interface CardFilterProps {
  valueSerch: string;
  setValueSerch: React.Dispatch<React.SetStateAction<string>>;
  status: string | undefined;
  setStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
  HandleFilter: (e: React.FormEvent<HTMLElement>) => void;
}

export function CardFilter({
  setValueSerch,
  valueSerch,
  setStatus,
  HandleFilter,
  status,
}: CardFilterProps) {
  const [options, setOptions] = useState([
    { name: "Status", isSelect: true, id: 0 },
    { name: "Anunciado", isSelect: false, id: 1 },
    { name: "Vendido", isSelect: false, id: 2 },
    { name: "Cancelado", isSelect: false, id: 3 },
  ]);

  return (
    <div className="p-6 space-y-6 rounded-[20px] bg-white h-[306px]">
      <h2 className="text-lg text-textPrimary">Filtrar</h2>
      <div>
        <form className="space-y-10">
          <div>
            <Input
              Icon={Search}
              value={valueSerch}
              type="text"
              name="seach"
              placeholder="Pesquisar"
              handleChange={(e) => setValueSerch(e.target.value)}
            />
            <div className="border border-r-0 border-t-0 border-l-0 border-textPrimary">
              {" "}
              <SelectForm
                labelIsvisible={false}
                setCategoria={setStatus}
                categoria={status}
                options={options}
                setOptions={setOptions}
              />
            </div>
          </div>
          <button
            onClick={HandleFilter}
            className="px-5 w-full bg-bg hover:bg-bgDark text-white rounded-[10px] h-14"
          >
            Aplicar filtro
          </button>
        </form>
      </div>
    </div>
  );
}

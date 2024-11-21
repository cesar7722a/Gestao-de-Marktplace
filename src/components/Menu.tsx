import { LucideIcon } from "lucide-react";

type MenuProps = {
  Icon: LucideIcon;
  title: string;
  handleChangePage: () => void;
};

export function Menu({ Icon, title, handleChangePage }: MenuProps) {
  return (
    <div
      onClick={handleChangePage}
      className="flex px-4 gap-2 text-gray-500 hover:text-[#F24D0D] h-10 items-center 
  cursor-pointer rounded-[10px] active:bg-[#F5EAEA] active:text-[#F24D0D]"
    >
      <Icon />
      <span>{title}</span>
    </div>
  );
}

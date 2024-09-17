import { LucideIcon } from "lucide-react";

type MenuProps = {
  Icon: LucideIcon;
  title: string;
};

export function Menu({ Icon, title }: MenuProps) {
  return (
    <div
      className="flex px-4 gap-2 text-gray-500 hover:text-[#F24D0D] h-10 items-center 
  cursor-pointer rounded-[10px] active:bg-[#F5EAEA] active:text-[#F24D0D]"
    >
      <Icon />
      <span>{title}</span>
    </div>
  );
}

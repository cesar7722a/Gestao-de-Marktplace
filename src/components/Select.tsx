import { ChevronDown, Tag } from "lucide-react";

export function Select() {
  return (
    <div className="flex justify-between px-2 py-[14px] border border-r-0 border-t-0 border-l-0 border-[#666666] text-[#949494] cursor-pointer">
      <div className="flex gap-2">
        <Tag className="size-6" />
        <span>Status</span>
      </div>
      <ChevronDown className="size-6" />
    </div>
  );
}

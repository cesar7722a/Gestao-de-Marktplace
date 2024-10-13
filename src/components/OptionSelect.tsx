interface OptionSelectProps {
  Children: string;
}

export function OptionSelect({ Children }: OptionSelectProps) {
  return (
    <li className="px-4 h-12 flex items-center hover:text-bgDark">
      {Children}
    </li>
  );
}

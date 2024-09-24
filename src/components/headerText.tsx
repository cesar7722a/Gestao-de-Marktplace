type HeaderTextProps = {
  headerPrimary: string;
  headerSecundary: string;
};

export function HeaderText({
  headerPrimary,
  headerSecundary,
}: HeaderTextProps) {
  return (
    <div className="text-start flex-1">
      <h1 className="text-2xl font-semibold text-[rgb(29,29,29)]">
        {headerPrimary}
      </h1>
      <h2 className="text-sm text-[#666666]">{headerSecundary}</h2>
    </div>
  );
}

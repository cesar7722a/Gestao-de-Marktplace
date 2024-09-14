type HeaderFormProps = {
  h1: string;
  h2: string;
};

export function HeaderForm({ h1, h2 }: HeaderFormProps) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl text-[#1D1D1D] font-semibold">{h1}</h1>
      <h2 className="text-sm text-[#666666]">{h2}</h2>
    </div>
  );
}

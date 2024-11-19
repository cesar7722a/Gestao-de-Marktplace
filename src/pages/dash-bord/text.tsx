interface Text {
  textPrimary: string;
  textSecundary: string;
}

export function Text({ textPrimary, textSecundary }: Text) {
  return (
    <span className="space-y-2">
      <h1 className="text-lg text-textSecondary font-semibold">
        {textPrimary}
      </h1>
      <h2 className="text-xs text-textPrimary w-24">{textSecundary}</h2>
    </span>
  );
}

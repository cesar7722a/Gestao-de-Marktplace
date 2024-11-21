import { Store, Tag, UsersRound } from "lucide-react";
import { CardToatalProdutos } from "./card-total-produtos";
import { Icon } from "./icon";
import { Text } from "./text";

export function SectionTotalProdutos() {
  return (
    <div className="space-y-4">
      <CardToatalProdutos>
        <Icon>
          <Tag className="size-10 text-blueDark" />
        </Icon>
        <Text textPrimary="24" textSecundary="Produtos vendidos" />
      </CardToatalProdutos>

      <CardToatalProdutos>
        <Icon>
          <Store className="size-10 text-blueDark" />
        </Icon>
        <Text textPrimary="56" textSecundary="Produtos anunciados" />
      </CardToatalProdutos>

      <CardToatalProdutos>
        <Icon>
          <UsersRound className="size-10 text-blueDark" />
        </Icon>
        <Text textPrimary="1.238" textSecundary="Pessoas visitantes" />
      </CardToatalProdutos>
    </div>
  );
}

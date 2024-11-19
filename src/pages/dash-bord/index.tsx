import { Calendar, Store, Tag, UsersRound } from "lucide-react";
import { Container } from "../../components/container";
import { HeaderText } from "../../components/headerText";
import { CardToatalProdutos } from "./card-total-produtos";
import { Icon } from "./icon";
import { Text } from "./text";

export function DashBord() {
  return (
    <Container>
      <div>
        <HeaderText
          headerPrimary="Últimos 30 dias"
          headerSecundary="Confira as estatísticas da sua loja no último mês"
        />
      </div>
      <div className="flex gap-6">
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
        <div className="w-[767px] px-6 pt-6 pb-5 bg-white rounded-2xl space-y-7">
          <div className="flex justify-between">
            <h1 className="text-sm text-textG font-bold">Visitantes</h1>
            <span className="flex gap-2">
              <Calendar className="size-[14px] text-blueDark" />
              <h2 className="text-sm text-textPrimary">
                26 de junho - 25 de julho
              </h2>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

import { Calendar } from "lucide-react";
import { Container } from "../../components/container";
import { HeaderText } from "../../components/headerText";
import { SectionTotalProdutos } from "./section-card-total-produtos";
import { GraficoDashBord } from "./grafico-dash-bord";

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
        <SectionTotalProdutos />
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
          <div className="w-full h-64">
            <GraficoDashBord />
          </div>
        </div>
      </div>
    </Container>
  );
}

import { ProcessUpdate } from "~/components/ProcessUpdate";
import { QuickActions } from "~/components/QuickActions";
import { SummaryDay } from "~/components/SummaryDay";
import { Coluna, Linha } from "~/components/auxiliares";

export default function Dashboard() {
  return (
    <>
      <Linha>
        <Coluna className="w-1/2">
          <QuickActions />
          <ProcessUpdate />
        </Coluna>
        <Coluna>
          <SummaryDay />
        </Coluna>
      </Linha>
    </>
  );
}

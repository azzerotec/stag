import { ProcessUpdate } from "~/components/ProcessUpdate";
import { QuickActions } from "~/components/QuickActions";
import { Coluna } from "~/components/auxiliares";

export default function Dashboard() {
  return (
    <Coluna className="w-1/2">
      <QuickActions />
      <ProcessUpdate />
    </Coluna>
  );
}

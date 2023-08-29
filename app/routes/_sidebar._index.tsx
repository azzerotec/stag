import { Coluna, Linha } from "~/components/auxiliares";
import { CircleClipBord } from "~/images/icons/CircleClipBord";
import { CircleMoreFile } from "~/images/icons/CircleMoreFile";
import { CircleMorePerson } from "~/images/icons/CircleMorePerson";
import { CircleMuchPeoples } from "~/images/icons/CircleMuchPeoples";

export default function Dashboard() {
  return (
    <Coluna className="m-6">
      <h2 className="text-xl font-black text-a374151 font-inter">
        Acesso Rapido
      </h2>
      <span className="mt-3 text-sm font-light text-a6A6A6A font-inter">
        Utilize esses atalhos para adicionar ações de forma rápida:
      </span>
      <Linha className="mt-6 w-96 justify-between">
        <Coluna>
          <CircleMoreFile />
          <span className="text-sm font-light text-a6A6A6A font-inter">
            Processo
          </span>
        </Coluna>
        <Coluna>
          <CircleClipBord />
          <span className="text-sm font-light text-a6A6A6A font-inter">
            Tarefa
          </span>
        </Coluna>
        <Coluna>
          <CircleMorePerson />
          <span className="text-sm font-light text-a6A6A6A font-inter">
            Cliente
          </span>
        </Coluna>
        <Coluna>
          <CircleMuchPeoples />
          <span className="text-sm font-light text-a6A6A6A font-inter">
            Reunião
          </span>
        </Coluna>
      </Linha>
    </Coluna>
  );
}

import { Coluna, Linha } from "../auxiliares";
import { CircleMorePerson } from "~/images/icons/CircleMorePerson";
import { CircleGroupPeople } from "~/images/icons/CircleGroupPeople";
import type { ReactNode } from "react";
import { CircleMoreFile } from "~/images/icons/CircleMoreFile";
import { CircleClipBoard } from "~/images/icons/CircleClipBoard";

type Props = {
  icon: ReactNode;
  name: string;
};

const Shortcut = ({ icon, name }: Props) => {
  return (
    <Coluna className="items-center">
      {icon}
      <span className="mt-3 text-sm font-light text-a6A6A6A font-inter">
        {name}
      </span>
    </Coluna>
  );
};

export const QuickActions = () => {
  return (
    <Coluna className="m-6">
      <h2 className="text-xl font-black text-a374151 font-inter">
        Acesso Rapido
      </h2>
      <span className="mt-3 text-sm font-light text-a6A6A6A font-inter">
        Utilize esses atalhos para adicionar ações de forma rápida:
      </span>
      <Linha className="mt-6 w-96 justify-between">
        <Shortcut icon={<CircleMoreFile />} name={"Processo"} />
        <Shortcut icon={<CircleClipBoard />} name={"Tarefa"} />
        <Shortcut icon={<CircleMorePerson />} name={"Cliente"} />
        <Shortcut icon={<CircleGroupPeople />} name={"Reunião"} />
      </Linha>
    </Coluna>
  );
};

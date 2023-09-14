import { Coluna } from "./auxiliares";
import { EmptyListIlustration } from "~/images/EmptyListIlustration";

export const EmptyList = () => (
  <Coluna className="grow justify-center ">
    <div className="my-8">
      <EmptyListIlustration />
    </div>
    <span className="font-roboto text-sm font-extralight">
      Você não possui nenhuma atualização de processos ajuizados.
    </span>
  </Coluna>
);

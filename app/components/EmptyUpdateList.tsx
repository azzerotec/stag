import { Coluna } from "./layout/Flex";
import { EmptyUpdateListIlustration } from "~/images/EmptyUpdateListIlustration";

export const EmptyUpdateList = () => (
  <Coluna className="grow justify-center ">
    <div className="my-8">
      <EmptyUpdateListIlustration />
    </div>
    <span className="font-roboto text-sm font-extralight">
      Você não possui nenhuma atualização de processos ajuizados.
    </span>
  </Coluna>
);

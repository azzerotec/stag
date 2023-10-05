import { EmptyListIlustrationDashBoard } from "~/images/icons/EmptyListIlustrationDashboard";
import { Coluna } from "./auxiliares";

export const EmptyListDashboard = () => (
  <Coluna className="grow items-center justify-center align-middle">
    <div className="my-8">
      <EmptyListIlustrationDashBoard />
    </div>
    <span className="justify-center text-sm font-extralight text-a6B7280 font-inter">
      Você não possui nenhum cliente cadastrado.
    </span>
    <span className="justify-center text-sm font-extralight text-a6B7280 font-inter">
      Utilize o botão abaixo para começar a cadastrar!
    </span>
    <button className="ml-8 mt-6 box-content h-6 rounded-md border bg-a606875 px-4 py-2 font-medium text-white font-inter">
      + Novo
    </button>
  </Coluna>
);

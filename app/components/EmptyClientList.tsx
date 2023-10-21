import { EmptyClientListIlustration } from "~/images/icons/EmptyClientListIlustration";
import { Coluna } from "./layout/Flex";
import { Link } from "@remix-run/react";

export const EmptyClientList = () => (
  <Coluna className="grow items-center justify-center align-middle">
    <div className="my-8">
      <EmptyClientListIlustration />
    </div>
    <span className="justify-center text-sm font-extralight text-a6B7280 font-inter">
      Você não possui nenhum cliente cadastrado.
    </span>
    <span className="justify-center text-sm font-extralight text-a6B7280 font-inter">
      Utilize o botão abaixo para começar a cadastrar!
    </span>
    <Link
      to="/clients/new"
      className="ml-8 mt-6 box-content h-6 rounded-md border bg-a606875 px-4 py-2 font-medium text-white font-inter"
    >
      + Novo
    </Link>
  </Coluna>
);

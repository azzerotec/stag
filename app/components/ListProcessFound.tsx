import { TrashIcon } from "@heroicons/react/20/solid";
import { Linha } from "./auxiliares";

type Props = {
  NomedoCliente: string;
  CPF: string;
  Contato: string;
  ESTADO: string;
};

export const ListProcessFound = ({
  NomedoCliente,
  CPF,
  Contato,
  ESTADO,
}: Props) => {
  return (
    <Linha className="border-b text-sm font-inter">
      <text className="flex h-14 w-64 items-center p-2 align-middle font-medium text-gray-900">
        {NomedoCliente}
      </text>
      <text className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
        {CPF}
      </text>
      <text className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
        {Contato}
      </text>
      <Linha className="flex h-14 w-36 items-center p-2 align-middle text-gray-500">
        <text className="ml-2">{ESTADO}</text>
      </Linha>
      <div className="flex grow items-center align-middle">
        <TrashIcon className="h-7 w-7 text-a6B7280" />
      </div>
    </Linha>
  );
};

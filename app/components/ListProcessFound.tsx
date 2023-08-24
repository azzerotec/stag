import { Linha } from "./auxiliares";

type Client = {
  name: string;
  cpf: string;
  contato: string;
  province: string;
};

type Props = {
  client: Client;
};

export const ListProcessFound = ({
  client: { name, cpf, contato, province },
}: Props) => (
  <Linha className="border-b text-sm font-inter">
    <text className="flex h-14 w-64 items-center p-2 align-middle font-medium text-gray-900">
      {name}
    </text>
    <text className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
      {cpf}
    </text>
    <text className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
      {contato}
    </text>
    <Linha className="flex h-14 w-36 items-center p-2 align-middle text-gray-500">
      <text className="ml-2">{province}</text>
    </Linha>
    <div className="flex grow items-center align-middle">
      <span className="h-7 w-7 text-a6B7280">TrashIcon</span>
    </div>
  </Linha>
);

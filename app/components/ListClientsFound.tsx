import type { ClientListItem } from "~/models/client.server";
import { Linha } from "./layout/Flex";

type Props = {
  client: ClientListItem;
};

export const ListClientsFound = ({
  client: { name, cpf, personalContact, province },
}: Props) => (
  <Linha className="border-b text-sm font-inter">
    <span className="flex h-14 w-64 items-center p-2 align-middle font-medium text-gray-900">
      {name}
    </span>
    <span className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
      {cpf}
    </span>
    <span className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
      {personalContact}
    </span>
    <Linha className="flex h-14 w-36 items-center p-2 align-middle text-gray-500">
      <span className="ml-2">{province}</span>
    </Linha>
    <div className="flex grow items-center align-middle">
      <span className="h-7 w-7 text-a6B7280">TrashIcon</span>
    </div>
  </Linha>
);

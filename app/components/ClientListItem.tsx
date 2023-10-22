import { Linha } from "./layout/Flex";
import {
  ArchiveBoxArrowDownIcon,
  InformationCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import type { SummarizedClient } from "~/models/client.server";

type Props = {
  client: SummarizedClient;
};

export const ClientTableItem = ({
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
      <Linha className="gap-3 text-a6B7280">
        <PencilIcon className="h-4 w-4" />
        <ArchiveBoxArrowDownIcon className="h-4 w-4" />
        <InformationCircleIcon className="h-4 w-4" />
      </Linha>
    </div>
  </Linha>
);

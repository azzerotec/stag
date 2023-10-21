import type { Process } from "~/models/process.server";
import { Linha } from "./layout/Flex";

type Props = {
  Processes: Process;
};

export const ListProcessFound = ({
  Processes: { number, name, type, state },
}: Props) => (
  <Linha className="border-b text-sm font-inter">
    <span className="flex h-14 w-64 items-center p-2 align-middle font-medium text-gray-900">
      {number}
    </span>
    <span className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
      {name}
    </span>
    <span className="flex h-14 w-80 items-center p-2 align-middle text-gray-500">
      {type}
    </span>
    <Linha className="flex h-14 w-36 items-center p-2 align-middle text-gray-500">
      <span className="ml-2">{state}</span>
    </Linha>
    <div className="flex grow items-center align-middle">
      <span className="h-7 w-7 text-a6B7280">TrashIcon</span>
    </div>
  </Linha>
);

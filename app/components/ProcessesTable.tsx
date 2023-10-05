import type { Process } from "~/models/process.server";
import { ListProcessFound } from "./ListProcessFound";
import { Linha } from "./auxiliares";

export const ProcessesTable = ({ processes }: { processes: Process[] }) => {
  return (
    <>
      <Linha className="mt-8 border-b text-xs font-extrabold font-inter">
        <span className="flex h-14 w-64 items-center p-2 align-middle">
          Numero Do Processo
        </span>
        <span className="flex h-14 w-80 items-center p-2 align-middle">
          Cliente
        </span>
        <span className="flex h-14 w-80 items-center p-2 align-middle">
          Contato
        </span>
        <Linha className="flex h-14 w-36 items-center p-2 align-middle">
          <span className="ml-2">ESTADO</span>
        </Linha>
      </Linha>
      <div
        className="flex grow flex-col overflow-y-auto rounded"
        style={{
          boxShadow: "0px -31px 10px -29px rgba(0, 0, 0, 0.25) inset",
        }}
      >
        {processes.map((processes: Process) => (
          <ListProcessFound Processes={processes} key={processes.number} />
        ))}
      </div>
    </>
  );
};

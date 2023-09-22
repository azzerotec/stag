import type { Client } from "~/models/client.server";
import { ListProcessFound } from "./ListProcessFound";
import { Linha } from "./auxiliares";

export const ProcessesTable = ({ clients }: { clients: Client[] }) => {
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
        className="h-80 overflow-y-scroll rounded"
        style={{
          boxShadow: "0px -31px 10px -29px rgba(0, 0, 0, 0.25) inset",
        }}
      >
        {clients.map((client: Client) => (
          <ListProcessFound client={client} key={client.cpf} />
        ))}
      </div>
    </>
  );
};

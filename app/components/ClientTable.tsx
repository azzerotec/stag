import type { Client } from "~/models/client.server";
import { Linha } from "./auxiliares";
import { EmptyListDashboard } from "./EmptyListDashBoard";
import { ListClientsFound } from "./ListClientsFound";

export const ClientTable = ({ clients }: { clients: Client[] }) => {
  return (
    <>
      <Linha className="mt-8 border-b text-xs font-extrabold font-inter">
        <span className="flex h-14 w-64 items-center p-2 align-middle">
          Nome
        </span>
        <span className="flex h-14 w-80 items-center p-2 align-middle">
          CPF / CPNJ
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
        {clients.length === 0 ? (
          <EmptyListDashboard />
        ) : (
          clients.map((client: Client) => (
            <ListClientsFound client={client} key={client.cpf} />
          ))
        )}
      </div>
    </>
  );
};

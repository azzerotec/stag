import { Linha } from "./layout/Flex";
import { EmptyClientList } from "./EmptyClientList";
import { ClientTableItem } from "./ClientListItem";
import { Link } from "@remix-run/react";
import type { SummarizedClient } from "~/models/client.server";

export const ClientTable = ({ clients }: { clients: SummarizedClient[] }) => {
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
          <EmptyClientList />
        ) : (
          clients.map((client) => (
            <Link key={client.id} to={`/clients/${client.id}`}>
              <ClientTableItem client={client} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

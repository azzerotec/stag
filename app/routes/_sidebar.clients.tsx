import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ClientTable } from "~/components/ClientTable";
import { TextInput } from "~/components/TextInput";
import { Linha } from "~/components/layout/Flex";
import { Container } from "~/components/layout/Container";
import { Search } from "~/images/icons/Search";
import { getClients } from "~/models/client.server";
import { getProcesses } from "~/models/process.server";

export const loader = async ({ request }: LoaderArgs) => {
  const clients = await getClients();
  const processes = getProcesses();
  //const userId = await getUserId(request);
  //if (userId) return redirect("/");
  return json({ ok: true, clients, processes });
};

export default function ListClients() {
  const { clients: ClientsList } = useLoaderData<typeof loader>();

  return (
    <Container>
      <Linha>
        <Linha className="grow">
          <h1 className="text-3xl  font-bold text-a374151 font-inter">
            Clientes
          </h1>
        </Linha>
        <Linha className="grow items-center gap-4">
          <Link
            to="./new"
            className="ml-8 box-content h-6 rounded-md border bg-a0F172A px-4 py-2 font-medium text-white font-inter"
          >
            + Novo
          </Link>
          <TextInput placeholder="Search" icon={Search} className="grow" />
        </Linha>
      </Linha>
      <ClientTable clients={ClientsList} />
    </Container>
  );
}

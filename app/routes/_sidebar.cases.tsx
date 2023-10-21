import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProcessesTable } from "~/components/ProcessesTable";
import { TextInput } from "~/components/TextInput";
import { Linha } from "~/components/auxiliares";
import { Container } from "~/components/layout/Container";
import { Search } from "~/images/icons/Search";
import { getProcesses } from "~/models/process.server";

export const loader = async ({ request }: LoaderArgs) => {
  const processes = getProcesses();
  //const userId = await getUserId(request);
  //if (userId) return redirect("/");
  return json({ ok: true, processes });
};

export default function ListClients() {
  const { processes: ProcessesList } = useLoaderData<typeof loader>();

  return (
    <Container>
      <Linha>
        <Linha className="grow">
          <h1 className="text-3xl  font-bold text-a374151 font-inter">
            Processos
          </h1>
        </Linha>
        <Linha className="grow items-center gap-4">
          <button className="ml-8 box-content h-6 rounded-md border bg-a0F172A px-4 py-2 font-medium text-white font-inter">
            + Novo
          </button>
          <TextInput placeholder="Search" icon={Search} className="grow" />
        </Linha>
      </Linha>
      <ProcessesTable processes={ProcessesList} />
    </Container>
  );
}

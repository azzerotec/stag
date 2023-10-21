import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { ClientTable } from "~/components/ClientTable";
import { ProcessesTable } from "~/components/ProcessesTable";
import { Coluna, Linha } from "~/components/layout/Flex";
import { LogoStag } from "~/images/icons/LogoStag";
import { getClients } from "~/models/client.server";
import { getProcesses } from "~/models/process.server";

export const loader = async ({ request }: LoaderArgs) => {
  const clients = await getClients();
  const processes = getProcesses();
  //const userId = await getUserId(request);
  //if (userId) return redirect("/");
  return json({ ok: true, clients, processes });
};

export default function FoundProcesses() {
  const { clients: ClientsList } = useLoaderData<typeof loader>();
  const { processes: ProcessesList } = useLoaderData<typeof loader>();
  const [asd, setAsd] = useState<string>("processes");

  return (
    <Coluna className="bg-aF9FAFB">
      <Coluna className="mx-32 my-11 rounded-lg bg-white px-4 py-6">
        <div className="flex">
          <LogoStag className="ml-auto" />
          <Link to="/dashboard" className="ml-auto">
            <span className="h-6 w-6">botao de fechar</span>
          </Link>
        </div>

        <h2 className="mt-8 flex justify-center align-middle text-xl font-light text-a111827 font-inter">
          Resultado da busca:
        </h2>

        <Linha className=" mt-6 justify-center gap-8">
          <Linha
            onClick={() => {
              setAsd("processes");
            }}
            className={`h-14 w-64 items-center rounded-md align-middle text-a1E1E1E font-inter ${
              asd === "processes" ? "bg-slate-400" : "bg-aEDEDED"
            }`}
          >
            <div className="ml-10">
              <span className="h-6 w-6">check</span>
            </div>
            <Coluna className="ml-6">
              <span className="font-black">100</span>
              <span className="font-light"> Processos</span>
            </Coluna>
          </Linha>

          <Linha
            onClick={() => {
              setAsd("clients");
            }}
            className={`h-14 w-64 items-center rounded-md align-middle text-a1E1E1E font-inter  ${
              asd === "clients" ? "bg-slate-400" : "bg-aEDEDED"
            }`}
          >
            <div className="ml-10">
              <span className="h-6 w-6">UserIcon</span>
            </div>
            <Coluna className="ml-6">
              <span className="font-black">100</span>
              <span className="font-light"> Clientes</span>
            </Coluna>
          </Linha>
        </Linha>
        {asd === "processes" ? (
          <ProcessesTable processes={ProcessesList} />
        ) : null}
        {asd === "clients" ? <ClientTable clients={ClientsList} /> : null}

        <Linha className=" items-center justify-center pt-9 text-sm font-medium font-inter">
          <button className="h-10 w-72 rounded-md border">
            Não quero importar meus dados
          </button>
          <button className="ml-8 h-10 w-72 rounded-md border bg-a606875 text-white">
            Importar meus dados
          </button>
        </Linha>
      </Coluna>
    </Coluna>
  );
}

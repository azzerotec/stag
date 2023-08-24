import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { ListProcessFound } from "~/components/ListProcessFound";
import { Coluna, Linha } from "~/components/auxiliares";
import { LogoStag } from "~/images/icons/LogoStag";
import { getUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({ ok: true });
};

export default function FoundProcesses() {
  return (
    <Coluna className=" px-32 py-11">
      <div className="flex justify-center">
        <LogoStag />
        <XMarkIcon className="h-6 w-6" />
      </div>

      <h2 className="mt-8 flex justify-center align-middle text-xl font-light text-a111827 font-inter">
        Resultado da busca:
      </h2>

      <Linha className=" mt-6 justify-center">
        <Linha className="h-14 w-64 items-center rounded-md bg-aEDEDED align-middle text-a1E1E1E font-inter">
          <div className="ml-10">
            <ClipboardDocumentCheckIcon className="h-6 w-6" />
          </div>
          <Coluna className="ml-6">
            <span className="font-black">100</span>
            <span className="font-light"> Processos</span>
          </Coluna>
        </Linha>

        <Linha className="ml-8 h-14 w-64 items-center rounded-md bg-aEDEDED align-middle text-a1E1E1E font-inter">
          <div className="ml-10">
            <UserGroupIcon className="h-6 w-6" />
          </div>
          <Coluna className="ml-6">
            <span className="font-black">100</span>
            <span className="font-light"> Clientes</span>
          </Coluna>
        </Linha>
      </Linha>

      <Linha className="mt-8 border-b text-xs font-extrabold font-inter">
        <text className="flex h-14 w-64 items-center p-2 align-middle">
          Cliente
        </text>
        <text className="flex h-14 w-80 items-center p-2 align-middle">
          CPF
        </text>
        <text className="flex h-14 w-80 items-center p-2 align-middle">
          Contato
        </text>
        <Linha className="flex h-14 w-36 items-center p-2 align-middle">
          <text className="ml-2">ESTADO</text>
        </Linha>
      </Linha>
      <div className="h-80 overflow-y-scroll">
        <ListProcessFound
          NomedoCliente={"Jane Cooper"}
          CPF={"090.023.098-33"}
          Contato={"+55 (48) 9 9981-2874"}
          ESTADO={"SC"}
        />
        <ListProcessFound
          NomedoCliente={"Cody Fisher"}
          CPF={"Product Directives Officer"}
          Contato={"cody.fisher@example.com"}
          ESTADO={"Owner"}
        />
        <ListProcessFound
          NomedoCliente={"Esther Howard"}
          CPF={"Forward Response Developer"}
          Contato={"esther.howard@example.com"}
          ESTADO={"Member"}
        />
        <ListProcessFound
          NomedoCliente={"Jenny Wilson"}
          CPF={"Central Security Manager"}
          Contato={"jenny.wilson@example.com"}
          ESTADO={"Member"}
        />
        <ListProcessFound
          NomedoCliente={" Kristin Watson "}
          CPF={"Lead Implementation Liaison"}
          Contato={" kristin.watson@example.com"}
          ESTADO={"Admin"}
        />
        <ListProcessFound
          NomedoCliente={"Cameron Williamson"}
          CPF={"Internal Applications Engineer "}
          Contato={" cameron.williamson@example.com"}
          ESTADO={"Member"}
        />
      </div>
      <Linha className=" mt-9 items-center justify-center text-sm font-medium font-inter">
        <button className="h-10 w-72 rounded-md border">
          Não quero importar meus dados
        </button>
        <button className="ml-8 h-10 w-72 rounded-md border bg-a606875 text-white">
          Importar meus dados
        </button>
      </Linha>
    </Coluna>
  );
}

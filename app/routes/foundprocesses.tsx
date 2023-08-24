import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
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

        <Linha className=" mt-6 justify-center">
          <Linha className="h-14 w-64 items-center rounded-md bg-aEDEDED align-middle text-a1E1E1E font-inter">
            <div className="ml-10">
              <span className="h-6 w-6">check</span>
            </div>
            <Coluna className="ml-6">
              <span className="font-black">100</span>
              <span className="font-light"> Processos</span>
            </Coluna>
          </Linha>

          <Linha className="ml-8 h-14 w-64 items-center rounded-md bg-aEDEDED align-middle text-a1E1E1E font-inter">
            <div className="ml-10">
              <span className="h-6 w-6">UserIcon</span>
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
        <div
          className="h-80 overflow-y-scroll rounded"
          style={{
            boxShadow: "0px -31px 10px -29px rgba(0, 0, 0, 0.25) inset",
          }}
        >
          <ListProcessFound
            client={{
              name: "Jane Cooper",
              cpf: "090.023.098-33",
              contato: "+55 (48) 9 9981-2874",
              province: "SC",
            }}
          />
          <ListProcessFound
            client={{
              name: "Cody Fisher",
              cpf: "090.023.098-33",
              contato: "cody.fisher@example.com",
              province: "Owner",
            }}
          />
          <ListProcessFound
            client={{
              name: "Esther Howard",
              cpf: "090.023.098-33",
              contato: "esther.howard@example.com",
              province: "Member",
            }}
          />
          <ListProcessFound
            client={{
              name: "Jenny Wilson",
              cpf: "090.023.098-33",
              contato: "jenny.wilson@example.com",
              province: "Member",
            }}
          />
          <ListProcessFound
            client={{
              name: "Kristin Watson",
              cpf: "090.023.098-33",
              contato: " kristin.watson@example.com",
              province: "Admin",
            }}
          />
          <ListProcessFound
            client={{
              name: "Cameron Williamson",
              cpf: "090.023.098-33",
              contato: "cameron.williamson@example.com",
              province: "Member",
            }}
          />
        </div>
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

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { json, redirect } from "@remix-run/node";
import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { Button, GhostButton } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { Coluna, Linha } from "~/components/layout/Flex";
import { createClient, getClient, updateClient } from "~/models/client.server";
import { getFormData, validateRegisterForm } from "~/utils/form/client";

export const loader = async ({ params }: LoaderArgs) => {
  if (!params.id) return redirect("/clients");
  if (params.id === "new") return json({ client: null });

  const client = await getClient(params.id);
  return json({ client });
};

export const action = async ({ request, params }: ActionArgs) => {
  const jsonData = await getFormData(request);
  const { errors, data } = await validateRegisterForm(jsonData);

  if (!data) return json({ errors }, { status: 400 });

  try {
    if (params.id && params.id !== "new") {
      await updateClient(data, params.id);
    } else {
      await createClient(data);
    }
  } catch (error) {
    return json({ error }, { status: 400 });
  }

  return redirect("/clients");
};

export default function NewClient() {
  const { client } = useLoaderData<typeof loader>();

  return (
    <Form className="flex grow flex-col overflow-hidden" method="POST">
      <Coluna className="overflow-y-auto overflow-x-hidden">
        <Linha className="p-6">
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-5">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Adicionar
              </button>
            </div>
          </div>

          <Linha className="ml-44 mt-6 gap-6">
            <div className="flex items-center gap-x-2">
              <input
                id="push-public"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-public"
                className="block text-sm font-medium leading-5 text-gray-700 font-inter"
              >
                Público
              </label>
            </div>
            <div className="flex items-center gap-x-2 ">
              <input
                id="push-private"
                name="push-notifications"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="push-private"
                className="block text-sm font-medium leading-5 text-gray-700 font-inter"
              >
                Privado
              </label>
            </div>
          </Linha>
        </Linha>

        <Linha className="border-y-2 p-6">
          <Coluna className="w-64">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Title
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Description</p>
          </Coluna>

          <div className="ml-20">
            <TextInput
              label="Nome Completo"
              className="mt-6"
              name="name"
              value={client?.name}
            />
            <Linha className="gap-x-6">
              <TextInput
                label="CPF"
                className="mt-6"
                name="cpf"
                value={client?.cpf}
              />

              <TextInput
                label="RG "
                className="mt-6"
                name="rg"
                value={client?.rg}
              />
              <TextInput
                label="Data de nascimento"
                className="mt-6"
                name="birthdate"
                value={client?.birthdate}
              />
              <TextInput
                label="Naturalidade"
                className="mt-6"
                name="nationality"
                value={client?.nationality}
              />
            </Linha>
            <TextInput
              label="Email"
              className="mt-6"
              name="email"
              value={client?.email}
            />

            <Linha className="gap-x-6">
              <TextInput
                label="Contato(Pessoal)"
                className="mt-6"
                name="personalContact"
                value={client?.personalContact}
              />
              <TextInput
                label="Contato(Profissional)"
                className="mt-6"
                name="professionalContact"
                value={client?.professionalContact}
              />
              <TextInput
                label="Estado Civil"
                className="mt-6"
                name="engaged"
                value={client?.engaged}
              />
            </Linha>
            <TextInput
              label="Profissão"
              className="mt-6"
              name="profession"
              value={client?.profession}
            />
          </div>
        </Linha>

        <Linha className="border-b-2 p-6">
          <Coluna className="w-64">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Informações principais
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Description</p>
          </Coluna>

          <div className=" ml-20">
            <TextInput label="Description" className="w- mt-6" />
          </div>
        </Linha>

        <Linha className="border-b-2 p-6">
          <Coluna className="w-64">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Processo
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </Coluna>

          <div className="ml-20 flex w-full items-center justify-center align-middle">
            <Linha>
              <span>icon</span>
              <Coluna>
                <span>Upload a file or drag and drop</span>
                <span>PNG, JPG, GIF up to 10MB</span>
              </Coluna>
            </Linha>
          </div>
        </Linha>

        <Linha className="border-b-2 p-6">
          <Coluna className="w-64">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Conta Bancária
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </Coluna>

          <div className=" ml-20">
            <Linha className="gap-6">
              <div className="flex items-center gap-x-2">
                <input
                  id="push-public"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-public"
                  className="block text-sm font-medium leading-5 text-gray-700 font-inter"
                >
                  Conta corrente
                </label>
              </div>
              <div className="flex items-center gap-x-2 ">
                <input
                  id="push-private"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-private"
                  className="block text-sm font-medium leading-5 text-gray-700 font-inter"
                >
                  Conta poupança
                </label>
              </div>
            </Linha>
            <TextInput label="Banco" className="mt-6" />
            <Linha className="gap-x-6">
              <TextInput label="Agencia" className="mt-6" />
              <TextInput label="Conta " className="mt-6" />
            </Linha>
            <TextInput label="Pix" className="mt-6" />
          </div>
        </Linha>

        <Linha className="border-b-2 p-6">
          <Coluna className="w-64">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Documentação Extra
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </Coluna>
          <div className=" ml-20 grow">
            <Linha className="gap-x-6">
              <TextInput label="PIS" className="mt-6" />
              <TextInput label="CTPS " className="mt-6" />
            </Linha>
            <Linha className="gap-x-6">
              <TextInput label="Titulo de Eleitor" className="mt-6" />
              <TextInput label="Cnh " className="mt-6" />
            </Linha>
            <Linha className="gap-x-6">
              <TextInput label="Passaporte" className="mt-6" />
              <TextInput label="Certidão de reservista " className="mt-6" />
            </Linha>
          </div>
        </Linha>
      </Coluna>
      <Linha className="justify-end border-t-2 px-16 py-6">
        <div className="mr-6 w-28">
          <Link to="/clients">
            <GhostButton>Cancelar</GhostButton>
          </Link>
        </div>
        <div className="w-20">
          <Button>Salvar</Button>
        </div>
      </Linha>
    </Form>
  );
}

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { TextInput } from "~/components/TextInput";
import { Coluna, Linha } from "~/components/auxiliares";

export default function NewClient() {
  return (
    <>
      <Coluna className="overflow-y-auto">
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

          <form className=" ml-20">
            <TextInput label="Nome Completo" className="mt-6" />
            <Linha className="gap-x-6">
              <TextInput label="CPF" className="mt-6" />
              <TextInput label="RG " className="mt-6" />
              <TextInput label="Data de nascimento" className="mt-6" />
              <TextInput label="Naturalidade" className="mt-6" />
            </Linha>
            <TextInput label="Email" className="mt-6" />
            <Linha className="gap-x-6">
              <TextInput label="Contato(Pessoal)" className="mt-6" />
              <TextInput label="Contato(Profissional)" className="mt-6" />
              <TextInput label="Estado Civil" className="mt-6" />
            </Linha>
            <TextInput label="Profissão" className="mt-6" />
          </form>
        </Linha>

        <Linha className="border-b-2 p-6">
          <Coluna className="w-64">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Informações principais
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Description</p>
          </Coluna>

          <form className=" ml-20">
            <TextInput label="Description" className="w- mt-6" />
          </form>
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

          <form className=" ml-20">
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
          </form>
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
          <form className=" ml-20 grow">
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
          </form>
        </Linha>
      </Coluna>
    </>
  );
}

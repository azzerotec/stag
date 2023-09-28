import { Link, useSearchParams } from "@remix-run/react";
import { RadioGroup } from "~/components/RadioGroup";
import { TextInput } from "~/components/TextInput";
import { Coluna, Linha } from "~/components/auxiliares";

const settings = [
  {
    name: "Assinatura do Stag",
    description: "R$ 100,00 / por mês",
    plan: "Assinatura mensal",
  },
  {
    name: "Assinatura do Stag",
    description: "R$ 1.200,00 / por ano",
    plan: "Assinatura anual",
  },
];

export default function CardRegister() {
  const [searchParams] = useSearchParams();

  return (
    <Coluna className="gap-4">
      <Linha>
        <span>arrow left</span>
        <h2>Pagamento no Stag.</h2>
      </Linha>
      <h1 className="text-center text-xl font-medium text-a424A57 font-inter">
        Pagar com cartão de crédito
      </h1>
      <TextInput label={"E-mail"} />
      <TextInput label={"Número do cartão"} />
      <Linha>
        <TextInput className="" label={"Vencimento"} />
        <TextInput className="ml-3" label={"CVC"} />
      </Linha>
      <TextInput label={"Nome no cartão"} className="mb-4" />
      <RadioGroup settings={settings} />
      <Link
        to={{
          pathname: "/search",
          search: searchParams.toString(),
        }}
        className="mt-8 w-80 rounded-md bg-a606875 py-2 text-center font-medium text-white"
      >
        Inscrever-me
      </Link>
      <span className="mt-4 text-center text-xs font-light font-inter">
        Confirmando sua inscrição, você permite que o Stag <br />
        cobre mensalmente no seu cartão de crédito informado a cima. <br />
        Você pode cancelar a assinatura quando quiser.
      </span>
    </Coluna>
  );
}

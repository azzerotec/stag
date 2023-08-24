import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { Coluna } from "~/components/auxiliares";
import { LogoStag } from "~/images/icons/LogoStag";
import { getUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({ ok: true });
};

export default function FailSearch() {
  return (
    <Coluna className=" h-full w-full items-center justify-center align-middle">
      <LogoStag />
      <h2 className="mt-6 text-2xl font-semibold text-a424A57 font-inter">
        Infelizmente não achamos o número de OAB {":("}
      </h2>
      <span className="mt-6 font-montserrat text-xs font-medium text-a454D58">
        Coloque o número da OAB para verificarmos novamente.
      </span>
      <div className="mt-6">
        <TextInput label={"Número OAB"} />
        <Button>Entrar</Button>
      </div>
    </Coluna>
  );
}

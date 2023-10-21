import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Coluna } from "~/components/layout/Flex";
import { LogoStag } from "~/images/icons/LogoStag";
import { Spinner } from "~/images/icons/Spinner";

import { getUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({ ok: true });
};

export default function Search() {
  return (
    <Coluna className=" h-full w-full items-center justify-center align-middle">
      <LogoStag />
      <h2 className="mt-2 text-2xl font-semibold text-a424A57 font-inter">
        Buscando processos registrados na sua OAB
      </h2>
      <div className="mt-5">
        <Spinner />
      </div>
    </Coluna>
  );
}

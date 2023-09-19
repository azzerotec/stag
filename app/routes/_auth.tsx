import { Outlet } from "@remix-run/react";
import { BackgroundImage } from "~/components/BackgroundImage";
import { Coluna, Linha } from "~/components/auxiliares";
import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getUser } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);

  if (user && user.subscriptionId && user.priceId && user.subscriptionActive)
    return redirect("/");

  return json({ ok: true });
};

export default function SidebarTemplate() {
  return (
    <Linha className="h-full grow">
      <BackgroundImage />
      <Coluna className="md:min-w[520px] min-w-[626px] items-center justify-center p-32 text-center align-middle font-inter">
        <Outlet />
      </Coluna>
    </Linha>
  );
}

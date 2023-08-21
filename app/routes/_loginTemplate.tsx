import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { BackgroundImage } from "~/components/BackgroundImage";
import { Coluna, Linha } from "~/components/auxiliares";
import { getUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({ ok: true });
};

export default function SidebarTemplate() {
  return (
    <Linha className="h-full grow">
      <BackgroundImage />
      <Coluna className="items-center justify-center p-32 align-middle font-inter">
        <Outlet />
      </Coluna>
    </Linha>
  );
}

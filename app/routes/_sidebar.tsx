import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, type V2_MetaFunction } from "@remix-run/react";
import { requireActiveSubscription } from "~/session.server";
import { Sidebar } from "~/components/navigation/Sidebar";
import { SidebarLayout } from "~/components/navigation/SidebarLayout";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export const loader = async ({ request }: LoaderArgs) => {
  const user = await requireActiveSubscription(request);

  return json({ user });
};

export default function SidebarTemplate() {
  return (
    <SidebarLayout sidebar={<Sidebar />}>
      <main className="flex w-full flex-col">
        <Outlet />
      </main>
    </SidebarLayout>
  );
}

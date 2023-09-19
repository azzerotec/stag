import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, type V2_MetaFunction } from "@remix-run/react";
import { getUserId } from "~/session.server";
import { Sidebar } from "~/components/navigation/Sidebar";
import { SidebarLayout } from "~/components/navigation/SidebarLayout";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (!userId) return redirect("/login");
  return json({});
};

export default function SidebarTemplate() {
  return (
    <SidebarLayout sidebar={<Sidebar />}>
      <main className="flex w-full flex-col px-4 py-10 sm:px-6 lg:px-8 ">
        <Outlet />
      </main>
    </SidebarLayout>
  );
}

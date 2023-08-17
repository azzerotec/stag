import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { Outlet, type V2_MetaFunction } from "@remix-run/react";
import { getUserId } from "~/session.server";
import { Sidebar } from "~/components/navigation/Sidebar";
import { SidebarLayout } from "~/components/navigation/SidebarLayout";

export default function Dashboard() {
  return <>Dashboard</>;
}

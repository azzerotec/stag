import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getUser } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);

  if (user && user.priceId) redirect("/payment");
  if (user) return redirect("/plan-selection");

  return json({ ok: true });
};

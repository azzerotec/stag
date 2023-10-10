import { redirect, type LoaderArgs } from "@remix-run/node";
import { requireSubscription } from "~/session.server";
import { getSubscription } from "~/stripe.server";

export const loader = async ({ request }: LoaderArgs) => {
  const { subscriptionId } = await requireSubscription(request);
  const subscription = await getSubscription(subscriptionId!);

  if (subscription.status === "active") return redirect("/");

  return redirect("/subscription");
};

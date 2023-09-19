import type { LoaderArgs } from "@remix-run/node";
import { requireSubscription } from "~/session.server";
import { getSubscription } from "~/stripe.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await requireSubscription(request);

  const subscription = getSubscription(user.subscriptionId);
};

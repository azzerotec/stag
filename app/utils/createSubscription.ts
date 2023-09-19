import type { SubscriptionData } from "~/routes/create-subscription";

export async function createSubscription(
  priceId: string
): Promise<SubscriptionData> {
  const response = await fetch("/create-subscription", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      priceId,
    }),
  });

  return await response.json();
}

import { json, type ActionArgs } from "@remix-run/node";
import type Stripe from "stripe";
import { registerSubscription } from "~/models/user.server";
import { requireUser } from "~/session.server";
import { createSubscription } from "~/stripe.server";
import { validateText } from "~/utils";

export type SubscriptionData = {
  subscription: string | null;
  clientSecret: string | null;
  error: string | null;
};

export const action = async ({ request }: ActionArgs) => {
  const user = await requireUser(request);

  if (!user.customerId) {
    return json<SubscriptionData>(
      {
        subscription: null,
        clientSecret: null,
        error: "user is not registered as a customer in stripe",
      },
      { status: 400 }
    );
  }

  const data = await request.json();
  const { priceId } = data as { priceId: string };
  let subscription;

  if (!validateText(priceId)) {
    return json<SubscriptionData>(
      {
        subscription: null,
        clientSecret: null,
        error: "Price was not selected",
      },
      { status: 400 }
    );
  }

  subscription = await createSubscription(user.customerId, priceId);
  await registerSubscription(user.id, subscription.id, priceId);

  const invoice = subscription.latest_invoice as Stripe.Invoice;
  const paymentIntent = invoice?.payment_intent as Stripe.PaymentIntent;

  return json<SubscriptionData>(
    {
      subscription: subscription.id,
      clientSecret: paymentIntent.client_secret,
      error: null,
    },
    { status: 200 }
  );
};

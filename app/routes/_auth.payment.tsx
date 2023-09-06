import { Form } from "@remix-run/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { Coluna, Linha } from "~/components/auxiliares";

import {
  redirect,
  type ActionArgs,
  type LoaderArgs,
  json,
} from "@remix-run/node";
import { Button } from "~/components/Button";
import type Stripe from "stripe";
import { requireUser } from "~/session.server";
import {
  createSubscription,
  getSubscription,
  updateSubscriptionItem,
} from "~/stripe.server";
import { validateText } from "~/utils";
import { registerSubscription } from "~/models/user.server";

const stripePromise = loadStripe(
  "pk_test_51NkX8oA5cU636bqzPTCEtxxE8l2G1rPMPnYZRIuyLYLSzjrpTkKmaFpyaHmaxy3gzzk5C4HaunHonNWPa8ojuxmU00lkEdMvCd"
);

const updateSubscription = async (subscriptionId: string, priceId: string) => {
  const subscription = await getSubscription(subscriptionId);
  const items = subscription.items.data;
  await updateSubscriptionItem(items[0].id, priceId);

  return subscription;
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const priceId = formData.get("priceId");
  const user = await requireUser(request);
  let subscription;

  if (!user.customerId)
    throw new Error("user is not registered as a customer in stripe");

  if (!validateText(priceId)) throw new Error("Price was not selected");

  if (user.subscriptionId && user.priceId !== priceId) {
    subscription = await updateSubscription(user.subscriptionId, priceId);
  } else {
    subscription = await createSubscription(user.customerId, priceId);
    await registerSubscription(user.id, subscription.id, priceId);
  }

  const invoice = subscription.latest_invoice as Stripe.Invoice;
  const paymentIntent = invoice?.payment_intent as Stripe.PaymentIntent;

  return {
    subscription: subscription.id,
    clientSecret: paymentIntent.client_secret,
  };
};

export const loader = async ({ request }: LoaderArgs) => {
  const user = await requireUser(request);
  if (!user.priceId) return redirect("/plan-selection");
  return json({ ok: true });
};

export default function CardRegister() {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "subscription",
        amount: 1099,
        currency: "brl",
        locale: "pt-BR",

        appearance: {
          theme: "stripe",
          labels: "above",
          variables: {
            colorPrimary: "#0570de",
            colorBackground: "#ffffff",
            colorText: "#30313d",
            colorDanger: "#df1b41",
            fontFamily: "Ideal Sans, system-ui, sans-serif",
            spacingUnit: "2px",
            borderRadius: "4px",
          },
        },
      }}
    >
      <Coluna>
        <Linha>
          <span>arrow left</span>
          <h2>Pagamento no Stag.</h2>
        </Linha>
        <Form method="post" className="w-full">
          <PaymentElement
            id="payment-element"
            options={{
              business: {
                name: "Stag.",
              },
              layout: "tabs",
              wallets: { applePay: "auto" },
            }}
          />
          <Button>Inscrever-me</Button>
        </Form>
      </Coluna>
    </Elements>
  );
}

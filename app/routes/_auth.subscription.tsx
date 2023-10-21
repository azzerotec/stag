import { useLoaderData } from "@remix-run/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Coluna, Linha } from "~/components/layout/Flex";
import { plans } from "~/models/plan.server";

import { type LoaderArgs, json } from "@remix-run/node";
import { PaymentForm } from "~/components/PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51NkX8oA5cU636bqzPTCEtxxE8l2G1rPMPnYZRIuyLYLSzjrpTkKmaFpyaHmaxy3gzzk5C4HaunHonNWPa8ojuxmU00lkEdMvCd"
);

export const loader = async ({ request }: LoaderArgs) => json({ plans });

export default function CardRegister() {
  const { plans } = useLoaderData<typeof loader>();

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "subscription",
        amount: 0,
        currency: "brl",
        locale: "pt-BR",
        setupFutureUsage: "on_session",

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

        <PaymentForm plans={plans} />
      </Coluna>
    </Elements>
  );
}

import { Form } from "@remix-run/react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import type { StripeError } from "@stripe/stripe-js";
import type { FormEvent } from "react";
import { useState } from "react";
import type { Plan } from "~/models/plan.server";
import { createSubscription } from "~/utils/createSubscription";
import { getErrorMessage } from "~/utils/getErrorMessage";
import { RadioGroup } from "./RadioGroup";
import { Button } from "./Button";

export const PaymentForm = ({ plans }: { plans: Plan[] }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const [selectedPlan, setSelectedPlan] = useState<Plan["priceId"]>(
    plans[0].priceId
  );

  const handleError = (error: StripeError) => {
    setLoading(false);
    setErrorMessage(getErrorMessage(error));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe) return;
    setLoading(true);

    const submitResult = await elements?.submit();

    if (submitResult && submitResult.error) {
      handleError(submitResult.error);
      return;
    }

    // TODO: instead of creting a subscription i need to check if there is an existing one and operate in the existing one.
    const { clientSecret } = await createSubscription(selectedPlan);

    if (!clientSecret) {
      throw new Error("400 something wrong with creating subscription");
    }

    const { error } = await stripe.confirmPayment({
      elements: elements!,
      clientSecret,
      confirmParams: {
        return_url:
          process.env.NODE_ENV === "production"
            ? "https://stag-7d70.fly.dev/"
            : "http://localhost:3000/",
      },
    });

    if (error) handleError(error);
  };

  return (
    <Form onSubmit={handleSubmit} className="w-full">
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
      <span>
        {loading}
        {errorMessage}
      </span>

      <RadioGroup
        settings={plans}
        name="priceId"
        plan={selectedPlan}
        onChange={setSelectedPlan}
      />
      <Button>Inscrever-me</Button>
    </Form>
  );
};

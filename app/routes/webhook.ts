import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { stripe } from "~/stripe.server";
import { getErrorMessage } from "~/utils/getErrorMessage";

const STRIPE_SECRET =
  "whsec_bf0bdf8ad974d911e87e2b6f48c0c762ae20a7f61de21961851142e9b8a9f5a2";

export const action = async ({ request }: ActionArgs) => {
  let payload;

  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, { status: 405 });
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return json({ message: "Signature not found" }, { status: 401 });
  }

  try {
    payload = stripe.webhooks.constructEvent(
      await request.text(),
      signature,
      STRIPE_SECRET
    );
  } catch (error) {
    return json(
      { message: "Signature mismatch - " + getErrorMessage(error) },
      { status: 401 }
    );
  }

  switch (payload.type) {
    case "payment_intent.succeeded":
      const paymentIntent = payload.data.object;
      console.log("subscription success", paymentIntent);
      // Then define and call a method to handle the successful payment intent.
      // handlePaymentIntentSucceeded(paymentIntent);
      break;
    case "payment_method.attached":
      const paymentMethod = payload.data.object;
      console.log("Added credit card info", paymentMethod);
      // Then define and call a method to handle the successful attachment of a PaymentMethod.
      // handlePaymentMethodAttached(paymentMethod);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${payload.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return json({ received: true }, { status: 200 });
};

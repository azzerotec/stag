import invariant from "tiny-invariant";
import Stripe from "stripe";
import type { User } from "@prisma/client";

invariant(process.env.STRIPE_SECRET, "STRIPE_SECRET must be set");

const stripe = new Stripe(process.env.STRIPE_SECRET, {
  apiVersion: "2023-08-16",
});

export const createCustomer = ({ name, email }: Pick<User, "name" | "email">) =>
  stripe.customers.create({
    name,
    email,
  });

export const createSubscription = (customerId: string, priceId: string) =>
  stripe.subscriptions.create({
    customer: customerId,
    items: [
      {
        price: priceId,
      },
    ],
    payment_behavior: "default_incomplete",
    payment_settings: { save_default_payment_method: "on_subscription" },
    expand: ["latest_invoice.payment_intent"],
  });

export const getProductList = () =>
  stripe.products.list({
    active: true,
  });

export const updateSubscriptionItem = (
  subscriptionItemId: string,
  price: string
) =>
  stripe.subscriptionItems.update(subscriptionItemId, {
    price,
  });

export const getSubscription = async (subscriptionId: string) =>
  stripe.subscriptions.retrieve(subscriptionId);

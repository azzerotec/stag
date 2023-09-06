import { Form, useLoaderData } from "@remix-run/react";
import { Coluna, Linha } from "~/components/auxiliares";

import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Button } from "~/components/Button";
import { RadioGroup } from "~/components/RadioGroup";
import { plans } from "~/models/plan.server";
import { requireUser } from "~/session.server";
import {
  createSubscription,
  getSubscription,
  updateSubscriptionItem,
} from "~/stripe.server";
import { validateText } from "~/utils";
import { registerSubscription } from "~/models/user.server";

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

  return redirect("/payment");
};

export const loader = async ({ request }: LoaderArgs) => {
  await requireUser(request);

  return json({
    plans,
  });
};

export default function CardRegister() {
  const { plans } = useLoaderData<typeof loader>();

  return (
    <Coluna>
      <Linha>
        <span>arrow left</span>
        <h2>Pagamento no Stag.</h2>
      </Linha>
      <Form method="post" className="w-full">
        <RadioGroup settings={plans} name="priceId" />
        <Button>Ir para pagamento</Button>
      </Form>
    </Coluna>
  );
}

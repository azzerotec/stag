import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getUser } from "~/session.server";
import { safeRedirect } from "~/utils";

export const checkFeatureFlagBeforeRedirect = (
  destination: FormDataEntryValue | string | null | undefined
) => safeRedirect(process.env.PAYMENT_FLOW && destination);

export const checkForSubscription = async (request: Request) => {
  const url = new URL(request.url);
  const user = await getUser(request);

  if (url.pathname === "/register" || url.pathname === "/login") {
    if (user) {
      if (user.priceId)
        return redirect(checkFeatureFlagBeforeRedirect("/payment"));
      return redirect(checkFeatureFlagBeforeRedirect("plan-selection"));
    }
  }

  return null;
};

export const loader = async ({ request }: LoaderArgs) => {
  const hasPreviousSession = await checkForSubscription(request);

  if (hasPreviousSession) return hasPreviousSession;

  return json({ ok: true });
};

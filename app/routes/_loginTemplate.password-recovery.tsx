import { json, redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useActionData,
  useSearchParams,
} from "@remix-run/react";
import { useState } from "react";
import { Button } from "~/components/Button";
import { TextInput } from "~/components/TextInput";
import { safeRedirect, validateEmail } from "~/utils";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const email = formData.get("email");

  if (!validateEmail(email)) {
    return json(
      {
        errors: {
          email: "Email is invalid",
        },
      },
      { status: 400 }
    );
  }

  return redirect(redirectTo);
};

export default function Register() {
  const actionData = useActionData<typeof action>();

  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");

  const redirectTo =
    searchParams.get("redirectTo") ||
    `/password-recovery/code-confirmation?email=${email}`;

  return (
    <>
      <h2 className="mb-14 font-montserrat text-2xl font-semibold text-a374151">
        Redefinir senha
      </h2>
      <Form method="post" className="w-full">
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="E-mail"
          id="email"
          required
          autoFocus={true}
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={actionData?.errors.email ? true : undefined}
          aria-describedby="email-error"
        />
        {actionData?.errors?.email ? (
          <div className="pt-1 text-red-700" id="email-error">
            {actionData.errors.email}
          </div>
        ) : null}
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <Button type="submit">Receber código</Button>
      </Form>

      <div className="mt-14 text-a606771">
        Lembrou sua senha?
        <Link
          to={{
            pathname: "/login",
            search: searchParams.toString(),
          }}
          className="ml-1 text-a404347"
        >
          Login
        </Link>
      </div>
      <Outlet />
    </>
  );
}

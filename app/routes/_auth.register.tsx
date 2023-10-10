import { json } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/Button";
import { TermsOfUse } from "~/components/TermsOfUse";
import { TextInput } from "~/components/TextInput";
import { LogoStag } from "~/images/icons/LogoStag";
import { createUser } from "~/models/user.server";
import { createUserSession } from "~/session.server";
import { getFormData, validateRegisterForm } from "~/utils/form/register";

export { loader } from "~/utils/redirectWhenActiveSession";

export const action = async ({ request }: ActionArgs) => {
  const { redirectTo, ...jsonData } = await getFormData(request);
  const { errors, data } = await validateRegisterForm(jsonData);

  if (!data) return json({ errors }, { status: 400 });

  const user = await createUser(data.oab, data.name, data.email, data.password);

  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
};

export default function Register() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/plan-selection";
  const actionData = useActionData<typeof action>();
  const oabRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [termsModalOpen, setTermsModalOpen] = useState(false);

  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <>
      <LogoStag />

      <h2 className="mb-14 font-montserrat text-2xl font-semibold text-a374151">
        Hora de criar uma conta!
      </h2>
      <Form method="post" className="flex w-full flex-col gap-4">
        <TextInput
          label="Nome completo"
          ref={nameRef}
          id="name"
          required
          autoFocus={true}
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={actionData?.errors?.name ? true : undefined}
          aria-describedby="name-error"
        />
        <TextInput
          label="OAB"
          ref={oabRef}
          id="oab"
          required
          autoFocus={true}
          name="oab"
          type="text"
          autoComplete="oab"
          aria-invalid={actionData?.errors?.oab ? true : undefined}
          aria-describedby="oab-error"
        />
        <TextInput
          label="E-mail"
          ref={emailRef}
          id="email"
          required
          autoFocus={true}
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={actionData?.errors?.email ? true : undefined}
          aria-describedby="email-error"
        />
        {actionData?.errors?.email ? (
          <div className="pt-1 text-red-700" id="email-error">
            {actionData.errors.email}
          </div>
        ) : null}
        <TextInput
          label="Senha"
          id="password"
          ref={passwordRef}
          name="password"
          type="password"
          autoComplete="new-password"
          aria-invalid={actionData?.errors?.password ? true : undefined}
          aria-describedby="password-error"
        />
        {actionData?.errors?.password ? (
          <div className="pt-1 text-red-700" id="password-error">
            {actionData.errors.password}
          </div>
        ) : null}
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <Button>Criar conta</Button>
      </Form>

      <div className=" mt-4 text-center text-a606771">
        Clicando em "Criar conta" você declara
        <br /> que está ciente e concorda com nossos{" "}
        <button
          className="text-sky-600 underline"
          onClick={() => setTermsModalOpen(true)}
        >
          termos
        </button>
      </div>

      <div className="mt-14 text-a606771">
        Já tem uma conta?
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
      <TermsOfUse open={termsModalOpen} setOpen={setTermsModalOpen} />
    </>
  );
}

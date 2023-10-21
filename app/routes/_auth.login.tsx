import { json, type ActionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { TextInput } from "~/components/TextInput";
import { Linha } from "~/components/layout/Flex";
import { LogoStag } from "~/images/icons/LogoStag";
import { createUserSession } from "~/session.server";
import { getFormData, validateForm } from "~/utils/form/login";

export { loader } from "~/utils/redirectWhenActiveSession";

export const action = async ({ request }: ActionArgs) => {
  const { redirectTo, remember, ...jsonData } = await getFormData(request);
  const { errors, data } = await validateForm(jsonData);

  if (!data) return json({ errors }, { status: 400 });

  return createUserSession({
    redirectTo,
    remember: remember === "on" ? true : false,
    request,
    userId: data.id,
  });
};

export default function Login() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

      <h2 className="mb-4 font-montserrat text-2xl font-semibold text-a374151">
        Entre na sua conta
      </h2>
      <Form method="post" className="flex w-full flex-col gap-4">
        <TextInput
          label="E-mail ou nº OAB"
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
          autoComplete="current-password"
          aria-invalid={actionData?.errors?.password ? true : undefined}
          aria-describedby="password-error"
        />
        {actionData?.errors?.password ? (
          <div className="pt-1 text-red-700" id="password-error">
            {actionData.errors.password}
          </div>
        ) : null}

        <input type="hidden" name="redirectTo" value={redirectTo} />
        <button
          type="submit"
          className="mt-8 w-full rounded-md bg-a606875 py-2 font-medium text-white "
        >
          Entrar
        </button>
        <Linha className="mt-4 w-full justify-between text-xs">
          <div>
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm">
              Lembrar-me
            </label>
          </div>
          <Link
            to={{
              pathname: "/password-recovery",
              search:
                emailRef.current?.value && "email=" + emailRef.current?.value,
            }}
            className="text-sm font-medium text-a8B919A"
          >
            Esqueceu sua senha?
          </Link>
        </Linha>
      </Form>

      <Linha className="mt-14 text-a606771">
        Não tem uma conta?
        <Link
          to={{
            pathname: "/register",
            search: searchParams.toString(),
          }}
          className="ml-1 text-a8B919A"
        >
          Criar conta
        </Link>
      </Linha>
    </>
  );
}

import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { TextInput } from "~/components/TextInput";
import { Coluna, Linha } from "~/components/auxiliares";
import { LogoStag } from "~/components/image/icons/LogoStag";
import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail, validateText } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const oab = formData.get("oab");
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateText(oab)) {
    return json(
      {
        errors: {
          oab: "OAB is invalid",
          password: null,
          email: null,
          name: null,
        },
      },
      { status: 400 }
    );
  }

  if (!validateText(name)) {
    return json(
      {
        errors: {
          name: "Name is invalid",
          password: null,
          email: null,
          oab: null,
        },
      },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return json(
      {
        errors: {
          email: "Email is invalid",
          password: null,
          oab: null,
          name: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      {
        errors: {
          email: null,
          password: "Password is required",
          oab: null,
          name: null,
        },
      },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      {
        errors: {
          email: null,
          password: "Password is too short",
          oab: null,
          name: null,
        },
      },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
          oab: null,
          name: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(oab, name, email, password);

  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
};

export default function Register() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const oabRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
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
    <Linha>
      <Form method="post">
        <Coluna></Coluna>
        <Coluna className="items-center px-36 py-56 align-middle font-inter">
          <LogoStag />
          <h2 className="mb-14 font-montserrat text-2xl font-semibold text-a374151">
            Hora de criar uma conta!
          </h2>
          <TextInput
            label="Nome completo"
            ref={nameRef}
            id="name"
            required
            autoFocus={true}
            name="name"
            type="name"
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
            type="oab"
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
          <button
            className="mt-8 flex w-80 justify-center rounded-md bg-a606875 py-2 font-medium text-white"
            type="submit"
          >
            Criar conta
          </button>
          <span className=" mt-28 text-a606771">
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
          </span>
        </Coluna>
      </Form>
    </Linha>
  );
}

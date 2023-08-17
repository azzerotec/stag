import { json, redirect } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { TextInput } from "~/components/TextInput";
import { Coluna, Linha } from "~/components/auxiliares";
import { LogoStag } from "~/components/image/icons/LogoStag";
import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
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
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
};

export default function Register() {
  return (
    <Linha>
      <Coluna></Coluna>
      <Coluna className="items-center px-36 py-56 align-middle font-inter">
        <LogoStag />
        <h2 className="mb-14 font-montserrat text-2xl font-semibold text-a374151">
          Hora de criar uma conta!
        </h2>
        <TextInput label="Nome completo" />
        <TextInput label="OAB" />
        <TextInput label="E-mail" />
        <TextInput label="Senha" />
        <Link
          className="mt-8 flex w-80 justify-center rounded-md bg-a606875 py-2 font-medium text-white"
          to="/login"
        >
          Criar conta
        </Link>
        <text className=" mt-28 text-a606771">
          Já tem uma conta?
          <Link to="/login" className="ml-1 text-a404347">
            Login
          </Link>
        </text>
      </Coluna>
    </Linha>
  );
}

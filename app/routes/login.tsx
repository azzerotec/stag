import { json, type LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { TextInput } from "~/components/TextInput";
import { Coluna, Linha } from "~/components/auxiliares";
import { LogoStag } from "~/components/image/icons/LogoStag";

export const loader = async ({ request }: LoaderArgs) => {
  //   const userId = await getUserId(request);
  //   if (userId) return redirect("/");
  return json({ ok: true });
};

export default function Login() {
  return (
    <Linha>
      <Coluna></Coluna>
      <Coluna className="items-center px-36 py-56 align-middle font-inter">
        <LogoStag />
        <h2 className="mb-4 font-montserrat text-2xl font-semibold text-a374151">
          Entre na sua conta
        </h2>
        <TextInput label="E-mail ou nº OAB" />
        <TextInput label="Senha" />
        <button className="mt-8 w-80 rounded-md bg-a606875 py-2 font-medium text-white ">
          Entrar
        </button>
        <Linha className="mt-4 w-80 justify-between text-xs">
          <div>
            <input id="manterlogado" type="checkbox" />
            <label htmlFor="manterlogado" className="ml-2 text-sm">
              Lembrar-me
            </label>
          </div>
          <a className="text-sm font-medium text-a8B919A">
            Esqueceu sua senha?
          </a>
        </Linha>
        <text className=" mt-4 text-a606771">
          Não tem uma conta?
          <Link to="/join" className="text-a8B919A">
            Criar conta
          </Link>
        </text>
      </Coluna>
    </Linha>
  );
}

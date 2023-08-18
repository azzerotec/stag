import { Modal } from "./modal";
import { Coluna } from "./auxiliares";

export const TermsOfUse = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Coluna className=" max-w-2xl items-center px-28 py-24 text-center">
        <h1 className="text-a424A57 font-montserrat text-3xl font-semibold">
          Termos e condições de uso
        </h1>
        <h2 className="mt-6 font-montserrat text-sm font-medium text-a606771">
          Enviamos um email com o link para fazer a mudança de senha da sua
          conta!
        </h2>
        <div>
          <input
            id="ToAgreeTerms"
            name="ToAgreeTerms"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="ToAgreeTerms" className="ml-2 text-sm">
            Eu li e concordo com os termos e condições de uso.
          </label>
        </div>
        <button className="mt-6 w-96 rounded-md bg-a606875 py-2 font-medium text-white">
          Prosseguir
        </button>
      </Coluna>
    </Modal>
  );
};

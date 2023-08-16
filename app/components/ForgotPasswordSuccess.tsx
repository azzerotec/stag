import { Modal } from "./modal";
import { Coluna } from "./auxiliares";

export const ForgotPasswordSuccess = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Coluna className=" max-w-2xl items-center p-24 text-center">
        <h1 className="font-montserrat text-3xl font-semibold text-a374151">
          Tudo certo!
        </h1>
        <h2 className="mt-6 font-montserrat text-sm font-medium text-a606771">
          Enviamos um email com o link para fazer a mudança de senha da sua
          conta!
        </h2>
        <button className="mt-6 w-80 rounded-md bg-a606875 py-2 font-medium text-white">
          Concluir
        </button>
      </Coluna>
    </Modal>
  );
};
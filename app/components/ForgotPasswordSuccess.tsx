import { Modal } from "./modal";
import { Coluna } from "./layout/Flex";
import { Button } from "./Button";

export const ForgotPasswordSuccess = ({
  open,
  setOpen,
  setConfirmation = () => {},
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  setConfirmation?: () => void;
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Coluna className=" max-w-2xl items-center px-28 py-24 text-center">
        <h1 className="font-montserrat text-3xl font-semibold text-a374151">
          Tudo certo!
        </h1>
        <h2 className="mt-6 font-montserrat text-sm font-medium text-a606771">
          Enviamos um email com o link para fazer a mudança de senha da sua
          conta!
        </h2>
        <Button onClick={setConfirmation}>Concluir</Button>
      </Coluna>
    </Modal>
  );
};

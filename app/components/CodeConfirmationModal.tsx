import { Modal } from "./modal";
import { InputNumber } from "./InputNumber";
import { Button } from "./Button";
import { Form } from "@remix-run/react";

type Props = {
  email?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirmation: () => void;
};

export const CodeConfirmationModal = ({
  email,
  open,
  setOpen,
  onConfirmation,
}: Props) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Form className="flex max-w-2xl flex-col items-center p-24 text-center">
        <h1 className="font-montserrat text-3xl font-semibold text-a374151">
          Digite o código recebido!
        </h1>
        <h2 className="mt-6 font-montserrat text-sm font-medium text-a606771">
          Mandamos um código para <b className="text-a111827">{email}</b>
        </h2>
        <InputNumber />
        <h2 className="mt-6 font-montserrat text-sm font-medium text-a606771">
          <h2 className="mt-6 font-montserrat text-sm font-medium text-a606771">
            Mandamos um código para{" "}
            <button className="text-a111827">{email}</button>
          </h2>
        </h2>
        <Button onClick={onConfirmation}>Reenviar código</Button>
      </Form>
    </Modal>
  );
};

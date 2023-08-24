import { Modal } from "./modal";
import { OTPInput } from "./OTPInput";
import { Form } from "@remix-run/react";
import { Button } from "./Button";

type Props = {
  email: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  redirectTo: string;
  errors?: {
    code: string | null;
  };
};

export const CodeConfirmationModal = ({
  email,
  open,
  setOpen,
  redirectTo,
  errors,
}: Props) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Form
        className="flex max-w-2xl flex-col items-center p-24 text-center"
        method="POST"
      >
        <h1 className="mb-6 font-montserrat text-3xl font-semibold text-a374151">
          Digite o código recebido!
        </h1>
        <h2 className="font-montserrat text-sm font-medium text-a606771">
          Mandamos um código para <b className="text-a111827">{email}</b>
        </h2>
        <div className="my-6">
          <OTPInput />
          {errors?.code ? (
            <div className="pt-1 text-red-700" id="code-error">
              {errors.code}
            </div>
          ) : null}
        </div>
        <h2 className=" font-montserrat text-sm font-medium text-a606771">
          Não recebeu o código?{" "}
          <button className="text-blue-500 underline">Reenviar código.</button>
        </h2>
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <Button>Enviar</Button>
      </Form>
    </Modal>
  );
};

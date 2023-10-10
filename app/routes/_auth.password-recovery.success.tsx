import { useNavigate } from "@remix-run/react";
import { ForgotPasswordSuccess } from "~/components/ForgotPasswordSuccess";

export default function CodeConfirmation() {
  const redirect = useNavigate();
  const handleModalClose = () => redirect("/");

  return (
    <ForgotPasswordSuccess
      open={true}
      setOpen={(open) => {
        if (!open) handleModalClose();
      }}
      setConfirmation={handleModalClose}
    />
  );
}

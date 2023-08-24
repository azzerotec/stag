import { json, type ActionArgs, redirect } from "@remix-run/node";
import { useActionData, useNavigate, useSearchParams } from "@remix-run/react";
import { CodeConfirmationModal } from "~/components/CodeConfirmationModal";
import { safeRedirect } from "~/utils";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const code0 = formData.get("code-0");
  const code1 = formData.get("code-1");
  const code2 = formData.get("code-2");
  const code3 = formData.get("code-3");

  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const isCodeValid = code0 || code1 || code2 || code3;

  console.log(code0, code1, code2, code3);

  if (!isCodeValid) {
    return json({ errors: { code: "Code is incorrect" } }, { status: 400 });
  }

  return redirect(redirectTo);
};

export default function CodeConfirmation() {
  const actionData = useActionData<typeof action>();
  const redirect = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  if (!email)
    throw new Error("trying to reset password without informing email");

  return (
    <CodeConfirmationModal
      email={email}
      open={Boolean(email)}
      setOpen={(open) => {
        if (!open) redirect("/password-recovery");
      }}
      errors={actionData?.errors}
      redirectTo="/password-recovery/success"
    />
  );
}

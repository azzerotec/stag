import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

type Errors = {
  email: string | null;
  password: string | null;
};

type Form = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

export const getFormData = async (request: Request) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"));
  const remember = formData.get("remember");

  return { email, password, remember, redirectTo };
};

export const validateForm = async ({ email, password }: Form) => {
  let errors: Errors = {
    email: null,
    password: null,
  };

  if (!validateEmail(email)) {
    errors.email = "Email is invalid";
    return { errors, data: null };
  }

  if (typeof password !== "string" || password.length === 0) {
    errors.password = "Password is required";
    return { errors, data: null };
  }

  if (password.length < 8) {
    errors.password = "Password is too short";
    return { errors, data: null };
  }

  const user = await verifyLogin(email, password);

  if (!user) {
    errors.email = "Invalid email or password";
    return { errors, data: null };
  }

  return { errors, data: user };
};

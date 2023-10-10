import { getUserByEmail } from "~/models/user.server";
import { safeRedirect, validateEmail, validateText } from "~/utils";

type Errors = {
  oab: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
};

type Form = {
  oab: FormDataEntryValue | null;
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

export const getFormData = async (request: Request) => {
  const formData = await request.formData();
  const redirectTo = safeRedirect(formData.get("redirectTo"));

  const oab = formData.get("oab");
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  return { oab, name, email, password, redirectTo };
};

export const validateRegisterForm = async ({
  name,
  oab,
  email,
  password,
}: Form) => {
  let errors: Errors = {
    oab: null,
    password: null,
    email: null,
    name: null,
  };

  if (!validateText(oab)) {
    errors.oab = "OAB is invalid";
    return { errors, data: null };
  }

  if (!validateText(name)) {
    errors.name = "Name is invalid";
    return { errors, data: null };
  }

  if (!validateEmail(email)) {
    errors.email = "Email is invalid";
    return { errors, data: null };
  }

  if (typeof password !== "string" || password.length === 0) {
    errors.password = "Password is required";
    return { errors, data: null };
  }

  if (password && password.length < 8) {
    errors.password = "Password is too short";
    return { errors, data: null };
  }

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    errors.email = "A user already exists with this email";
    return { errors, data: null };
  }

  return { errors, data: { oab, name, email, password } };
};

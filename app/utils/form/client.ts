import { validateProvince, validateText } from "~/utils";

type Errors = {
  name: string | null;
  cpf: string | null;
  rg: string | null;
  birthdate: string | null;
  nationality: string | null;
  email: string | null;
  personalContact: string | null;
  professionalContact: string | null;
  engaged: string | null;
  profession: string | null;
  cep: string | null;
  city: string | null;
  neighborhood: string | null;
  province: string | null;
  streetAddress: string | null;
  streetAddress2: string | null;
};

type Form = {
  name: FormDataEntryValue | null;
  cpf: FormDataEntryValue | null;
  rg: FormDataEntryValue | null;
  birthdate: FormDataEntryValue | null;
  nationality: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  personalContact: FormDataEntryValue | null;
  professionalContact: FormDataEntryValue | null;
  engaged: FormDataEntryValue | null;
  profession: FormDataEntryValue | null;
  cep: FormDataEntryValue | null;
  city: FormDataEntryValue | null;
  neighborhood: FormDataEntryValue | null;
  province: FormDataEntryValue | null;
  streetAddress: FormDataEntryValue | null;
  streetAddress2: FormDataEntryValue | null;
};

export const getFormData = async (request: Request) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const cpf = formData.get("cpf");
  const rg = formData.get("rg");
  const birthdate = formData.get("birthdate");
  const nationality = formData.get("nationality");
  const email = formData.get("email");
  const personalContact = formData.get("personalContact");
  const professionalContact = formData.get("professionalContact");
  const engaged = formData.get("engaged");
  const profession = formData.get("profession");

  const cep = formData.get("cep");
  const city = formData.get("city");
  const neighborhood = formData.get("neighborhood");
  const province = formData.get("province");
  const streetAddress = formData.get("streetAddress");
  const streetAddress2 = formData.get("streetAddress2");

  return {
    name,
    cpf,
    rg,
    birthdate,
    nationality,
    email,
    personalContact,
    professionalContact,
    engaged,
    profession,
    cep,
    city,
    neighborhood,
    province,
    streetAddress,
    streetAddress2,
  };
};

export const validateRegisterForm = async ({
  name,
  cpf,
  rg,
  birthdate,
  nationality,
  email,
  personalContact,
  professionalContact,
  engaged,
  profession,
  cep,
  city,
  neighborhood,
  province,
  streetAddress,
  streetAddress2,
}: Form) => {
  let errors: Errors = {
    name: null,
    cpf: null,
    rg: null,
    birthdate: null,
    nationality: null,
    email: null,
    personalContact: null,
    professionalContact: null,
    engaged: null,
    profession: null,
    cep: null,
    city: null,
    neighborhood: null,
    province: null,
    streetAddress: null,
    streetAddress2: null,
  };

  if (!validateText(name)) {
    errors.name = "name is invalid";
    return { errors, data: null };
  }

  if (!validateText(cpf)) {
    errors.cpf = "cpf is invalid";
    return { errors, data: null };
  }

  if (!validateText(rg)) {
    errors.rg = "rg is invalid";
    return { errors, data: null };
  }

  if (!validateText(birthdate)) {
    errors.birthdate = "birthdate is invalid";
    return { errors, data: null };
  }

  if (!validateText(nationality)) {
    errors.nationality = "nationality is invalid";
    return { errors, data: null };
  }

  if (!validateText(email)) {
    errors.email = "email is invalid";
    return { errors, data: null };
  }

  if (!validateText(personalContact)) {
    errors.personalContact = "personalContact is invalid = " + personalContact;
    return { errors, data: null };
  }

  if (!validateText(professionalContact)) {
    errors.professionalContact = "professionalContact is invalid";
    return { errors, data: null };
  }

  if (!validateText(engaged)) {
    errors.engaged = "engaged is invalid";
    return { errors, data: null };
  }

  if (!validateText(profession)) {
    errors.profession = "profession is invalid";
    return { errors, data: null };
  }

  if (!validateText(cep)) {
    errors.cep = "cep is invalid";
    return { errors, data: null };
  }

  if (!validateText(city)) {
    errors.city = "city is invalid";
    return { errors, data: null };
  }

  if (!validateText(neighborhood)) {
    errors.neighborhood = "neighborhood is invalid";
    return { errors, data: null };
  }

  if (!validateProvince(province)) {
    errors.province = "province is invalid";
    return { errors, data: null };
  }

  if (!validateText(streetAddress)) {
    errors.streetAddress = "streetAddress is invalid";
    return { errors, data: null };
  }

  if (!validateText(streetAddress2)) {
    errors.streetAddress2 = "streetAddress2 is invalid";
    return { errors, data: null };
  }

  return {
    errors,
    data: {
      name,
      cpf,
      rg,
      birthdate: new Date(birthdate),
      nationality,
      email,
      personalContact,
      professionalContact,
      engaged,
      profession,
      cep,
      city,
      neighborhood,
      province,
      streetAddress,
      streetAddress2,
    },
  };
};

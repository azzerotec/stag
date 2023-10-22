import type { Client } from "@prisma/client";
import { prisma } from "~/db.server";

export const getClients = () => prisma.client.findMany();

export const getClient = (id: Client["id"]) =>
  prisma.client.findUnique({
    where: {
      id,
    },
  });

export const createClient = async (data: {
  name: Client["name"];
  cpf: Client["cpf"];
  rg: Client["rg"];
  birthdate: Client["birthdate"];
  nationality: Client["nationality"];
  email: Client["email"];
  personalContact: Client["personalContact"];
  professionalContact: Client["professionalContact"];
  engaged: Client["engaged"];
  profession: Client["profession"];
  cep: Client["cep"];
  city: Client["city"];
  neighborhood: Client["neighborhood"];
  province: Client["province"];
  streetAddress: Client["streetAddress"];
  streetAddress2: Client["streetAddress2"];
}) => {
  return prisma.client.create({
    data,
  });
};

export const updateClient = async (
  data: {
    name: Client["name"];
    cpf: Client["cpf"];
    rg: Client["rg"];
    birthdate: Client["birthdate"];
    nationality: Client["nationality"];
    email: Client["email"];
    personalContact: Client["personalContact"];
    professionalContact: Client["professionalContact"];
    engaged: Client["engaged"];
    profession: Client["profession"];
    cep: Client["cep"];
    city: Client["city"];
    neighborhood: Client["neighborhood"];
    province: Client["province"];
    streetAddress: Client["streetAddress"];
    streetAddress2: Client["streetAddress2"];
  },
  id: Client["id"]
) =>
  prisma.client.update({
    where: {
      id,
    },
    data,
  });

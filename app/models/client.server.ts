import { Prisma } from "@prisma/client";
import type { Client } from "@prisma/client";
import { prisma } from "~/db.server";

const clientListData = Prisma.validator<Prisma.ClientArgs>()({
  select: { name: true, cpf: true, personalContact: true, province: true },
});

export type ClientListItem = Prisma.ClientGetPayload<typeof clientListData>;

export const getClients = () => prisma.client.findMany();

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
  // cep: Client["cep"];
  // city: Client["city"];
  // neighborhood: Client["neighborhood"];
  // province: Client["province"];
  // streetAddress: Client["streetAddress"];
  // streetAddress2: Client["streetAddress2"];
}) => {
  return prisma.client.create({
    data,
  });
};

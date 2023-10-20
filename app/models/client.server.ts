import { Prisma } from "@prisma/client";
import type { Client } from "@prisma/client";
import { prisma } from "~/db.server";

const clientListData = Prisma.validator<Prisma.ClientArgs>()({
  select: { name: true, cpf: true, personalContact: true, province: true },
});

export type ClientListItem = Prisma.ClientGetPayload<typeof clientListData>;

export const Clients: ClientListItem[] = [
  {
    name: "Jane Cooper",
    cpf: "090.023.098-34",
    personalContact: "+55 (48) 9 9981-2874",
    province: "SC",
  },
  {
    name: "Cody Fisher",
    cpf: "090.023.098-33",
    personalContact: "cody.fisher@example.com",
    province: "Owner",
  },
  {
    name: "Esther Howard",
    cpf: "090.023.098-32",
    personalContact: "esther.howard@example.com",
    province: "Member",
  },
  {
    name: "Jenny Wilson",
    cpf: "090.023.098-31",
    personalContact: "jenny.wilson@example.com",
    province: "Member",
  },
  {
    name: "Kristin Watson",
    cpf: "090.023.098-35",
    personalContact: " kristin.watson@example.com",
    province: "Admin",
  },
  {
    name: "Cameron Williamson",
    cpf: "090.023.098-36",
    personalContact: "cameron.williamson@example.com",
    province: "Member",
  },
];

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

export type Client = {
  name: string;
  cpf: string;
  phoneNumber: string;
  province: string;
};

export const Clients: Client[] = [
  {
    name: "Jane Cooper",
    cpf: "090.023.098-34",
    phoneNumber: "+55 (48) 9 9981-2874",
    province: "SC",
  },
  {
    name: "Cody Fisher",
    cpf: "090.023.098-33",
    phoneNumber: "cody.fisher@example.com",
    province: "Owner",
  },
  {
    name: "Esther Howard",
    cpf: "090.023.098-32",
    phoneNumber: "esther.howard@example.com",
    province: "Member",
  },
  {
    name: "Jenny Wilson",
    cpf: "090.023.098-31",
    phoneNumber: "jenny.wilson@example.com",
    province: "Member",
  },
  {
    name: "Kristin Watson",
    cpf: "090.023.098-35",
    phoneNumber: " kristin.watson@example.com",
    province: "Admin",
  },
  {
    name: "Cameron Williamson",
    cpf: "090.023.098-36",
    phoneNumber: "cameron.williamson@example.com",
    province: "Member",
  },
];

export const getClients = () => Clients;

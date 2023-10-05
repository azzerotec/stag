export type Process = {
  number: string;
  name: string;
  type: string;
  state: string;
};

export const Processes: Process[] = [
  {
    number: "12234567.00.2022.1.02.1234",
    name: "Ana Clara Garcia",
    type: "Não ajuizado",
    state: "A protocolar",
  },
  {
    number: "12234567.00.2022.1.02.1234",
    name: "Gustavo Cortes",
    type: "Ajuizado",
    state: "Petição inicial",
  },
  {
    number: "12234567.00.2022.1.02.1234",
    name: "João da Silva Silveira",
    type: "Não ajuizado",
    state: "A protocolar",
  },
  {
    number: "12234567.00.2022.1.02.1234",
    name: "Paula Costa ",
    type: "Não ajuizado",
    state: "Prazo a contestar",
  },
  {
    number: "12234567.00.2022.1.02.1234",
    name: "José Guimarães ",
    type: "ajuizado",
    state: "Aguardando audiência",
  },
  {
    number: "12234567.00.2022.1.02.1234",
    name: "James Gonçales",
    type: "Administrativo",
    state: "Arquivado",
  },
];

export const getProcesses = () => Processes;

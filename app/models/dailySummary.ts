export type DailySummaryItem = {
  date: string;
  title: string;
  content: string;
  status: "Hoje" | "Amanhã" | "Atrasado";
  type: "task" | "update" | "appointment";
};

export const dailySummary: DailySummaryItem[] = [
  {
    date: "2023-05-20T04:00:00.000Z",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "Atrasado",
    title: "Enviar doc do Fulaninho",
    type: "task",
  },
  {
    date: "2023-05-20T04:00:00.000Z",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: "Atrasado",
    title: "Enviar doc do Fulaninho",
    type: "appointment",
  },
];

export const getDailySummary = () => dailySummary;

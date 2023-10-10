export type Plan = {
  name: string;
  description: string;
  amount: number;
  priceId: string;
};

export const plans: Plan[] = [
  {
    name: "Assinatura Mensal",
    description: "R$ 100,00 / por mês",
    amount: 100,
    priceId: "price_1NkYGKA5cU636bqzeSO3q7rG",
  },
  {
    name: "Assinatura Anual",
    description: "R$ 1.200,00 / por ano",
    amount: 1200,
    priceId: "price_1NkYGKA5cU636bqzf2lzdLri",
  },
];

export type Plan = {
  name: string;
  description: string;
  plan: string;
  amount: number;
  priceId: string;
};

export const plans: Plan[] = [
  {
    name: "Assinatura do Stag",
    description: "R$ 100,00 / por mês",
    plan: "Assinatura mensal",
    amount: 100,
    priceId: "price_1NkYGKA5cU636bqzeSO3q7rG",
  },
  {
    name: "Assinatura do Stag",
    description: "R$ 1.200,00 / por ano",
    plan: "Assinatura anual",
    amount: 1200,
    priceId: "price_1NkYGKA5cU636bqzf2lzdLri",
  },
];

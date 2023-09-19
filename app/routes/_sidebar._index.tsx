import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { UpdatesSection } from "~/components/dashboard/ProcessUpdate";
import { QuickActions } from "~/components/dashboard/QuickActions";
import { SummaryDay } from "~/components/dashboard/SummaryDay";
import { Coluna, Linha } from "~/components/auxiliares";

const TJSCUpdates = [
  {
    processNumber: "3719283983798746",
    clientName: "José Arcos Macedo",
    date: "23/05/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet...",
  },
  {
    processNumber: "3719283983798746",
    clientName: "José Arcos Macedo",
    date: "23/05/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet...",
  },
];

const processUpdates = [
  {
    processNumber: "3719283983798746",
    clientName: "José Arcos Macedo",
    date: "23/05/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet...",
  },
  {
    processNumber: "3719283983798746",
    clientName: "José Arcos Macedo",
    date: "23/05/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet...",
  },
  {
    processNumber: "3719283983798746",
    clientName: "José Arcos Macedo",
    date: "23/05/2021",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet...",
  },
];

const updateFactory = (name: string, updates?: typeof processUpdates) => ({
  name,
  updates: updates || processUpdates,
});

export type Update = {
  name: string;
  updates: typeof processUpdates;
};

export type DailySummaryItem = {
  date: string;
  title: string;
  content: string;
  status: "Hoje" | "Amanhã" | "Atrasado";
  type: "task" | "update" | "appointment";
};

export const loader = () => {
  const TJSC = updateFactory("TJSC");
  TJSC.updates = TJSCUpdates;

  const withUpdates: Update[] = [
    TJSC,
    updateFactory("TJRS"),
    updateFactory("TRF4"),
    updateFactory("STF", []),
  ];

  const dailySummary: DailySummaryItem[] = [
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

  return json({
    updates: withUpdates,
    dailySummary,
  });
};

export default function Dashboard() {
  const { updates, dailySummary } = useLoaderData<typeof loader>();

  return (
    <>
      <Linha>
        <Coluna className="grow">
          <QuickActions />
          <UpdatesSection updates={updates} />
        </Coluna>
        <Coluna className="grow">
          <SummaryDay dailySummary={dailySummary} />
        </Coluna>
      </Linha>
    </>
  );
}

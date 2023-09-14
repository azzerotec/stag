import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { UpdatesSection } from "~/components/ProcessUpdate";
import { QuickActions } from "~/components/QuickActions";
import { SummaryDay } from "~/components/SummaryDay";
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

export const loader = () => {
  const TJSC = updateFactory("TJSC");
  TJSC.updates = TJSCUpdates;

  const withUpdates: Update[] = [
    TJSC,
    updateFactory("TJRS"),
    updateFactory("TRF4"),
    updateFactory("STF", []),
  ];

  return json({
    updates: withUpdates,
  });
};

export default function Dashboard() {
  const { updates } = useLoaderData<typeof loader>();

  return (
    <>
      <Linha>
        <Coluna className="w-1/2">
          <QuickActions />
          <UpdatesSection updates={updates} />
        </Coluna>
        <Coluna>
          <SummaryDay />
        </Coluna>
      </Linha>
    </>
  );
}

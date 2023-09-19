export type Update = {
  processNumber: string;
  clientName: string;
  date: string;
  content: string;
};

export const TJSCUpdates: Update[] = [
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

export const processUpdates: Update[] = [
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

export type CourtUpdates = {
  name: string;
  updates: Update[];
};

export const updateFactory = (
  name: string,
  updates?: Update[]
): CourtUpdates => ({
  name,
  updates: updates || processUpdates,
});

export const getUpdatesByCourt = () => {
  const TJSC = updateFactory("TJSC");
  TJSC.updates = TJSCUpdates;

  return [
    TJSC,
    updateFactory("TJRS"),
    updateFactory("TRF4"),
    updateFactory("STF", []),
    updateFactory("STF", []),
    updateFactory("STF", []),
    updateFactory("STF", []),
    updateFactory("STF", []),
    updateFactory("STF", []),
    updateFactory("STF", []),
    updateFactory("STF", []),
    updateFactory("STF", []),
  ];
};

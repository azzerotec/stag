export type Process = {
  number: string;
};

export const Processes: Process[] = [
  { number: "2134215454315134" },
  { number: "2163146565765754" },
  { number: "2390470923740927" },
];

export const getProcesses = () => Processes;

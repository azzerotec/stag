import type { ReactNode } from "react";
import { Coluna, Linha } from "../layout/Flex";
import { EmptyList } from "../EmptyList";
import { Select } from "../Select";
import { DatePicker } from "../DatePicker";
import type { DailySummaryItem } from "~/models/dailySummary";

type PropsTask = {
  title: string;
  amount: number;
};

const NumberTasks = ({ title, amount }: PropsTask) => {
  return (
    <Linha className="mr-2 font-roboto text-xs text-a374151">
      <span className="font-light">{title}</span>
      <span className="ml-0.5 font-bold">
        {"("}
        {amount}
        {")"}
      </span>
    </Linha>
  );
};

type PropsList = DailySummaryItem & {
  icon: ReactNode;
};

const List = ({ icon, date, title, content, status, type }: PropsList) => {
  const typeDictionary = {
    task: "Tarefa",
    appointment: "Agenda",
    update: "Atualização",
  };

  return (
    <>
      <Linha className="mb-3 mt-3 justify-between">
        <Linha>
          <div className="flex h-6 w-20 justify-center rounded-sm border bg-aB9B9B9 align-middle">
            <span>{icon}</span>
            <span className="text-sm text-white">{typeDictionary[type]}</span>
          </div>
          <span className="ml-3 flex items-center align-middle text-xs font-light text-a3F4349">
            {date}
          </span>
          <span className="ml-3">{status}</span>
        </Linha>
        <Linha>
          <span>{icon} </span>
          <span> {icon}</span>
          <span> {icon}</span>
        </Linha>
      </Linha>
      <h2 className="text-sm font-bold text-a3F4349">{title}</h2>
      <span className="text-xs font-light text-a3F4349">{content}</span>
    </>
  );
};

type Props = {
  dailySummary: DailySummaryItem[];
};

export const SummaryDay = ({ dailySummary }: Props) => {
  return (
    <Coluna className=" ">
      <h1 className="flex justify-center text-lg font-bold text-a374151 font-inter">
        Resumo do seu dia
      </h1>
      <Linha className="ml-9 mt-9">
        <DatePicker id="data" name="Data" />
        <Select
          id="tipe"
          name="Tipo"
          options={[
            "Reuniões",
            "Atualização de processos",
            "Tarefas",
            "Ver todos",
          ]}
        />
        <Select
          id="status"
          name="Status"
          options={["Amanhã", "Atrasados", "Hoje"]}
        />
      </Linha>
      <Linha className="ml-9 mt-5">
        <NumberTasks
          title={"Tarefas"}
          amount={dailySummary.filter(({ type }) => type === "task").length}
        />
        <NumberTasks
          title={"Atualizações"}
          amount={dailySummary.filter(({ type }) => type === "update").length}
        />
        <NumberTasks
          title={"Agenda"}
          amount={
            dailySummary.filter(({ type }) => type === "appointment").length
          }
        />
      </Linha>

      <div className="font-interç ml-10 mt-2 rounded-sm border bg-white p-4 shadow-lg">
        {dailySummary.length === 0 ? (
          <EmptyList />
        ) : (
          dailySummary.map(({ content, date, status, title, type }) => (
            <List
              key={type + title}
              icon={undefined}
              date={new Date(date).toLocaleDateString()}
              title={title}
              content={content}
              status={status}
              type={type}
            />
          ))
        )}
      </div>
    </Coluna>
  );
};

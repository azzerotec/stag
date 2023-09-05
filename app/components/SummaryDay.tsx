import type { ReactNode } from "react";
import { CaixinhaData, CaixinhaStatus, CaixinhaType } from "./FilterMenu";
import { Coluna, Linha } from "./auxiliares";

type PropsTask = {
  title: string;
  amount: string;
};

const NumberTasks = ({ title, amount }: PropsTask) => {
  return (
    <Linha className="mr-2 font-roboto text-xs text-a374151">
      <span className="font-light">{title}</span>
      <span className="ml-0.5 font-bold">{amount}</span>
    </Linha>
  );
};

type PropsList = {
  icon: ReactNode;
  data: string;
  document: string;
  conteudo: string;
  status: string;
  type: string;
};

const List = ({ icon, data, document, conteudo, status, type }: PropsList) => {
  return (
    <>
      <Linha className="mb-3 mt-3 justify-between">
        <Linha>
          <div className="flex h-6 w-20 justify-center rounded-sm border bg-aB9B9B9 align-middle">
            <span>{icon}</span>
            <span className="text-sm text-white">{type}</span>
          </div>
          <span className="ml-3 flex items-center align-middle text-xs font-light text-a3F4349">
            {data}
          </span>
          <span className="ml-3">{status}</span>
        </Linha>
        <Linha>
          <span>{icon} </span>
          <span> {icon}</span>
          <span> {icon}</span>
        </Linha>
      </Linha>
      <h2 className="text-sm font-bold text-a3F4349">{document}</h2>
      <span className="text-xs font-light text-a3F4349">{conteudo}</span>
    </>
  );
};

export const SummaryDay = () => {
  return (
    <Coluna className=" ">
      <h1 className="flex justify-center text-lg font-bold text-a374151 font-inter">
        Resumo do seu dia
      </h1>
      <Linha className="ml-9 mt-9">
        <CaixinhaData />
        <CaixinhaType />
        <CaixinhaStatus />
      </Linha>
      <Linha className="ml-9 mt-5">
        <NumberTasks title={"Tarefas"} amount={"(3)"} />
        <NumberTasks title={"Atualizações"} amount={"(0)"} />
        <NumberTasks title={"Agenda"} amount={"(5)"} />
      </Linha>
      <div className="font-interç ml-10 mt-2 rounded-sm border bg-white p-4 shadow-lg">
        <Linha className="mb-3 justify-between">
          <Linha>
            <div className="flex h-6 w-20 justify-center rounded-sm border bg-aB9B9B9 align-middle">
              <span>icon</span>
              <span className="text-sm text-white">Tarefa</span>
            </div>
            <span className="ml-3 flex items-center align-middle text-xs font-light text-a3F4349">
              20/05/2023
            </span>
            <span className="ml-3">Status</span>
          </Linha>
          <Linha>
            <span>icon check</span>
            <span>clock icon</span>
            <span>pen icon</span>
          </Linha>
        </Linha>
        <h2 className="text-sm font-bold text-a3F4349">
          Enviar doc do Fulaninho
        </h2>
        <span className="text-xs font-light text-a3F4349">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <List
          icon={undefined}
          data={"20/05/2023"}
          document={"Enviar doc do Fulaninho"}
          conteudo={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          status={"Atrasado"}
          type={"Tarefa"}
        />
        <List
          icon={undefined}
          data={"20/05/2023"}
          document={"Enviar doc do Fulaninho"}
          conteudo={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          status={"Atrasado"}
          type={"Tarefa"}
        />
        <List
          icon={undefined}
          data={"20/05/2023"}
          document={"Enviar doc do Fulaninho"}
          conteudo={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          status={"Atrasado"}
          type={"Tarefa"}
        />
        <List
          icon={undefined}
          data={"20/05/2023"}
          document={"Enviar doc do Fulaninho"}
          conteudo={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          status={"Atrasado"}
          type={"Tarefa"}
        />
        <List
          icon={undefined}
          data={"20/05/2023"}
          document={"Enviar doc do Fulaninho"}
          conteudo={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          status={"Atrasado"}
          type={"Tarefa"}
        />
      </div>
    </Coluna>
  );
};

import { useState } from "react";
import { Coluna, Linha } from "./auxiliares";
import type { Update } from "~/routes/_sidebar._index";
import { EmptyList } from "./EmptyList";

type ProcessUpdateProps = {
  processNumber: string;
  clientName: string;
  date: string;
  content: string;
};

const ProcessUpdate = ({
  processNumber,
  clientName,
  date,
  content,
}: ProcessUpdateProps) => {
  return (
    <div className="my-3">
      <Linha className=" justify-between text-sm text-a374151 font-inter">
        <span>
          <b className="font-bold">{processNumber}</b> {clientName}
        </span>
        <div>
          <span>icon</span>
          <span className="text-sm font-light text-a6B7280">{date}</span>
        </div>
      </Linha>
      <span className=" mt-2 text-xs font-light leading-5 font-inter">
        {content}
      </span>
    </div>
  );
};

type CourtProps = {
  Imagem: string;
  city: string;
  updateCount: number;
  active: boolean;
  onClick: (name: string) => void;
};

const Court = ({ Imagem, city, updateCount, active, onClick }: CourtProps) => {
  return (
    <Coluna
      className={`h-36 w-28 items-center rounded-lg bg-aECECEC ${
        active ? "bg-gray-400" : ""
      }`}
      onClick={() => onClick(city)}
    >
      <span>{Imagem}</span>
      <h3>{city}</h3>
      <span className="mt-3 text-sm text-a6A6A6A font-inter">
        {updateCount} processos
      </span>
    </Coluna>
  );
};

type UpdatesSectionProps = {
  updates: Update[];
};

export const UpdatesSection = ({ updates }: UpdatesSectionProps) => {
  const defaultCourt = updates[0] ? updates[0].name : false;
  const [selectedCourt, setSelectedCourt] = useState(defaultCourt);

  const selectedCourtUpdates = updates.find(
    ({ name }) => name === selectedCourt
  );

  return (
    <>
      <Coluna className="p-8">
        <h2 className="font-roboto text-xl font-black leading-4 text-a374151">
          Atualização de processos ajuizados {"(Push)"}
        </h2>
        <span className="mt-3 font-roboto text-sm font-extralight leading-4">
          Lorem ipsum dolor sit amet consectetur.
        </span>

        {updates.length === 0 ? (
          <EmptyList />
        ) : (
          <Linha className="mt-2 w-96 justify-between">
            {updates.map(({ name, updates }) => (
              <Court
                key={name}
                active={name === selectedCourt}
                Imagem={"imagem"}
                city={name}
                updateCount={updates.length}
                onClick={(name) => setSelectedCourt(name)}
              />
            ))}
          </Linha>
        )}

        {selectedCourtUpdates && selectedCourtUpdates.updates.length > 0 ? (
          <div className=" mt-2 rounded-lg border-b-2 p-3 shadow-attjob">
            {selectedCourtUpdates.updates.map(
              ({ clientName, date, processNumber, content }) => (
                <ProcessUpdate
                  key={processNumber}
                  processNumber={processNumber}
                  clientName={clientName}
                  date={date}
                  content={content}
                />
              )
            )}
          </div>
        ) : null}
      </Coluna>
    </>
  );
};

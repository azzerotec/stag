import { useState } from "react";
import { Coluna } from "../layout/Flex";
import { EmptyList } from "../EmptyList";
import { Court } from "./CourtCard";
import { UpdateList } from "./UpdateList";
import type { CourtUpdates } from "~/models/update.server";

type UpdatesSectionProps = {
  updates: CourtUpdates[];
};

export const UpdatesSection = ({ updates }: UpdatesSectionProps) => {
  const defaultCourt = updates[0] ? updates[0].name : false;
  const [selectedCourt, setSelectedCourt] = useState(defaultCourt);

  const selectedCourtUpdates = updates.find(
    ({ name }) => name === selectedCourt
  );

  return (
    <>
      <Coluna className="my-6">
        <h2 className="font-roboto text-xl font-black leading-4 text-a374151">
          Atualização de processos ajuizados {"(Push)"}
        </h2>
        <span className="mt-3 font-roboto text-sm font-extralight leading-4">
          Lorem ipsum dolor sit amet consectetur.
        </span>

        {updates.length === 0 ? (
          <EmptyList />
        ) : (
          <div className="mt-2 flex w-full gap-3 overflow-auto p-2">
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
          </div>
        )}

        {selectedCourtUpdates && selectedCourtUpdates.updates.length > 0 ? (
          <UpdateList updateList={selectedCourtUpdates.updates} />
        ) : null}
      </Coluna>
    </>
  );
};

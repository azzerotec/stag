import { Linha } from "../layout/Flex";
import type { Update } from "~/models/update.server";

type ProcessUpdateProps = {
  processNumber: string;
  clientName: string;
  date: string;
  content: string;
};

const UpdateItem = ({
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

export const UpdateList = ({ updateList }: { updateList: Update[] }) => {
  return (
    <div className="mt-2 rounded-lg border-b-2 p-3 shadow-attjob">
      {updateList.map(({ clientName, date, processNumber, content }) => (
        <UpdateItem
          key={processNumber}
          processNumber={processNumber}
          clientName={clientName}
          date={date}
          content={content}
        />
      ))}
    </div>
  );
};

import { Coluna, Linha } from "./auxiliares";

type Props = {
  numberprocess: string;
  nameclient: string;
  data: string;
  content: string;
};

const ListProcessCity = ({
  numberprocess,
  nameclient,
  data,
  content,
}: Props) => {
  return (
    <div className="my-3">
      <Linha className=" justify-between text-sm text-a374151 font-inter">
        <span>
          <b className="font-bold">{numberprocess}</b> {nameclient}
        </span>
        <div>
          <span>icon</span>
          <span className="text-sm font-light text-a6B7280">{data}</span>
        </div>
      </Linha>
      <span className=" mt-2 text-xs font-light leading-5 font-inter">
        {content}
      </span>
    </div>
  );
};

type PropsCity = {
  Imagem: string;
  city: string;
  amountprocess: string;
};

const ListCity = ({ Imagem, city, amountprocess }: PropsCity) => {
  return (
    <Coluna className="h-36 w-28 items-center rounded-lg bg-aECECEC">
      <span>{Imagem}</span>
      <h3>{city}</h3>
      <span className="mt-3 text-sm text-a6A6A6A font-inter">
        {amountprocess}
      </span>
    </Coluna>
  );
};

export const ProcessUpdate = () => {
  return (
    <>
      <Coluna className="p-8">
        <h2 className="font-roboto text-xl font-black leading-4 text-a374151">
          Atualização de processos ajuizados {"(Push)"}
        </h2>
        <span className="mt-3 font-roboto text-sm font-extralight leading-4">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <Linha className="mt-2 w-96 justify-between">
          <ListCity
            Imagem={"imagem"}
            city={"TJRS"}
            amountprocess={"3 processos"}
          />
          <ListCity
            Imagem={"imagem"}
            city={"TJRS"}
            amountprocess={"3 processos"}
          />
          <ListCity
            Imagem={"imagem"}
            city={"TJRS"}
            amountprocess={"3 processos"}
          />
        </Linha>

        <div className=" mt-2 rounded-lg border-b-2 p-3 shadow-attjob">
          <ListProcessCity
            numberprocess={"3719283983798746 -"}
            nameclient={"José Arcos Macedo"}
            data={"23/05/2021"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet..."
            }
          />
          <ListProcessCity
            numberprocess={"3719283983798746 -"}
            nameclient={"José Arcos Macedo"}
            data={"23/05/2021"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet..."
            }
          />
          <ListProcessCity
            numberprocess={"3719283983798746 -"}
            nameclient={"José Arcos Macedo"}
            data={"23/05/2021"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet..."
            }
          />
        </div>
      </Coluna>
    </>
  );
};

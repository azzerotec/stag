type CourtProps = {
  Imagem?: string;
  city: string;
  updateCount: number;
  active: boolean;
  onClick: (name: string) => void;
};

export const Court = ({ city, updateCount, active, onClick }: CourtProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between rounded-lg bg-aECECEC p-3 ${
        active ? "bg-gray-400" : ""
      }`}
      onClick={() => onClick(city)}
    >
      <span className="h-12 w-12 bg-gray-300" />
      <div className="flex flex-col items-center">
        <h3>{city}</h3>
        <span className="mt-3 whitespace-nowrap text-sm text-a6A6A6A font-inter">
          {updateCount} processos
        </span>
      </div>
    </div>
  );
};

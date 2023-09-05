export const CaixinhaData = () => {
  return (
    <div>
      <select
        id="Data"
        name="Data"
        className="mt-2 block w-24 rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
        defaultValue="Data"
      >
        <option>Data</option>
      </select>
    </div>
  );
};

export const CaixinhaType = () => {
  return (
    <div className="ml-2">
      <select
        id="Tipo"
        name="Tipo"
        className="mt-2 block w-24 rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
        defaultValue="Ver todos"
      >
        <option>Reuniões</option>
        <option>Atualização de processos</option>
        <option>Tarefas</option>
        <option>Ver todos</option>
      </select>
    </div>
  );
};
export const CaixinhaStatus = () => {
  return (
    <div className="ml-2">
      <select
        id="Status"
        name="Status"
        className="mt-2 block w-24 rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
        defaultValue="Hoje"
      >
        <option>Amanhã</option>
        <option>Atrasados</option>
        <option>Hoje</option>
      </select>
    </div>
  );
};

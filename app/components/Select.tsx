type Props = {
  id: string;
  name: string;
  options: string[];
};

export const Select = ({ id, name, options }: Props) => {
  return (
    <div>
      <select
        id={id}
        name={name}
        className="m-2 rounded-md border-0 px-3 py-2 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
        defaultValue={options[0]}
      >
        {options.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

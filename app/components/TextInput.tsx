export const TextInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder?: string;
}) => {
  return (
    <div className="relative mt-4">
      <label
        htmlFor={label}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-medium text-a374151 font-inter"
      >
        {label}
      </label>
      <input
        type="text"
        name={label}
        id={label}
        className=" block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};

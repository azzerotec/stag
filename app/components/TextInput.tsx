import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

type Props = {
  label?: string;
  icon?: any;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, Props>(function Input(
  { label, icon: Icon, id, className, ...props }: Props,
  ref
) {
  return (
    <div className={"relative " + className}>
      {label ? (
        <label
          htmlFor={id}
          className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-a374151 font-inter"
        >
          {label}
        </label>
      ) : null}

      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {Icon ? (
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        ) : null}
      </div>

      <input
        ref={ref}
        id={id}
        type="text"
        {...props}
        className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
          Icon ? "pl-10" : ""
        }`}
      />
    </div>
  );
});

import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, Props>(function Input(
  { label, id, className, ...props }: Props,
  ref
) {
  return (
    <div className={"relative mt-4 " + className}>
      <label
        htmlFor={id}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-sm font-medium text-a374151 font-inter"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        type="text"
        {...props}
        className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
});

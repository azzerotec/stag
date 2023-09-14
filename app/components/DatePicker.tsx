import type { InputHTMLAttributes } from "react";

export const DatePicker = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type="date"
    className="m-2 rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 sm:text-sm sm:leading-6"
    {...props}
  />
);

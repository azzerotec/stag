import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <button
      className="mt-8 flex w-full justify-center rounded-md bg-a606875 py-2 font-medium text-white"
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
};

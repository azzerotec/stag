import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  disabled,
  ...props
}: PropsWithChildren<Props>) => {
  const disabledStyle = disabled ? "cursor-not-allowed opacity-50" : "";

  return (
    <button
      className={`mt-8 flex w-full justify-center rounded-md bg-a606875 py-2 font-medium text-white ${disabledStyle}`}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
};

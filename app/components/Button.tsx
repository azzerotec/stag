import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { className?: string };

const commonStyles =
  "flex w-full justify-center rounded-md bg-a606875 py-2 font-medium border border-gray-300";

export const Button = ({
  disabled,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  const disabledStyle = disabled ? "cursor-not-allowed opacity-50" : "";

  return (
    <button
      className={`${commonStyles} text-white ${disabledStyle} ${className}`}
      type="submit"
      {...props}
    />
  );
};

export const GhostButton = ({
  disabled,
  className,
  ...props
}: PropsWithChildren<Props>) => {
  const disabledStyle = disabled ? "cursor-not-allowed opacity-50" : "";

  return (
    <button
      className={`${commonStyles} bg-white text-gray-700 ${disabledStyle} ${className}`}
      type="button"
      {...props}
    />
  );
};

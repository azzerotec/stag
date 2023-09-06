import type { PropsWithChildren } from "react";

type ColunaPros = { className?: string; onClick?: () => void };

export const Linha = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-row ${className}`}>{children}</div>
);

export const Coluna = ({
  children,
  className = "",
  onClick,
}: PropsWithChildren<ColunaPros>) => (
  <div onClick={onClick} className={`flex flex-col ${className}`}>
    {children}
  </div>
);

type Props = {
  placeholder: string;
  className?: string;
};

export const TextInput = ({ placeholder, className }: Props) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`my-3 box-border rounded border border-gray-200 px-3 py-2 ${className}`}
  />
);

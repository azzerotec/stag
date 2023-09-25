import type { PropsWithChildren } from "react";

type Props = { className?: string; onClick?: () => void };

export const Linha = ({
  children,
  className = "",
  onClick,
}: PropsWithChildren<Props>) => (
  <div onClick={onClick} className={`flex flex-row ${className}`}>
    {children}
  </div>
);

export const Coluna = ({
  children,
  className = "",
  onClick,
}: PropsWithChildren<Props>) => (
  <div onClick={onClick} className={`flex flex-col ${className}`}>
    {children}
  </div>
);

type TextInputProps = {
  placeholder: string;
  className?: string;
};

export const TextInput = ({ placeholder, className }: TextInputProps) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`my-3 box-border rounded border border-gray-200 px-3 py-2 ${className}`}
  />
);

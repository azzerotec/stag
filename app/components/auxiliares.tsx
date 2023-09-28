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

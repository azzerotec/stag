import type { PropsWithChildren } from "react";

export const Linha = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-row ${className}`}>{children}</div>
);

export const Coluna = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-col ${className}`}>{children}</div>
);

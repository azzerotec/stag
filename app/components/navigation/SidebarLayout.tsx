import type { PropsWithChildren, ReactNode } from "react";

type Props = {
  sidebar: ReactNode;
};

export const SidebarLayout = ({
  sidebar,
  children,
}: PropsWithChildren<Props>) => (
  <div className="flex h-full flex-row">
    <div className="flex w-72 flex-col">{sidebar}</div>
    {children}
  </div>
);

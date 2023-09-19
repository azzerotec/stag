import type { PropsWithChildren, ReactNode } from "react";

type Props = {
  sidebar: ReactNode;
};

export const SidebarLayout = ({
  sidebar,
  children,
}: PropsWithChildren<Props>) => (
  <div className="flex h-full flex-row gap-1 overflow-x-hidden ">
    <div className="flex shrink-0 grow basis-72 flex-col">{sidebar}</div>
    <div className="flex" style={{ flexGrow: 999, minInlineSize: "50%" }}>
      {children}
    </div>
  </div>
);

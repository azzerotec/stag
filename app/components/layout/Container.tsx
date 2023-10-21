import type { PropsWithChildren } from "react";
import { Coluna } from "~/components/layout/Flex";

export const Container = ({ children }: PropsWithChildren) => (
  <Coluna className="px-4 py-10 sm:px-6 lg:px-8">{children}</Coluna>
);

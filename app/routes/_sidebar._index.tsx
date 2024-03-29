import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { UpdatesSection } from "~/components/dashboard/ProcessUpdate";
import { QuickActions } from "~/components/dashboard/QuickActions";
import { SummaryDay } from "~/components/dashboard/SummaryDay";
import { Coluna, Linha } from "~/components/layout/Flex";
import { getUpdatesByCourt } from "~/models/update.server";
import { getDailySummary } from "~/models/dailySummary";
import { Container } from "~/components/layout/Container";

export const loader = () => {
  const updates = getUpdatesByCourt();
  const dailySummary = getDailySummary();

  return json({
    updates,
    dailySummary,
  });
};

export default function Dashboard() {
  const { updates, dailySummary } = useLoaderData<typeof loader>();

  return (
    <Container>
      <Linha>
        <Coluna className="w-1/2">
          <QuickActions />
          <UpdatesSection updates={updates} />
        </Coluna>
        <Coluna className="w-1/2">
          <SummaryDay dailySummary={dailySummary} />
        </Coluna>
      </Linha>
    </Container>
  );
}

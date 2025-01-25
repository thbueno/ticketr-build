"use Client";

import { Id } from "@/convex/_generated/dataModel";

export default function ReleaseTicket({
  eventId,
  waitingListId,
}: {
  eventId: Id<"events">;
  waitingListId: Id<"waitingList">;
}) {
  return <div>ReleaseTicket</div>;
}

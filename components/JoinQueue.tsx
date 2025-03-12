"use client";
import { Id } from "@/convex/_generated/dataModel";
// import { toast } from "sonner"

function JoinQueue({
  eventId,
  userId,
}: {
  eventId: Id<"events">;
  userId: string;
}) {
  return <div>JoinQueue</div>;
}

export default JoinQueue;

"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useRouter } from "next/router";

function PurchaseTicket({ eventId }: { eventId: Id<"events"> }) {
  const router = useRouter();
  const { user } = useUser();
  const queuePosition = useQuery(api.waitingList.getQueuePosition, {
    eventId,
    userId: user?.id ?? "",
  });

  //   const [timeRemaining, setTimeRemaining] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);

  //   const offerExpiresAt = queuePosition?.offerExpiresAt ?? 0;
  //   const isExpired = Date.now() > offerExpiresAt;

  //   useEffect(() => {
  //     const calculateTimeRemaining = () => {
  //       if (isExpired) {
  //         setTimeRemaining("Expired");
  //         return;
  //       }

  return <div>PurchaseTicket</div>;
}

export default PurchaseTicket;

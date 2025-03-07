"use client";

import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";

export function EventPage() {
  const { user } = useUser();
  const params = useParams();
  return <div>page</div>;
}

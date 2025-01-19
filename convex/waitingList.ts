import { v } from "convex/values";
import { query } from "./_generated/server";
import { WAITING_LIST_STATUS } from "./constants";

/**
 * Query to get a user's current position in the waiting list for an event.
 * Returns null if user is not in queue, otherwise returns their entry with position.
 */
export const getQueuePosition = query({
  args: {
    eventId: v.id("events"),
    userId: v.string(),
  },
  handler: async (ctx, { eventId, userId }) => {
    // Get entry for this specific user and event combination
    const entry = await ctx.db
      .query("waitingList")
      .withIndex("by_user_event", (q) =>
        q.eq("userId", userId).eq("eventId", eventId)
      )
      .filter((q) => q.neq(q.field("status"), WAITING_LIST_STATUS.EXPIRED))
      .first();

    if (!entry) return null;
  },
});

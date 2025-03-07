"use client";

import Spinner from "@/components/Spinner";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useStorageUrl } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function EventPage() {
  const { user } = useUser();
  const params = useParams();

  const event = useQuery(api.events.getById, {
    eventId: params.id as Id<"events">,
  });
  const availability = useQuery(api.events.getEventAvailability, {
    eventId: params.id as Id<"events">,
  });

  const imageUrl = useStorageUrl(event?.imageStorageId);

  if (!event || !availability) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Single Event */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Event Image */}
          {imageUrl && (
            <div className="aspect-[21/9] relative w-full">
              <Image
                src={imageUrl}
                alt={event.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Event Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Event Details */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {event.name}
                  </h1>
                  <p className="text-lg text-gray-600">{event.description}</p>
                </div>
              </div>

              {/* Date grid */}

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-gray-600 mb-1">
                    <CalendarDays className="w-5 h-5 mr-2 text-blue-600" />
                    <span className="text-sm font-medium">Date</span>
                  </div>
                  <p className="text-gray-900">
                    {new Date(event.eventDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Location grid */}

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="flex items-center text-gray-600 mb-1">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-gray-900">{event.location}</p>
              </div>

              {/* ------------ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

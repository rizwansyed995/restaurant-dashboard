// components/cards/SingleOrderCard.tsx
"use client";

import React, { useCallback } from "react";
import { BrandColorIcon } from "@/components/icons/BrandColorIcon";
import { RiderIcon } from "@/components/icons/RiderIcon";
import { AcceptButton } from "@/components/buttons/AcceptButton";
import { RejectButton } from "@/components/buttons/RejectButton";
import { ViewDetailsButton } from "@/components/buttons/ViewDetailsButton";

export type SingleOrderCardProps = {
  orderId: string;
  timeAgo: string;
  items: string;
  brandColor?: string;   // small dot color
  acceptColor?: string;  // accept button background
  countdown?: string;
};

export default function SingleOrderCard({
  orderId,
  timeAgo,
  items,
  brandColor = "#ef4444",
  acceptColor = "#ef4444",
  countdown = "00:25",
}: SingleOrderCardProps) {
  // Client-side handlers — keep them inside the client component (do not pass from server)
  const handleAccept = useCallback(() => {
    alert(`Accepted ${orderId}`);
  }, [orderId]);

  const handleReject = useCallback(() => {
    if (confirm(`Reject ${orderId}?`)) {
      alert(`Rejected ${orderId}`);
    }
  }, [orderId]);

  const handleView = useCallback(() => {
    alert(`View details ${orderId}`);
  }, [orderId]);

  return (
    <article className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm p-4">
      {/* Top row: logo/dot + order id  --- time on right with rider icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <BrandColorIcon color={brandColor} size={18} />
          <div className="text-sm font-semibold text-black dark:text-white truncate">#{orderId}</div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 whitespace-nowrap">
          <RiderIcon size={14} />
          <span>{timeAgo}</span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-snug">
        <div className="truncate">{items}</div>
      </div>

      {/* Bottom button bar: three equal buttons. View Details (left), Reject (center), Accept (right) */}
      <div className="mt-4">
        <div className="grid grid-cols-3 gap-3">
          {/* View Details - left */}
          <ViewDetailsButton
            onClick={handleView}
            className="w-full h-12 flex items-center justify-center rounded-md"
          >
            <span className="text-sm font-medium">View Details</span>
          </ViewDetailsButton>

          {/* Reject - center */}
          <RejectButton
            onClick={handleReject}
            className="w-full h-12 flex items-center justify-center rounded-md"
          >
            <span className="text-sm font-medium">Reject</span>
          </RejectButton>

          {/* Accept - right; stacked label + small countdown under it */}
          <AcceptButton
            onClick={handleAccept}
            className="w-full h-14 flex flex-col items-center justify-center rounded-md"
          >
            <span className="text-sm font-semibold leading-none">Accept</span>
            <span className="text-[11px] opacity-90 mt-1">({countdown})</span>
          </AcceptButton>
        </div>
      </div>
    </article>
  );
}

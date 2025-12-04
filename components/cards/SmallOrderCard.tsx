"use client";

import { useCallback } from "react";
import { BrandColorIcon } from "../icons/BrandColorIcon";
import { RiderIcon } from "../icons/RiderIcon";
import { AcceptButton } from "../buttons/AcceptButton";
import { RejectButton } from "../buttons/RejectButton";
import { ViewDetailsButton } from "../buttons/ViewDetailsButton";

type SmallOrderCardProps = {
  orderId: string;
  timeAgo: string;
  items: string;
  brandColor?: string;
  countdown?: string;
};

export function SmallOrderCard({
  orderId,
  timeAgo,
  items,
  brandColor = "#e3342f",
  countdown = "00:26",
}: SmallOrderCardProps) {
  // Example client-side handlers. Replace alerts with fetch/API calls or navigation as needed.
  const handleAccept = useCallback(() => {
    // Example: call backend API (uncomment & adapt)
    // fetch(`/api/orders/${orderId}/accept`, { method: "POST" }).then(...)
    alert(`Order ${orderId} accepted`);
  }, [orderId]);

  const handleReject = useCallback(() => {
    // Example: open confirm, then call API
    const should = confirm(`Reject order ${orderId}?`);
    if (should) {
      // fetch(`/api/orders/${orderId}/reject`, { method: "POST" }).then(...)
      alert(`Order ${orderId} rejected`);
    }
  }, [orderId]);

  const handleViewDetails = useCallback(() => {
    // Example: navigate or open modal
    alert(`Viewing details for order ${orderId}`);
  }, [orderId]);

  return (
    <div className="w-full p-4 rounded-xl border bg-white shadow-sm flex flex-col gap-3">
      {/* TOP ROW */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BrandColorIcon color={brandColor} size={20} />
          <div className="font-semibold text-sm">#{orderId}</div>
        </div>

        <div className="flex items-center gap-1 text-xs text-gray-600">
          <RiderIcon />
          <span>{timeAgo}</span>
        </div>
      </div>

      {/* ITEMS */}
      <div className="text-xs text-gray-800 leading-tight">{items}</div>

      {/* BUTTONS */}
      <div className="flex gap-2 justify-end">
        <AcceptButton onClick={handleAccept}>Accept</AcceptButton>
        <RejectButton onClick={handleReject}>Reject</RejectButton>
        <ViewDetailsButton onClick={handleViewDetails}>View Details</ViewDetailsButton>
      </div>

      {/* COUNTDOWN */}
      <div className="text-right text-xs text-gray-500 mt-1">
        Accept ({countdown})
      </div>
    </div>
  );
}

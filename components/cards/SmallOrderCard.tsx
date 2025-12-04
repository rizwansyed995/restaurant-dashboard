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
  const handleAccept = useCallback(() => {
    alert(`Order ${orderId} accepted`);
  }, [orderId]);

  const handleReject = useCallback(() => {
    if (confirm(`Reject order ${orderId}?`)) {
      alert(`Order ${orderId} rejected`);
    }
  }, [orderId]);

  const handleViewDetails = useCallback(() => {
    alert(`Viewing details for ${orderId}`);
  }, [orderId]);

  return (
    <div className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm p-4">
      <div className="flex items-start gap-4">
        {/* Left: brand dot + id + items */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BrandColorIcon color={brandColor} size={18} />
              <div className="text-sm font-semibold text-black dark:text-white">#{orderId}</div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <RiderIcon />
              <span>{timeAgo}</span>
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 truncate">
            {items}
          </div>
        </div>

        {/* Right: buttons (stacked visually inline but aligned right) */}
        <div className="flex flex-col items-end justify-between gap-3 ml-4">
          <div className="flex flex-row gap-2">
            <AcceptButton onClick={handleAccept}>Accept</AcceptButton>
            <RejectButton onClick={handleReject}>Reject</RejectButton>
            <ViewDetailsButton onClick={handleViewDetails}>View Details</ViewDetailsButton>
          </div>

          <div className="text-right text-xs text-gray-500 mt-1">
            Accept ({countdown})
          </div>
        </div>
      </div>
    </div>
  );
}

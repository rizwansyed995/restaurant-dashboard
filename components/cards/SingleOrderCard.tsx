"use client";

import React, { useCallback } from "react";
import { AcceptButton } from "@/components/buttons/AcceptButton";
import { RejectButton } from "@/components/buttons/RejectButton";
import { ViewDetailsButton } from "@/components/buttons/ViewDetailsButton";
import { OrderAction } from "@/data/orderActions";
import { Order, OrderStatus } from "@/data/orders";
import { useDynamicTimeAgo } from "@/utils/useDynamicTimeAgo";
import { useCountdown } from "@/utils/useCountdown";
import { CheckCircle, XCircle } from "lucide-react";

export interface SingleOrderCardProps {
  order: Order;
  actions: OrderAction[];
}

export default function SingleOrderCard({ order, actions }: SingleOrderCardProps) {
  const {
    id,
    createdAt,
    items,
    platformLogo,
    otp,
    status,
    riderAssigned
  } = order;

  // LIVE time ago (freeze for completed)
  const timeAgo = useDynamicTimeAgo(createdAt, status === "COMPLETED");

  // Countdown only for NEW orders
  const countdown = useCountdown(120, status === "NEW");

  // Handlers
  const handleAccept = useCallback(() => alert(`Accepted ${id}`), [id]);
  const handleReject = useCallback(() => confirm(`Reject ${id}?`) && alert(`Rejected ${id}`), [id]);
  const handleCancel = useCallback(() => alert(`Canceled ${id}`), [id]);
  const handleReady = useCallback(() => alert(`Order ${id} marked READY`), [id]);
  const handleHandoff = useCallback(() => alert(`Order ${id} handed off`), [id]);
  const handleView = useCallback(() => alert(`View details for ${id}`), [id]);

  const statusColors = {
    NEW: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    ACCEPTED: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
    READY: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    COMPLETED: "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
    CANCELED: "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
  };
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder that exactly matches SSR text
    return (
      <article className="w-full max-w-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md p-5">
        {/* Skeleton or static layout without dynamic time */}
        <div className="flex justify-between items-center">
          <img src={platformLogo} className="w-12 h-12 rounded" />
          <div className="flex items-center gap-2">
            {riderAssigned ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
            <img src={platformLogo} className="w-5 h-5 opacity-80" />
            <span className="text-xs text-gray-400">...</span>
          </div>
        </div>
      </article>
    );
  }

  const renderButtons = () => {
    return actions.map((act) => {
      switch (act) {

        case "VIEW_DETAILS":
          return <ViewDetailsButton  key="view">View</ViewDetailsButton>;

        case "REJECT":
          return <RejectButton key="reject" onClick={handleReject}>Reject</RejectButton>;

        case "ACCEPT":
          return (
            <AcceptButton
              key="accept"
              onClick={handleAccept}
              className="flex flex-col items-center"
            >
              <span className="text-sm font-semibold">Accept</span>

              {status === "NEW" && (
                <span className="text-[10px] opacity-80">
                  ({countdown.formatted})
                </span>
              )}

            </AcceptButton>
          );

        case "CANCEL":
          return (
            <RejectButton
              key="cancel"
              onClick={handleCancel}
              className="bg-yellow-100 dark:bg-yellow-800/30"
            >
              Cancel
            </RejectButton>
          );

        case "MARK_READY":
          return (
            <AcceptButton key="ready" onClick={handleReady} className="bg-blue-600 text-white">
              Ready
            </AcceptButton>
          );

        case "HANDED_OFF":
          return (
            <AcceptButton key="handoff" onClick={handleHandoff} className="bg-green-600 text-white text-[12px]">
              Handed Off
            </AcceptButton>
          );

        default:
          return null;
      }
    });
  };

  return (
    <article className="w-full max-w-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md p-5 flex flex-col justify-between min-h-[260px]">


      {/* TOP ROW */}
      <div className="flex justify-between items-center">

        {/* Large Brand Logo */}
        <img
          src={platformLogo}
          alt="brand"
          className="w-12 h-12 object-contain rounded"
        />
        <div>
          Order id: {id}
        </div>


        <div className="flex items-center gap-2">

          {/* Rider Assigned Status */}
          {riderAssigned ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500" />
          )}


          {mounted ? (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {timeAgo}
            </span>
          ) : (
            <span className="text-xs text-gray-400">...</span> // SSR-safe placeholder
          )}

        </div>
      </div>

      {/* Status Pill */}
      {/* Status + Table Number (Only for Inhouse) */}
      <div className="flex items-center justify-between gap-2 mt-3">

        {/* STATUS PILL */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}
        >
          {status}
        </span>

        {/* TABLE NUMBER PILL (INHOUSE ONLY) */}
        {order.platform === "inhouse" && order.tableNumber && (
          <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
            Table {order.tableNumber}
          </span>
        )}
      </div>


      {/* Items */}
      <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 truncate">
        {items.join(", ")}
      </p>


      {/* OTP — Disabled for Inhouse */}
      {order.platform !== "inhouse" && (
        (status === "COMPLETED" || status === "CANCELED") ? (
          <div className="mt-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold w-fit">
            OTP: ----
          </div>
        ) : (
          <div className="mt-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold w-fit">
            OTP: {otp}
          </div>
        )
      )}



      {/* BUTTONS */}
      <div
        className="grid gap-3 mt-4"
        style={{ gridTemplateColumns: `repeat(${actions.length}, 1fr)` }}
      >
        {renderButtons()}
      </div>

    </article>
  );
}

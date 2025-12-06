"use client";

import React, { useCallback } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";
import { OrderAction } from "@/data/orderActions";
import { Order } from "@/data/orders";
import { useDynamicTimeAgo } from "@/utils/useDynamicTimeAgo";
import { useCountdown } from "@/utils/useCountdown";
import { CheckCircle, XCircle } from "lucide-react";
import ViewDetails from "@/components/orders/OrderDetails/ViewDetails";
import ViewDetailsContent from "../orders/OrderDetails/ViewDetailsContent";
import FancyOrderDetails from "../orders/OrderDetails/FancyOrderDetails";

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

  // Time & countdown
  const timeAgo = useDynamicTimeAgo(createdAt, status === "COMPLETED");
  const countdown = useCountdown(120, status === "NEW");

  // Action handlers
  const handleAccept = useCallback(() => alert(`Accepted ${id}`), [id]);
  const handleReject = useCallback(() => alert(`Rejected ${id}`), [id]);
  const handleCancel = useCallback(() => alert(`Canceled ${id}`), [id]);
  const handleReady = useCallback(() => alert(`Ready: ${id}`), [id]);
  const handleHandoff = useCallback(() => alert(`Handed Off ${id}`), [id]);
  const handleView = () => setShowDetails(true);

  const [showDetails, setShowDetails] = React.useState(false);

  const statusColors = {
    NEW: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",

    ACCEPTED: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",

    READY: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",

    COMPLETED: "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300",

    CANCELED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
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
    return actions.map((action) => {
      switch (action) {
        case "VIEW_DETAILS":
          return (
            <UniversalButton
              key="view"
              label="View"
              variant="neutral"
              onClick={handleView}
            />
          );

        case "REJECT":
          return (
            <UniversalButton
              key="reject"
              label="Reject"
              variant="reject"
              onClick={handleReject}
            />
          );

        case "ACCEPT":
          return (
            <UniversalButton
              key="accept"
              label={`Accept ${status === "NEW" ? `(${countdown.formatted})` : ""}`}
              variant="accept"
              onClick={handleAccept}
            />
          );

        case "CANCEL":
          return (
            <UniversalButton
              key="cancel"
              label="Cancel"
              variant="warning"
              onClick={handleCancel}
            />
          );

        case "MARK_READY":
          return (
            <UniversalButton
              key="ready"
              label="Ready"
              variant="primary"
              onClick={handleReady}
            />
          );

        case "HANDED_OFF":
          return (
            <UniversalButton
              key="handoff"
              label="Handed Off"
              variant="success"
              onClick={handleHandoff}
              className="text-[12px]"
            />
          );

        default:
          return null;
      }
    });
  };

  return (
    <><ViewDetails open={showDetails} onClose={() => setShowDetails(false)}>
      <FancyOrderDetails
        order={order}
        timeAgo={timeAgo}
        
      />
    </ViewDetails>

      <article className="w-full max-w-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md p-5 flex flex-col justify-between min-h-[260px]">

        {/* TOP ROW */}
        <div className="flex justify-between items-center">
          <img src={platformLogo} className="w-12 h-12 rounded" />

          <div className="text-sm font-medium">Order ID: {id}</div>

          <div className="flex items-center gap-2">
            {riderAssigned ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {timeAgo}
            </span>
          </div>
        </div>

        {/* STATUS */}
        <div className="flex items-center justify-between mt-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}
          >
            {status}
          </span>

          {order.platform === "inhouse" && order.tableNumber && (
            <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold">
              Table {order.tableNumber}
            </span>
          )}
        </div>

        {/* ITEMS */}
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 truncate">
          {items.join(", ")}
        </p>

        {/* OTP (Hidden for in-house) */}
        {order.platform !== "inhouse" && (
          <div className="mt-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-semibold w-fit">
            OTP: {status === "COMPLETED" || status === "CANCELED" ? "----" : otp}
          </div>
        )}

        {/* ACTION BUTTONS */}
        <div
          className="grid gap-3 mt-4"
          style={{ gridTemplateColumns: `repeat(${actions.length}, 1fr)` }}
        >
          {renderButtons()}
        </div>

      </article></>

  );
}

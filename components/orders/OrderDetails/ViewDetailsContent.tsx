"use client";

import React from "react";
import { Order } from "@/data/orders";

interface OrderDetailsContentProps {
  order: Order;
  timeAgo: string;
  statusColors: Record<string, string>;
}

export default function ViewDetailsContent({
  order,
  timeAgo,
  statusColors,
}: OrderDetailsContentProps) {
  const { id, platformLogo, items, status, otp } = order;

  return (
    <div className="space-y-4">

      {/* Order Header */}
      <h2 className="text-xl font-bold">Order ID: {id}</h2>

      <div className="flex items-center gap-2">
        <img src={platformLogo} className="w-10 h-10 rounded" />
        <span className="text-sm text-neutral-600 dark:text-neutral-300">
          {timeAgo}
        </span>
      </div>

      {/* Items */}
      <div>
        <h3 className="font-semibold">Items</h3>
        <ul className="list-disc ml-5 text-sm">
          {items.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </div>

      {/* Status */}
      <div className="font-medium text-sm">
        Status:
        <span className={`ml-2 px-2 py-1 rounded-full text-xs ${statusColors[status]}`}>
          {status}
        </span>
      </div>

      {/* OTP (Delivery Only) */}
      {order.platform !== "inhouse" && (
        <div className="text-sm">
          OTP:
          <span className="ml-2 px-2 py-1 rounded-md bg-blue-200 dark:bg-blue-900/40">
            {status === "COMPLETED" || status === "CANCELED" ? "----" : otp}
          </span>
        </div>
      )}

    </div>
  );
}

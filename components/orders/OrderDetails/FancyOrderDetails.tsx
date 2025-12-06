"use client";

import { CheckCircle, Timer, XCircle, Circle } from "lucide-react";
import React, { useMemo } from "react";
import { Order } from "@/data/orders";
import { motion } from "framer-motion";

interface FancyOrderDetailsProps {
  order: Order;
  timeAgo: string;
}

export default function FancyOrderDetails({ order, timeAgo }: FancyOrderDetailsProps) {
  // Timeline rules (inhouse uses SERVED instead of COMPLETED)
  const timeline =
    order.platform === "inhouse"
      ? [
          { key: "NEW", label: "NEW" },
          { key: "ACCEPTED", label: "PROCESSING" },
          { key: "READY", label: "READY" },
          { key: "DISPATCHED", label: "SERVED" },
        ]
      : [
          { key: "NEW", label: "NEW" },
          { key: "ACCEPTED", label: "PROCESSING" },
          { key: "READY", label: "READY" },
          { key: "DISPATCHED", label: "DISPATCHED" },
          { key: "COMPLETED", label: "COMPLETED" },
        ];

  // We treat the CURRENT phase as "completed"
  const rawIndex = timeline.findIndex((s) => s.key === order.status);
  const currentIndex = Math.max(0, rawIndex);

  // The next phase gets the timer
  const timerIndex = Math.min(currentIndex + 1, timeline.length - 1);

  const getIcon = (idx: number) => {
    if (order.status === "CANCELED")
      return <XCircle className="w-5 h-5 text-red-500" />;

    // Completed steps
    if (idx <= currentIndex && idx !== timerIndex)
      return <CheckCircle className="w-5 h-5 text-green-500" />;

    // Next step gets timer
    if (idx === timerIndex && timerIndex !== currentIndex)
      return <Timer className="w-5 h-5 text-blue-500 animate-pulse" />;

    // Future steps
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  // Progress only counts completed steps (not timer)
  const progressPercent = useMemo(() => {
    const steps = timeline.length;
    if (steps <= 1) return 100;

    const frac = currentIndex / (steps - 1);
    return Math.round(frac * 100);
  }, [timeline.length, currentIndex]);

  // Canceled View
  if (order.status === "CANCELED") {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <XCircle className="w-14 h-14 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
          Order Canceled
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
          This order has been canceled and will not progress further.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-2 md:p-1">

      {/* LEFT SIDE */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <img src={order.platformLogo} className="w-12 h-12 rounded-md object-cover" />
          <div>
            <h2 className="text-lg md:text-xl font-bold">Order ID: {order.id}</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{timeAgo}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Items</h3>
          <ul className="ml-5 text-sm list-disc space-y-1">
            {order.items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>

        {order.platform !== "inhouse" && (
          <div>
            <h3 className="font-semibold">OTP</h3>
            <span className="inline-block mt-1 px-3 py-1 rounded-md bg-blue-200 dark:bg-blue-900/40 text-sm font-semibold">
              {order.status === "COMPLETED" ? "----" : order.otp}
            </span>
          </div>
        )}

        <div>
          <h3 className="font-semibold">Rider Information</h3>
          <div className="flex items-center gap-2 mt-1">
            {order.riderAssigned ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-green-600 dark:text-green-400">
                  Rider Assigned
                </span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-sm text-red-600 dark:text-red-400">
                  Rider Not Assigned
                </span>
              </>
            )}
          </div>

          <p className="text-sm mt-2 text-blue-600 dark:text-blue-400 font-semibold">
            ETA:
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - Timeline */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Order Progress</h3>

        <div className="relative pl-2">

          {/* Base line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-neutral-300 dark:bg-neutral-700 rounded" />

          {/* Animated progress line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute left-4 top-0 w-[2px] bg-blue-500 rounded"
            style={{ transformOrigin: "top" }}
          />

          <div className="flex flex-col gap-6 pl-10">
            {timeline.map((step, idx) => (
              <motion.div
                key={step.key}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.28 }}
              >
                <div className="w-8 flex items-center justify-center -ml-6 z-10">
                  {getIcon(idx)}
                </div>

                <span
                  className={`text-sm ${
                    idx <= currentIndex
                      ? "text-green-600 dark:text-green-400 font-medium"
                      : idx === timerIndex
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-neutral-500 dark:text-neutral-400"
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

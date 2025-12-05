"use client";

import React, { useState } from "react";
import { BrandColorIcon } from "@/components/icons/BrandColorIcon";
import { orders } from "@/data/orders";
import { useDynamicTimeAgo } from "@/utils/useDynamicTimeAgo";
import { useCountdown } from "@/utils/useCountdown";

function OrderItem({ order }: { order: (typeof orders)[0] }) {
  const timeAgo = useDynamicTimeAgo(order.createdAt);
  const countdown = useCountdown(120, true);
  const [expanded, setExpanded] = useState(false);

  const getBrandColor = (platform: string) => {
    switch (platform) {
      case "zomato": return "#ef4444";
      case "swiggy": return "#f97316";
      case "inhouse": return "#000000";
      default: return "#ef4444";
    }
  };

  const getBtnColor = (platform: string) => {
     switch (platform) {
      case "zomato": return "bg-red-500";
      case "swiggy": return "bg-orange-500";
      case "inhouse": return "bg-black"; 
      default: return "bg-blue-600";
    }
  }

  return (
    <div className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm p-4 mb-3">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <BrandColorIcon color={getBrandColor(order.platform)} size={20} />
          <span className="font-bold text-base text-black dark:text-white">#{order.id}</span>
        </div>
        <span 
          className="text-xs text-gray-500 dark:text-gray-400 font-medium"
          suppressHydrationWarning
        >
          {timeAgo}
        </span>
      </div>

      <div className="flex gap-3 justify-between items-start">
        <div className="flex-1 min-w-0">
            <p className={`text-xs text-gray-600 dark:text-gray-300 leading-relaxed ${expanded ? '' : 'line-clamp-2'}`}>
            {order.items.join(", ")}
            </p>
            {order.items.length > 1 && (
                <button 
                    onClick={() => setExpanded(!expanded)}
                    className="text-[10px] text-blue-500 font-medium mt-1 hover:underline focus:outline-none"
                >
                    {expanded ? "View Less" : "View More"}
                </button>
            )}
        </div>

        <button className={`${getBtnColor(order.platform)} text-white px-3 py-1.5 rounded-lg flex flex-col items-center justify-center min-w-[70px] flex-shrink-0 shadow-sm active:scale-95 transition-transform`}>
          <span className="text-[10px] font-semibold">Accept</span>
          <span className="text-[9px] opacity-90" suppressHydrationWarning>({countdown.formatted})</span>
        </button>
      </div>
    </div>
  );
}

export default function NewOrdersColumn() {
  const newOrders = orders.filter((o) => o.status === "NEW");

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900/50 rounded-t-xl">
        <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">New Orders</h2>
        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {newOrders.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
        {newOrders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
        {newOrders.length === 0 && (
           <p className="text-center text-gray-400 text-xs mt-4">No new orders</p>
        )}
      </div>
    </div>
  );
}
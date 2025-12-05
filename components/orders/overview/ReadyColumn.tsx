"use client";

import React, { useCallback, useState } from "react";
import { BrandColorIcon } from "@/components/icons/BrandColorIcon";
import { orders } from "@/data/orders";
import { useDynamicTimeAgo } from "@/utils/useDynamicTimeAgo";

function ReadyItem({ order }: { order: (typeof orders)[0] }) {
  const timeAgo = useDynamicTimeAgo(order.createdAt);
  const [expanded, setExpanded] = useState(false);

  const getBrandColor = (platform: string) => {
    switch (platform) {
      case "zomato": return "#ef4444";
      case "swiggy": return "#f97316";
      case "inhouse": return "#000000";
      default: return "#ef4444";
    }
  };

  const handleHandOff = useCallback(() => {
    alert(`Order #${order.id} Handed Off -> Moving to Completed`);
  }, [order.id]);

  return (
    <div className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-sm p-4 mb-3">
      <div className="flex justify-between items-center mb-2">
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

      <div className="flex justify-between gap-3 mb-2 items-start">
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
        
        <div className="flex flex-col gap-2 items-end flex-shrink-0">
            <div className="bg-green-600 text-white px-2 py-1 rounded-md flex flex-col items-center justify-center min-w-[70px] shadow-sm cursor-default">
                <span className="text-[9px] font-semibold">Ready</span>
                <span className="text-[8px] opacity-90">(05:00)</span>
            </div>

            <button 
                onClick={handleHandOff}
                className="w-full bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white px-2 py-1 rounded-md text-[9px] font-semibold shadow-sm transition-colors active:scale-95"
            >
                Hand Off
            </button>
        </div>
      </div>

      <div className="flex justify-start items-center border-t border-gray-100 dark:border-neutral-700 pt-2 mt-1">
        <span className="text-[9px] text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
            Rider at restaurant
        </span>
      </div>
    </div>
  );
}

export default function ReadyColumn() {
  const readyOrders = orders.filter((o) => o.status === "READY");

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900/50 rounded-t-xl">
        <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Ready</h2>
        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
          {readyOrders.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
        {readyOrders.map((order) => (
          <ReadyItem key={order.id} order={order} />
        ))}
         {readyOrders.length === 0 && (
            <div className="text-center text-gray-400 text-xs mt-4">No ready orders</div>
        )}
      </div>
    </div>
  );
}
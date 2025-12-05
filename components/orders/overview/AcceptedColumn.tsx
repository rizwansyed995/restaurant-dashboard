"use client";

import React, { useCallback, useState } from "react";
import { BrandColorIcon } from "@/components/icons/BrandColorIcon";
import { orders } from "@/data/orders";
import { useDynamicTimeAgo } from "@/utils/useDynamicTimeAgo";

function AcceptedItem({ order }: { order: (typeof orders)[0] }) {
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

  const handlePrepared = useCallback(() => {
    alert(`Order #${order.id} marked as Prepared -> Moving to Ready`);
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
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-md flex flex-col items-center justify-center min-w-[70px] shadow-sm cursor-default">
                <span className="text-[9px] font-semibold">Processing</span>
                <span className="text-[8px] opacity-90">(04:55)</span>
            </div>
            
            <button 
                onClick={handlePrepared}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md text-[9px] font-semibold shadow-sm transition-colors active:scale-95"
            >
                Prepared
            </button>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-100 dark:border-neutral-700 pt-2 mt-1">
        {/* OTP Section */}
        {order.otp ? (
          <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded">
            OTP: {order.otp}
          </span>
        ) : (
            <span /> 
        )}

        {/* Rider Status */}
        {order.riderAssigned ? (
             <span className="text-[9px] text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                Rider arriving in 5 mins
             </span>
        ) : (
            <button className="text-blue-500 text-[9px] font-semibold hover:underline">
                Assign Rider &gt;
            </button>
        )}
      </div>
    </div>
  );
}

export default function AcceptedColumn() {
  const acceptedOrders = orders.filter((o) => o.status === "ACCEPTED");

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">
      <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900/50 rounded-t-xl">
        <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Accepted</h2>
        <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
          {acceptedOrders.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
        {acceptedOrders.map((order) => (
          <AcceptedItem key={order.id} order={order} />
        ))}
         {acceptedOrders.length === 0 && (
            <div className="text-center text-gray-400 text-xs mt-4">No orders cooking</div>
        )}
      </div>
    </div>
  );
}
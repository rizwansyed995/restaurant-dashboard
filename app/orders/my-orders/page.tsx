"use client";

import React from "react";
import { orders } from "@/data/orders";
import { getActions } from "@/data/orderActions";
import SingleOrderCard from "@/components/cards/SingleOrderCard";

export default function MyOrdersPage() {
  // Filter orders for the 3 columns
  const newOrders = orders.filter((o) => o.status === "NEW");
  const processingOrders = orders.filter((o) => o.status === "ACCEPTED");
  const readyOrders = orders.filter((o) => o.status === "READY");

  return (
    <div className="p-4 h-full overflow-hidden flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Overview
        </h1>
      </div>

      {/* 3 Column Grid - expands to fill height */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full min-h-0">
        
        {/* 1. NEW ORDERS */}
        <div className="flex flex-col h-full bg-slate-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900 rounded-t-xl">
            <h2 className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
              New Orders
            </h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {newOrders.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
            {newOrders.map((order) => (
              <SingleOrderCard 
                key={order.id} 
                order={order} 
                actions={getActions(order.status)} 
              />
            ))}
            {newOrders.length === 0 && (
              <div className="text-center text-gray-400 text-sm mt-10">No new orders</div>
            )}
          </div>
        </div>

        {/* 2. PROCESSING (ACCEPTED) */}
        <div className="flex flex-col h-full bg-slate-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900 rounded-t-xl">
            <h2 className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
              Processing
            </h2>
            <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
              {processingOrders.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
            {processingOrders.map((order) => (
              <SingleOrderCard 
                key={order.id} 
                order={order} 
                actions={getActions(order.status)} 
              />
            ))}
            {processingOrders.length === 0 && (
              <div className="text-center text-gray-400 text-sm mt-10">No orders in kitchen</div>
            )}
          </div>
        </div>

        {/* 3. READY */}
        <div className="flex flex-col h-full bg-slate-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900 rounded-t-xl">
            <h2 className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
              Ready
            </h2>
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              {readyOrders.length}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
            {readyOrders.map((order) => (
              <SingleOrderCard 
                key={order.id} 
                order={order} 
                actions={getActions(order.status)} 
              />
            ))}
            {readyOrders.length === 0 && (
              <div className="text-center text-gray-400 text-sm mt-10">No orders ready</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
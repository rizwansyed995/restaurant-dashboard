"use client";

import React from "react";
import { orders, Order } from "@/data/orders";
import SingleOrderCard from "@/components/cards/SingleOrderCard";
import { getActions } from "@/data/orderActions";
import { useFilteredOrders } from "@/hooks/useFilteredOrders";

export default function ReadyColumn() {
  const { filteredOrders } = useFilteredOrders(orders);

  const readyOrders = filteredOrders.filter((o: Order) => o.status === "READY");

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">

      {/* HEADER */}
      <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900/50 rounded-t-xl">
        <h2 className="text-xs font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wide">
          Ready
        </h2>
        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-200">
          {readyOrders.length}
        </span>
      </div>

      {/* LIST */}
      <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
        {readyOrders.map((order) => (
          <div key={order.id} className="mb-3">
            <SingleOrderCard order={order} actions={getActions(order.status)} />
          </div>
        ))}

        {readyOrders.length === 0 && (
          <div className="text-center text-gray-400 text-xs mt-4">
            No ready orders
          </div>
        )}
      </div>
    </div>
  );
}

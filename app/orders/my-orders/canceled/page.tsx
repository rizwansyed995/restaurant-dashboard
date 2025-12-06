"use client";

import DeliveryLayout from "@/components/orders/OrdersSidebar/DeliveryLayout";
import { orders, Order } from "@/data/orders";
import { getActions } from "@/data/orderActions";
import { useFilteredOrders } from "@/hooks/useFilteredOrders";
import SingleOrderCard from "@/components/cards/SingleOrderCard";

export default function CanceledOrdersPage() {
  const { filteredOrders } = useFilteredOrders(orders);

  const canceledOrders = filteredOrders.filter(
    (o: Order) => o.status === "CANCELED"
  );

  return (
    <div className="flex flex-col bg-slate-50 dark:bg-neutral-900/50 rounded-xl m-5 dark:border-neutral-800">

      {/* HEADER */}
      <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 
          flex items-center gap-2 bg-white dark:bg-neutral-900/50 rounded-t-xl">
        <h1 className="text-lg font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wide">
          Canceled Orders
        </h1>
        <span className="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full 
            dark:bg-red-900 dark:text-red-200">
          {canceledOrders.length}
        </span>
      </div>

      {/* GRID */}
      <div className="w-full p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {canceledOrders.map((order) => (
            <SingleOrderCard
              key={order.id}
              order={order}
              actions={getActions(order.status)}
            />
          ))}

          {canceledOrders.length === 0 && (
            <p className="text-center text-gray-400 text-sm col-span-full">
              No canceled orders
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

'use client'
import NewOrdersColumn from "@/components/orders/overview/NewOrdersColumn";
import { orders, Order } from "@/data/orders";
import { getActions } from "@/data/orderActions";
import { useFilteredOrders } from "@/hooks/useFilteredOrders";
import SingleOrderCard from "@/components/cards/SingleOrderCard";

export default function NewOrdersPage() {
  const { filteredOrders } = useFilteredOrders(orders);

  const newOrders = filteredOrders.filter((o: Order) => o.status === "NEW");
  return (
    <div className="flex flex-col bg-slate-50 dark:bg-neutral-900/50 rounded-xl  dark:border-neutral-800 m-5">

      {/* HEADER */}
      <div className="p-3 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-2 bg-white dark:bg-neutral-900/50 rounded-t-xl">
        <h1 className="text-lg font-bold text-gray-500 dark:text-gray-200 uppercase tracking-wide">
          New Orders
        </h1>
        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200">
          {newOrders.length}
        </span>
      </div>

      <div className="w-full">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newOrders.map((order) => (
            <SingleOrderCard
              key={order.id}
              order={order}
              actions={getActions(order.status)}
            />
          ))}

          {newOrders.length === 0 && (
            <p className="text-center text-gray-400 text-sm col-span-full">
              No new orders
            </p>
          )}
        </div>
      </div>  
    </div>
  );
}

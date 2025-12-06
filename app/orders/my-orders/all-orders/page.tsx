"use client";

import { orders } from "@/data/orders";
import { getActions } from "@/data/orderActions";
import SingleOrderCard from "@/components/cards/SingleOrderCard";
import { useFilteredOrders } from "@/hooks/useFilteredOrders";
import { Order } from "@/data/orders";

export default function AllOrdersPage() {
  const { filteredOrders } = useFilteredOrders(orders);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
        Order Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOrders.map((order: Order) => (
          <SingleOrderCard
            key={order.id}
            order={order}                             // ✅ pass full order object
            actions={getActions(order.status)}        // ✅ pass actions array
          />
        ))}

        {filteredOrders.length === 0 && (
          <p className="text-zinc-500 col-span-full text-center">
            No matching orders found.
          </p>
        )}
      </div>
    </div>
  );
}

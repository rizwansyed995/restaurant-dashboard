"use client";

import { useOrdersUI } from "@/context/orders-ui-context";
import { orders } from "@/data/orders";
import { getActions } from "@/data/orderActions";
import SingleOrderCard from "@/components/cards/SingleOrderCard";
import { SmallOrderCard } from "@/components/cards/SmallOrderCard";

export default function AllOrdersPage() {
  const { activeTab, searchQuery } = useOrdersUI();

  // 1. Filter by tab
  const filteredByTab = orders.filter((o) => {
    if (activeTab === "delivery") {
      return o.platform !== "inhouse"; // Zomato + Swiggy
    }
    return o.platform === "inhouse"; // In-store dining
  });

  // 2. Apply search filter
  const filteredOrders = filteredByTab.filter((o) => {
    const text = [
      o.id,
      o.items.join(" "),
      o.platform,
    ].join(" ").toLowerCase();

    return text.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
        Order Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredOrders.map((order) => (
          <SingleOrderCard
            key={order.id}
            order={order}
            actions={getActions(order.status)}
          />
          
        ))}
      </div>
    </div>
  );
}

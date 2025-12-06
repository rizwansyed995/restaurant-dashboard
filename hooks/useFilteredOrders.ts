"use client";

import { useOrdersUI } from "@/context/orders-ui-context";
import { Order } from "@/data/orders";

export function useFilteredOrders(allOrders: Order[]) {
    const { activeTab, searchQuery } = useOrdersUI();

    const query = searchQuery.trim().toLowerCase();

    // 1. FILTER BY ORDER TYPE
    const filteredByTab = allOrders.filter((order) => {
        const platform = order.platform?.toLowerCase();

        if (activeTab === "delivery") {
            return platform === "zomato" || platform === "swiggy";
        }

        if (activeTab === "in-store") {
            return platform !== "zomato" && platform !== "swiggy";
        }

        return true;
    });

    // 2. SEARCH FILTER
    const finalFiltered = filteredByTab.filter((order) => {
        if (!query) return true;

        const q = query.toLowerCase();

        // Check Order ID
        const idMatch = order.id.toLowerCase().startsWith(q);

        // Check Table Number (in-house only)
        const tableMatch =
            order.tableNumber &&
            order.tableNumber.toLowerCase().includes(q);

        // Check Platform (zomato / swiggy / inhouse)
        const platformMatch = order.platform.toLowerCase().includes(q);


        return idMatch || tableMatch || platformMatch;
    });

    return { filteredOrders: finalFiltered };

}

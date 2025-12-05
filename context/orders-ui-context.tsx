"use client";

import React, { createContext, useContext, useState } from "react";

type OrdersTab = "delivery" | "in-store";

interface OrdersUIState {
  searchQuery: string;
  setSearchQuery: (v: string) => void;

  activeTab: OrdersTab;
  setActiveTab: (t: OrdersTab) => void;
}

const OrdersUIContext = createContext<OrdersUIState | null>(null);

export function OrdersUIProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<OrdersTab>("delivery");

  return (
    <OrdersUIContext.Provider
      value={{
        searchQuery,
        setSearchQuery,

        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </OrdersUIContext.Provider>
  );
}

export function useOrdersUI() {
  const ctx = useContext(OrdersUIContext);
  if (!ctx) throw new Error("useOrdersUI must be inside OrdersUIProvider");
  return ctx;
}

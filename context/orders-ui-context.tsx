"use client";

import { createContext, useContext, useState } from "react";

type OrdersTab = "delivery" | "in-store";

interface OrdersUIContextType {
  activeTab: OrdersTab;
  setActiveTab: (t: OrdersTab) => void;

  searchQuery: string;
  setSearchQuery: (s: string) => void;
}

const OrdersUIContext = createContext<OrdersUIContextType | undefined>(undefined);

export function OrdersUIProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<OrdersTab>("delivery");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <OrdersUIContext.Provider
      value={{
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </OrdersUIContext.Provider>
  );
}

export function useOrdersUI() {
  const ctx = useContext(OrdersUIContext);
  if (!ctx) throw new Error("useOrdersUI must be used within OrdersUIProvider");
  return ctx;
}

"use client";

import { useOrdersUI } from "@/context/orders-ui-context";
import { useSearchFilter } from "@/context/search-filter-context";
import { Filter, Hash, List, Scan, Search, Store, Utensils, X } from "lucide-react";
import { useState } from "react";
import { orders } from "@/data/orders";
import SearchBar from "@/components/orders/SearchBar";
import UniversalButton from "../buttons/UniversalButton";


export default function OrdersHeader() {
  const { activeTab, setActiveTab, searchQuery, setSearchQuery } = useOrdersUI();
  const { searchField, setSearchField } = useSearchFilter();
  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const deliveryOrders = orders.filter(
    (o) => o.platform === "swiggy" || o.platform === "zomato"
  );

  const inStoreOrders = orders.filter(
    (o) => o.platform === "inhouse"
  );

  const newDeliveryCount = deliveryOrders.filter((o) => o.status === "NEW").length;
  const newInStoreCount = inStoreOrders.filter((o) => o.status === "NEW").length;



  const iconMap: any = {
    all: <Filter size={18} />,
    id: <Hash size={18} />,
    table: <Utensils size={18} />,
    platform: <Store size={18} />,
    items: <List size={18} />,
  };

  const FILTER_OPTIONS = [
    { key: "all", label: "Search All" },
    { key: "id", label: "Order ID" },
    { key: "table", label: "Table Number" },
    { key: "platform", label: "Platform" },
    { key: "items", label: "Items" },
  ];

  return (
    <div
      className="
      w-full
      bg-white dark:bg-neutral-900 
      border-b border-gray-200 dark:border-neutral-700 
      flex items-center justify-between 
      px-3 md:px-5
      pt-2
      pb-2
      sticky top-0 z-50 
    "
    >
      {/* ----------- LEFT TABS (hidden when mobile search is active) ----------- */}
      {/* DELIVERY TAB */}
      <div className="flex items-center justify-between gap-5 relative">

        {/* DELIVERY TAB */}
        <div className="relative">
          <UniversalButton
            label="Delivery"
            onClick={() => setActiveTab("delivery")}
            variant={activeTab === "delivery" ? "tabActive" : "tabInactive"}
            className="px-3 py-2 text-sm font-medium rounded-md"
          />

          {newDeliveryCount > 0 && (
            <span
              className="
          absolute -top-1 -right-2
          bg-red-500 text-white
          text-[10px] font-bold
          px-1.5 py-0.5 rounded-full
        "
            >
              {newDeliveryCount}
            </span>
          )}
        </div>

        {/* IN-STORE TAB */}
        <div className="relative">
          <UniversalButton
            label="In-Store"
            onClick={() => setActiveTab("in-store")}
            variant={activeTab === "in-store" ? "tabActive" : "tabInactive"}
            className="px-3 py-2 text-sm font-medium rounded-md"
          />

          {newInStoreCount > 0 && (
            <span
              className="
          absolute -top-1 -right-2
          bg-red-500 text-white
          text-[10px] font-bold
          px-1.5 py-0.5 rounded-full
        "
            >
              {newInStoreCount}
            </span>
          )}
        </div>

      </div>


      {/* ----------- CENTER SEARCH BAR (Desktop) ----------- */}
      <SearchBar />

      {/* ----------- RIGHT ICONS + MOBILE SEARCH BUTTON ----------- */}
      <div className="flex items-center gap-3">

       

        {/* DESKTOP RIGHT ICON */}
        <button className="hidden md:flex w-10 h-10 rounded-md border border-gray-200 dark:border-neutral-700 items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800">
          <Scan size={16} className="dark:text-white" />
        </button>
      </div>

      {/* ----------- MOBILE EXPANDED SEARCH BAR ----------- */}
      {mobileSearchOpen && (
        <div className="absolute left-0 top-0 w-full h-14 bg-white dark:bg-neutral-900 flex items-center px-3 gap-2 transition-all duration-300">

          {/* Close */}
          <button onClick={() => setMobileSearchOpen(false)}>
            <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Filter */}
          <button onClick={() => setOpen(!open)} className="text-gray-600 dark:text-gray-300">
            {iconMap[searchField]}
          </button>

          <div className="relative flex-1">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              placeholder="Search orders…"
              className="w-full h-10 pl-3 pr-10 border rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-700"
            />
            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="absolute top-14 left-2 w-44 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-md shadow-lg z-50">
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => {
                    setSearchField(opt.key as any);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800
                    ${searchField === opt.key ? "font-semibold text-black dark:text-white" : "text-gray-600 dark:text-gray-300"}
                  `}
                >
                  {iconMap[opt.key]}
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

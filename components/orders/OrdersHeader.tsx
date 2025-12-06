"use client";

import { useOrdersUI } from "@/context/orders-ui-context";
import { useSearchFilter } from "@/context/search-filter-context";
import { Filter, Hash, List, Search, Store, Utensils, X } from "lucide-react";
import { useState } from "react";
import { orders } from "@/data/orders";


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
      w-full h-14 
      bg-white dark:bg-neutral-900 
      border-b border-gray-200 dark:border-neutral-700 
      flex items-center justify-between 
      px-3 md:px-5
      pt-4
      pb-4
      sticky top-0 z-50 
    "
    >
      {/* ----------- LEFT TABS (hidden when mobile search is active) ----------- */}
      {/* DELIVERY TAB */}
      <div className="flex items-center justify-between gap-5">
        <button
          onClick={() => setActiveTab("delivery")}
          className={`
    relative px-3 py-2 rounded-md text-sm font-medium
    ${activeTab === "delivery"
              ? "bg-slate-900 text-white dark:bg-white dark:text-black"
              : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-neutral-800"
            }
  `}
        >
          Delivery

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
        </button>

        {/* IN-STORE TAB */}
        <button
          onClick={() => setActiveTab("in-store")}
          className={`
    relative px-3 py-2 rounded-md text-sm font-medium
    ${activeTab === "in-store"
              ? "bg-slate-900 text-white dark:bg-white dark:text-black"
              : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-neutral-800"
            }
  `}
        >
          In-Store

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
        </button>
      </div>


      {/* ----------- CENTER SEARCH BAR (Desktop) ----------- */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <div className="relative w-full max-w-xl">
          <button
            onClick={() => setOpen(!open)}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            {iconMap[searchField]}
          </button>

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search orders…"
            className="w-full h-12 pl-10 pr-10 border rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-700"
          />

          <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />

          {open && (
            <div className="absolute top-14 left-0 w-44 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-md shadow-lg z-50">
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
      </div>

      {/* ----------- RIGHT ICONS + MOBILE SEARCH BUTTON ----------- */}
      <div className="flex items-center gap-3">

        {/* MOBILE SEARCH BUTTON */}
        <button
          className="md:hidden w-10 h-10 rounded-md border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800"
          onClick={() => setMobileSearchOpen(true)}
        >
          <Search size={18} className="dark:text-white" />
        </button>

        {/* DESKTOP RIGHT ICON */}
        <button className="hidden md:flex w-10 h-10 rounded-md border border-gray-200 dark:border-neutral-700 items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800">
          <List size={16} className="dark:text-white" />
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

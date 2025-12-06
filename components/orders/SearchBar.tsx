"use client";

import { useOrdersUI } from "@/context/orders-ui-context";
import { useSearchFilter } from "@/context/search-filter-context";
import { Filter, Hash, List, Search, Store, Utensils, X } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useOrdersUI();
  const { searchField, setSearchField } = useSearchFilter();

  const [open, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

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
    <>
      {/* ----------- DESKTOP SEARCH BAR ----------- */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <div className="relative w-full max-w-xl">
          {/* Filter icon */}
          <button
            onClick={() => setOpen(!open)}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            {iconMap[searchField]}
          </button>

          {/* Input */}
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search orders…"
            className="w-full h-12 pl-10 pr-10 border rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-700"
          />

          {/* Search icon */}
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
          />

          {/* Dropdown */}
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
                    ${
                      searchField === opt.key
                        ? "font-semibold text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-300"
                    }
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

      {/* ----------- MOBILE SEARCH BUTTON ----------- */}
      <button
        className="md:hidden w-10 h-10 rounded-md border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800"
        onClick={() => setMobileSearchOpen(true)}
      >
        <Search size={18} className="dark:text-white" />
      </button>

      {/* ----------- MOBILE FULL SEARCH PANEL ----------- */}
      {mobileSearchOpen && (
        <div className="absolute left-0 top-0 w-full h-14 bg-white dark:bg-neutral-900 flex items-center px-3 gap-2 transition-all duration-300 z-50">

          {/* Close */}
          <button onClick={() => setMobileSearchOpen(false)}>
            <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Filter */}
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 dark:text-gray-300"
          >
            {iconMap[searchField]}
          </button>

          {/* Mobile input */}
          <div className="relative flex-1">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              placeholder="Search orders…"
              className="w-full h-10 pl-3 pr-10 border rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-700"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            />
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
                    ${
                      searchField === opt.key
                        ? "font-semibold text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-300"
                    }
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
    </>
  );
}

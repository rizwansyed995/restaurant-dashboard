"use client";

import React, { useState, useCallback } from "react";

export default function OrdersHeader() {
  const [activeTab, setActiveTab] = useState<"delivery" | "in-store">("delivery");
  const [query, setQuery] = useState("");

  const changeTab = useCallback((t: "delivery" | "in-store") => {
    setActiveTab(t);
  }, []);

  const onSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div className="w-full h-14 bg-white border-b border-gray-200 flex items-center px-5">
      
      {/* LEFT TABS */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => changeTab("delivery")}
          className={
            "px-3 py-2 rounded-md text-sm font-medium " +
            (activeTab === "delivery"
              ? "bg-slate-900 text-white"
              : "text-zinc-600 hover:bg-zinc-100")
          }
        >
          Delivery
        </button>

        <button
          onClick={() => changeTab("in-store")}
          className={
            "px-3 py-2 rounded-md text-sm font-medium " +
            (activeTab === "in-store"
              ? "bg-slate-900 text-white"
              : "text-zinc-600 hover:bg-zinc-100")
          }
        >
          In-Store
        </button>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex-1 flex justify-center px-6">
        <div className="relative w-full max-w-xl">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="11" cy="11" r="7" strokeWidth="1.5" fill="none" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" strokeWidth="1.5" />
            </svg>
          </span>

          <input
            value={query}
            onChange={onSearch}
            placeholder="Search order..."
            className="w-full h-10 pl-10 pr-3 border border-gray-200 rounded-md text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-100">
          {/* Scanner Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 6v12" strokeWidth="1.5" />
            <path d="M8 6v12" strokeWidth="1.5" />
            <path d="M12 6v12" strokeWidth="1.5" />
            <path d="M16 6v12" strokeWidth="1.5" />
            <path d="M20 6v12" strokeWidth="1.5" />
          </svg>
        </button>

        <button className="w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-100">
          {/* Filter Icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16" strokeWidth="1.5" />
            <path d="M8 12h8" strokeWidth="1.5" />
            <path d="M6 18h12" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

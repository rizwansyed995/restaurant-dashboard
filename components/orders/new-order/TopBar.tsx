"use client";

import { useState } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";
import SearchBar from "@/components/orders/SearchBar"; // adjust path if needed

export default function TopBar() {
  const [activeTab, setActiveTab] = useState<"dine-in" | "take-away">("dine-in");

  return (
    <div className="w-full flex items-center gap-4 p-4 bg-white border-b border-gray-200">
      {/* ROW 1 — TABS */}
      
        {/* DINE-IN TAB */}
        <UniversalButton
          label="Dine-In"
          onClick={() => setActiveTab("dine-in")}
          variant={activeTab === "dine-in" ? "tabActive" : "tabInactive"}
          className="px-4 py-2 text-sm font-medium rounded-md"
        />

        {/* TAKE-AWAY TAB */}
        <UniversalButton
          label="Take-Away"
          onClick={() => setActiveTab("take-away")}
          variant={activeTab === "take-away" ? "tabActive" : "tabInactive"}
          className="px-4 py-2 text-sm font-medium rounded-md"
        />
        <SearchBar />
      </div>


    
  );
}

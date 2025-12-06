"use client";

import { useState } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";
import SearchBar from "@/components/orders/SearchBar";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";

export default function TopBar() {
  const [activeTab, setActiveTab] = useState<"dine-in" | "take-away">("dine-in");
  const { toggleCart } = useCart();

  return (
    <div
      className="
        w-full 
        flex items-center 
        gap-3 
        p-4 
        overflow-x-auto 
        justify-between
        bg-white dark:bg-neutral-900 
        border-b border-gray-200 dark:border-neutral-700
      "
    >
      <div className="flex items-center justify-between gap-1.5">
        {/* TABS */}
        <UniversalButton
          label="Dine-In"
          onClick={() => setActiveTab("dine-in")}
          variant={activeTab === "dine-in" ? "tabActive" : "tabInactive"}
          className="px-4 py-2 text-sm font-medium rounded-md flex-shrink-0"
        />

        <UniversalButton
          label="Take-Away"
          onClick={() => setActiveTab("take-away")}
          variant={activeTab === "take-away" ? "tabActive" : "tabInactive"}
          className="px-4 py-2 text-sm font-medium rounded-md flex-shrink-0"
        />
      </div>

      {/* SEARCH — flexes but doesn’t break layout */}
      <div className="flex-1">
        <SearchBar />
      </div>

      {/* CART BUTTON */}
      <button
        onClick={toggleCart}
        className="
          px-3 py-2
          bg-slate-900 text-white 
          dark:bg-white dark:text-black 
          rounded-md 
          flex items-center gap-1 
          text-sm 
        "
      >
        <ShoppingCart size={18} />
        Cart
      </button>
    </div>
  );
}

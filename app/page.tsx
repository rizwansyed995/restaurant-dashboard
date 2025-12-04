"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import DeliveryMenu from "@/components/DeliveryMenu";

export default function Home() {
  const [showDelivery, setShowDelivery] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900">
      {/* Top Section - Same as DeliveryLayout */}
      <div className="border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
        <div className="px-6 py-4">
          {/* Delivery Button */}
          <button
            onClick={() => setShowDelivery(!showDelivery)}
            className={cn(
              "inline-block px-6 py-3 rounded-lg font-bold text-white transition-colors relative",
              showDelivery
                ? "bg-neutral-800 dark:bg-neutral-700"
                : "bg-neutral-600 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600"
            )}
          >
            Delivery
            {showDelivery && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400" />
            )}
          </button>
        </div>
      </div>

      {/* Delivery Content - Shown when Delivery is clicked */}
      {showDelivery && (
        <div className="flex flex-1 overflow-hidden">
          <DeliveryMenu />
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl">
              <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
                Overview
              </h1>
              
              {/* Delivery Items */}
              <div className="space-y-4">
                {[
                  { color: "bg-red-500", number: "10", label: "Order" },
                  { color: "bg-orange-500", number: "20", label: "" },
                  { color: "bg-black dark:bg-neutral-700", number: "10", label: "Order" },
                  { color: "bg-purple-500", number: "20", label: "" },
                  { color: "bg-orange-500", number: "10", label: "" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm"
                  >
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-black dark:text-white">
                        {item.number}
                      </span>
                      {item.label && (
                        <span className="text-neutral-600 dark:text-neutral-400">
                          {item.label}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

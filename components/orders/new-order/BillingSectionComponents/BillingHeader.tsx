"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

export default function BillingHeader() {
  const [editing, setEditing] = useState(false);
  const [customerName, setCustomerName] = useState("");

  return (
    <div className="p-3 border rounded-2xl bg-gray-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
      <div className="flex justify-between items-center text-xs">

        <div>
          {editing ? (
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              onBlur={() => setEditing(false)}
              className="border px-2 py-1 rounded w-36 text-xs bg-white dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 text-black dark:text-white"
              autoFocus
            />
          ) : (
            <h2 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
              {customerName || "Customer Name"}
            </h2>
          )}

          <div className="text-[10px] text-gray-500 dark:text-gray-400">⭐ 4.5 • last feedback</div>
          <div className="text-[10px] mt-0.5 text-yellow-600">430 pts • 4 deals</div>
        </div>

        <button
          onClick={() => setEditing(true)}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <Pencil size={14} />
        </button>
      </div>
    </div>
  );
}

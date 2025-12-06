"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";

export default function BillingHeader() {
  const [editing, setEditing] = useState(false);
  const [customerName, setCustomerName] = useState("");

  return (
    <div className="p-3 border-b bg-gray-50">
      <div className="flex justify-between items-center text-xs">

        <div>
          {editing ? (
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              onBlur={() => setEditing(false)}
              className="border px-2 py-1 rounded w-36 text-xs"
              autoFocus
            />
          ) : (
            <h2 className="font-semibold text-sm">
              {customerName}
            </h2>
          )}

          <div className="text-[10px] text-gray-500">⭐ 4.5 • last feedback</div>
          <div className="text-[10px] mt-0.5 text-yellow-600">430 pts • 4 deals</div>
        </div>

        <button
          onClick={() => setEditing(true)}
          className="text-gray-600 hover:text-black"
        >
          <Pencil size={14} />
        </button>
      </div>
    </div>
  );
}

"use client";

import { Minus, Plus } from "lucide-react";

export default function CartItemCard({ item }: { item: any }) {
  return (
    <div className="text-xs border rounded-lg p-2 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 shadow-sm">

      <div className="flex justify-between">
        <h3 className="font-medium text-xs text-neutral-900 dark:text-neutral-100">{item.name}</h3>

        <div className="flex items-center gap-1">
          <QtyBtn><Minus size={12} /></QtyBtn>
          <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">{item.qty}</span>
          <QtyBtn><Plus size={12} /></QtyBtn>
        </div>
      </div>

      {item.extras?.length > 0 && (
        <ul className="mt-1 text-gray-500 dark:text-gray-400">
          {item.extras.map((ex: string, i: number) => (
            <li key={i}>• {ex}</li>
          ))}
        </ul>
      )}

      <div className="font-semibold text-right text-sm text-neutral-900 dark:text-neutral-100">
        ₹ {item.price}
      </div>
    </div>
  );
}

function QtyBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-1 bg-gray-100 dark:bg-neutral-700 rounded hover:bg-gray-200 dark:hover:bg-neutral-600 transition">
      {children}
    </button>
  );
}

"use client";

import { Trash2, Pause, Notebook } from "lucide-react";

export default function BillingOrderMeta() {
  return (
    <div className="flex items-center justify-between p-3 border-b text-xs bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700">
      <div>
        <div className="font-semibold text-gray-700 dark:text-gray-100 text-sm">Dine In</div>
        <div className="text-[10px] mb-2 text-gray-500 dark:text-gray-400">3 items in cart</div>
      </div>
      <div className="flex gap-2 text-xs">
        <ButtonIcon><Trash2 size={14} /></ButtonIcon>
        <ButtonIcon><Pause size={14} /></ButtonIcon>
        <ButtonIcon><Notebook size={14} /></ButtonIcon>
      </div>
    </div>
  );
}

function ButtonIcon({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-1.5 bg-gray-200 dark:bg-neutral-700 rounded hover:bg-gray-300 dark:hover:bg-neutral-600 transition">
      {children}
    </button>
  );
}

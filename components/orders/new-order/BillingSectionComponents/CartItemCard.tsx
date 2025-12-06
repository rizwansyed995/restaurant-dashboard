"use client";

import { Minus, Plus } from "lucide-react";

export default function CartItemCard({ item }: { item: any }) {
  return (
    <div className="text-xs border rounded-lg p-2 bg-white shadow-sm">

      <div className="flex justify-between">
        <h3 className="font-medium text-xs">{item.name}</h3>

        <div className="flex items-center gap-1">
          <QtyBtn><Minus size={12} /></QtyBtn>
          <span className="text-xs font-semibold">{item.qty}</span>
          <QtyBtn><Plus onClick={()=> item.qty++} size={12} /></QtyBtn>
        </div>
      </div>

      {item.extras?.length > 0 && (
        <ul className="mt-1 text-gray-500">
          {item.extras.map((ex: string, i: number) => (
            <li key={i}>• {ex}</li>
          ))}
        </ul>
      )}

      <div className="font-semibold text-right text-sm">
        ₹ {item.price}
      </div>
    </div>
  );
}

function QtyBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-1 bg-gray-100 rounded">{children}</button>
  );
}

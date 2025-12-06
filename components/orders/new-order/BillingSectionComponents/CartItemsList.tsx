"use client";

import CartItemCard from "./CartItemCard";

export default function CartItemsList() {
  const items = [
    { id: 1, name: "Tri-Pepper Chilly Paneer", qty: 1, price: 576, extras: ["Extra Pepper"] },
    { id: 2, name: "Chicken Salami Sandwich", qty: 3, price: 1220, extras: ["Chipotle Sauce"] },
    { id: 3, name: "Peri Peri Chicken Pizza", qty: 3, price: 943, extras: ["More Cheese"] },
  ];

  return (
    <div className="p-3 space-y-3 text-xs">
      {items.map((i) => (
        <CartItemCard key={i.id} item={i} />
      ))}
    </div>
  );
}

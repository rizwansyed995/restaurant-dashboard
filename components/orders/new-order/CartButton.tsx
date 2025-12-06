"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";

export default function CartButton() {
  const { openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="
        fixed bottom-4 right-4 z-50 
        bg-blue-600 dark:bg-blue-500 
        text-white p-4 rounded-full shadow-lg
        md:hidden
      "
    >
      <ShoppingCart size={22} />
    </button>
  );
}

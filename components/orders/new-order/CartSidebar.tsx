"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/cart-context";
import BillingSection from "@/components/orders/new-order/BillingSection";

export default function CartSidebar() {
  const { isCartOpen, closeCart } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-[1px] z-40"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* SIDEBAR PANEL */}
          <motion.div
            className="
              fixed top-0 right-0 h-full 
              w-[88%] md:w-[32%]      
              bg-white dark:bg-neutral-900 
              shadow-xl z-50 border-l border-gray-300 dark:border-neutral-700
            "
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
          >
            <div className="h-full overflow-y-auto">
              <BillingSection />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

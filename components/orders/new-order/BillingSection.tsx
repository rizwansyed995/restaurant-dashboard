"use client";

import BillingHeader from "@/components/orders/new-order/BillingSectionComponents/BillingHeader";
import BillingOrderMeta from "@/components/orders/new-order/BillingSectionComponents/BillingOrderMeta";
import CartItemsList from "@/components/orders/new-order/BillingSectionComponents/CartItemsList";
import BillingSummary from "@/components/orders/new-order/BillingSectionComponents/BillingSummary";
import BillingActions from "@/components/orders/new-order/BillingSectionComponents/BillingActions";

export default function BillingSection() {
  return (
    // Removed: 'overflow-y-hidden', 'h-full'
    <div className="flex flex-col bg-white text-sm">

      <BillingHeader />
      <BillingOrderMeta />

      {/* Removed: 'flex-1 overflow-auto' - Cart now grows naturally */}
      <div className="border-t min-h-[200px]"> 
        <CartItemsList />
      </div>

      <div className="mt-auto">
        <BillingSummary />
        <BillingActions />
      </div>
    </div>
  );
}
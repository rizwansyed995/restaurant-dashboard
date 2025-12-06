"use client";

import BillingHeader from "@/components/orders/new-order/BillingSectionComponents/BillingHeader";
import BillingOrderMeta from "@/components/orders/new-order/BillingSectionComponents/BillingOrderMeta";
import CartItemsList from "@/components/orders/new-order/BillingSectionComponents/CartItemsList";
import BillingSummary from "@/components/orders/new-order/BillingSectionComponents/BillingSummary";
import BillingActions from "@/components/orders/new-order/BillingSectionComponents/BillingActions";

export default function BillingSection() {
  return (
    <div className="
      h-full p-5
      flex flex-col 
      bg-white dark:bg-neutral-900 
      text-sm dark:text-neutral-200
    ">

      <BillingHeader />
      <BillingOrderMeta />

      {/* Scrollable Area */}
      <div className="flex-1 overflow-auto border-t dark:border-neutral-700">
        <CartItemsList />
      </div>

      {/* Sticky Bottom */}
      <div className="sticky bottom-0 bg-white dark:bg-neutral-900  dark:border-neutral-700">
        <BillingSummary />
        <BillingActions />
      </div>
    </div>
  );
}

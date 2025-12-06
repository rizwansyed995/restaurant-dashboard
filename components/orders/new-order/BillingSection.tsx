"use client";

import BillingHeader from "@/components/orders/new-order/BillingSectionComponents/BillingHeader";
import BillingOrderMeta from "@/components/orders/new-order/BillingSectionComponents/BillingOrderMeta";
import CartItemsList from "@/components/orders/new-order/BillingSectionComponents/CartItemsList";
import BillingSummary from "@/components/orders/new-order/BillingSectionComponents/BillingSummary";
import BillingActions from "@/components/orders/new-order/BillingSectionComponents/BillingActions";

export default function BillingSection() {
  return (
    <div className="flex flex-col bg-white text-sm overflow-y-hidden">

      <BillingHeader />
      <BillingOrderMeta />

      <div className="flex-1 overflow-auto border-t">
        <CartItemsList />
      </div>

      <BillingSummary />
      <BillingActions />
    </div>
  );
}

"use client";

export default function BillingSummary() {
  return (
    <div className="p-2 border rounded-2xl bg-gray-50 dark:bg-neutral-800 text-xs border-neutral-200 dark:border-neutral-700">
      <div className="flex justify-between mb-1">
        <span>Item Total</span>
        <span>₹ 4545.00</span>
      </div>

      <div className="flex justify-between text-green-600 mb-1">
        <span>Discounts</span>
        <span>- ₹ 626.00</span>
      </div>

      <div className="flex justify-between text-blue-500 dark:text-blue-400 mb-1">
        <span>Other Charges</span>
        <span>₹ 516.00</span>
      </div>

      <hr className="my-2 border-neutral-300 dark:border-neutral-700" />

      <div className="flex justify-between font-bold text-lg text-neutral-900 dark:text-neutral-100">
        <span>Bill Amount</span>
        <span>₹ 4,380.00</span>
      </div>
    </div>
  );
}

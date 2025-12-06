"use client";

export default function BillingSummary() {
  return (
    <div className="p-2 border-t bg-gray-50 text-xs">
      <div className="flex justify-between mb-1">
        <span>Item Total</span>
        <span>₹ 4545.00</span>
      </div>

      <div className="flex justify-between text-green-600 mb-1">
        <span>Discounts</span>
        <span>- ₹ 626.00</span>
      </div>

      <div className="flex justify-between text-blue-600 mb-1">
        <span>Other Charges</span>
        <span>₹ 516.00</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-bold text-lg">
        <span>Bill Amount</span>
        <span>₹ 4,380.00</span>
      </div>
    </div>
  );
}

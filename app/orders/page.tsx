import DeliveryLayout from "@/components/DeliveryLayout";

export default function OrdersPage() {
  return (
    <DeliveryLayout>
      <div className="p-6">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
            Overview
          </h1>
          
          {/* Delivery Items - Placeholder content matching the image */}
          <div className="space-y-4">
            {[
              { color: "bg-red-500", number: "10", label: "Order" },
              { color: "bg-orange-500", number: "20", label: "" },
              { color: "bg-black dark:bg-neutral-700", number: "10", label: "Order" },
              { color: "bg-purple-500", number: "20", label: "" },
              { color: "bg-orange-500", number: "10", label: "" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm"
              >
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-black dark:text-white">
                    {item.number}
                  </span>
                  {item.label && (
                    <span className="text-neutral-600 dark:text-neutral-400">
                      {item.label}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DeliveryLayout>
  );
}

import DeliveryLayout from "@/components/OrdersSidebar/DeliveryLayout";

export default function ProcessingOrdersPage() {
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          Processing Deliveries
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Deliveries currently being processed will appear here.
        </p>
      </div>
  );
}


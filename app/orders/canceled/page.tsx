import DeliveryLayout from "@/components/DeliveryLayout";

export default function CanceledOrdersPage() {
  return (
    <DeliveryLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          Canceled Deliveries
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Canceled deliveries will appear here.
        </p>
      </div>
    </DeliveryLayout>
  );
}


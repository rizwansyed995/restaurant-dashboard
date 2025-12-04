import DeliveryLayout from "@/components/DeliveryLayout";
import OrdersHeader from "@/components/orders/OrdersHeader";
import SingleOrderCard from "@/components/cards/SingleOrderCard";

type Order = {
  id: string;
  timeAgo: string;
  items: string;
  brandColor?: string;
  acceptColor?: string;
  countdown?: string;
};

const orders: Order[] = [
  {
    id: "1235",
    timeAgo: "2 mins ago",
    items: "1x Coffee Almond Shake, 1x Grilled Paneer with Po... +3 more",
    brandColor: "#ef4444",
    acceptColor: "#ef4444",
    countdown: "00:25",
  },
  {
    id: "1236",
    timeAgo: "3 mins ago",
    items: "2 x Classic Cold Coffee",
    brandColor: "#f59e0b",
    acceptColor: "#ef4444",
    countdown: "00:18",
  },
  {
    id: "2235",
    timeAgo: "40 secs ago",
    items: "1x Penne Pasta, 1x Belgian Chocolate Shake",
    brandColor: "#111827",
    acceptColor: "#f59e0b",
    countdown: "01:25",
  },
];

export default function OrdersPage() {
  return (
    <>
      {/* Full-width header above layout */}
      <div className="w-full">
        <OrdersHeader />
      </div>

      <DeliveryLayout>
        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Overview
            </h1>

            <div className="space-y-4">
              {orders.map((o) => (
                <SingleOrderCard
                  key={o.id}
                  orderId={o.id}
                  timeAgo={o.timeAgo}
                  items={o.items}
                  brandColor={o.brandColor}
                  acceptColor={o.acceptColor}
                  countdown={o.countdown}
                />
              ))}
            </div>
          </div>
        </div>
      </DeliveryLayout>
    </>
  );
}

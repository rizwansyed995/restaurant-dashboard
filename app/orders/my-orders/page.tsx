import DeliveryLayout from "@/components/OrdersSidebar/DeliveryLayout";
import OrdersHeader from "@/components/orders/OrdersHeader";
import SingleOrderCard from "@/components/cards/SingleOrderCard";
import { SmallOrderCard } from "@/components/cards/SmallOrderCard";

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

export default function MyOrdersPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          Overview
        </h1>
      </div>
    </div>
  );
}

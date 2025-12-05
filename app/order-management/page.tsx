// app/order-management/page.tsx

import { orders } from "@/data/orders";
import { getActions } from "@/data/orderActions";
import SingleOrderCard from "@/components/cards/SingleOrderCard";

export default function OrderManagementPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
                Order Management
            </h1>

            {/* CARD LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {orders.map((order) => (
                    <SingleOrderCard
                        key={order.id}
                        orderId={order.id}
                        createdAt={order.createdAt}
                        items={order.items}
                        platformLogo={order.platformLogo}
                        status={order.status}
                        otp={order.otp}
                        riderAssigned={order.riderAssigned}
                        actions={getActions(order.status)}
                    />
                ))}
            </div>
        </div>
    );
}

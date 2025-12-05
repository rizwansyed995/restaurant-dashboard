import OrdersHeader from "@/components/orders/OrdersHeader";
import DeliveryLayout from "@/components/OrdersSidebar/DeliveryLayout";
import { OrdersUIProvider } from "@/context/orders-ui-context";

export default function MyOrdersLayout({ children }: { children: React.ReactNode }) {
  return (
    <OrdersUIProvider>
      <div className="w-full">
        <OrdersHeader />
      </div>

      <DeliveryLayout>
        {children}
      </DeliveryLayout>
    </OrdersUIProvider>
  );
}

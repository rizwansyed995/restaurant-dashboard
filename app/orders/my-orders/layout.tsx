import OrdersHeader from "@/components/orders/OrdersHeader";
import DeliveryLayout from "@/components/orders/OrdersSidebar/DeliveryLayout";
import { OrdersUIProvider } from "@/context/orders-ui-context";
import { SearchFilterProvider } from "@/context/search-filter-context";

export default function MyOrdersLayout({ children }: { children: React.ReactNode }) {
  return (
    <OrdersUIProvider>
      <SearchFilterProvider>
        <div className="flex flex-col">

          {/* Sticky Header */}
          <div className="sticky top-0 z-50">
            <OrdersHeader />
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-hidden">
            <DeliveryLayout>

              {children}

            </DeliveryLayout>
          </div>

        </div>
      </SearchFilterProvider>
    </OrdersUIProvider>
  );
}

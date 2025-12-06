import TopBar from "@/components/orders/new-order/TopBar";
import MenuSection from "@/components/orders/new-order/MenuSection";
import SupportBar from "@/components/orders/new-order/SupportBar";
import BillingSection from "@/components/orders/new-order/BillingSection";
import { OrdersUIProvider } from "@/context/orders-ui-context";
import { SearchFilterProvider } from "@/context/search-filter-context";
import OrdersHeader from "@/components/orders/OrdersHeader";

export default function NewOrderLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen flex bg-gray-100">
            <OrdersUIProvider>
                <SearchFilterProvider>
                    {/* LEFT SIDE */}
                    <div className="flex flex-col w-[70%] h-full">

                        {/* Sticky Top Bar */}
                        <div className="sticky top-0 z-50">
                            <TopBar />
                        </div>

                        {/* Scrollable area for Menu + children */}
                        <div className="flex-1 overflow-auto">
                            {/* Menu Placeholder (children can override or be inside) */}
                            
                            {children}
                        </div>

                        {/* Bottom Support Contact */}
                        <SupportBar />
                    </div>

                    {/* RIGHT SIDE BILLING */}
                    <div className="w-[30%] h-full border-l border-gray-300">
                        <BillingSection />
                    </div>
                </SearchFilterProvider>
            </OrdersUIProvider>
        </div>
    );
}

import TopBar from "@/components/orders/new-order/TopBar";
import SupportBar from "@/components/orders/new-order/SupportBar";
import BillingSection from "@/components/orders/new-order/BillingSection";
import { OrdersUIProvider } from "@/context/orders-ui-context";
import { SearchFilterProvider } from "@/context/search-filter-context";

export default function NewOrderLayout({ children }: { children: React.ReactNode }) {
    return (
        // Changed: 'h-screen' -> 'min-h-screen' so the page can grow
        <div className="w-full min-h-screen flex bg-gray-100">
            <OrdersUIProvider>
                <SearchFilterProvider>
                    {/* LEFT SIDE */}
                    {/* Removed 'h-full' so it grows naturally */}
                    <div className="flex flex-col w-[70%] border-r border-gray-200 dark:border-neutral-700">

                        {/* Sticky Top Bar */}
                        <div className="sticky top-0 z-50">
                            <TopBar />
                        </div>

                        {/* Main Content Area */}
                        {/* Removed 'flex-1 overflow-auto' to disable internal scroll */}
                        <div className="flex-1 bg-slate-50 dark:bg-neutral-900/50">
                            {children}
                        </div>

                        {/* Bottom Support Contact */}
                        <SupportBar />
                    </div>

                    {/* RIGHT SIDE BILLING */}
                    {/* Removed 'h-full' */}
                    <div className="w-[30%] bg-white dark:bg-neutral-900">
                        {/* We add sticky here so the bill stays visible if the menu is long */}
                        <div className="sticky top-0">
                            <BillingSection />
                        </div>
                    </div>
                </SearchFilterProvider>
            </OrdersUIProvider>
        </div>
    );
}
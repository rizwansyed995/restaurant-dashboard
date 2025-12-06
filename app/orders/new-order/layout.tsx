// app/orders/new-order/layout.tsx

import CartSidebar from "@/components/orders/new-order/CartSidebar";
import TopBar from "@/components/orders/new-order/TopBar";
import { CartProvider } from "@/context/cart-context";
import { OrdersUIProvider } from "@/context/orders-ui-context";
import { SearchFilterProvider } from "@/context/search-filter-context";

export default function NewOrderLayout({ children }: { children: React.ReactNode }) {
    return (
        <OrdersUIProvider>
            <SearchFilterProvider>
                <CartProvider>
                    {/* Updated: Added dark:bg-neutral-950 */}
                    <div className="w-full min-h-screen flex bg-gray-100 dark:bg-neutral-950 transition-colors duration-300">

                        {/* LEFT SIDE CONTENT */}
                        <div className="flex flex-col w-full border-r border-gray-200 dark:border-neutral-800">
                            <div className="sticky top-0 z-30">
                                <TopBar />
                            </div>

                            {/* Updated: Changed dark:bg-neutral-900/50 to solid dark:bg-neutral-900 */}
                            <div className="flex-1 bg-slate-50 dark:bg-neutral-900 transition-colors duration-300">
                                {children}
                            </div>
                        </div>

                        {/* SIDE CART */}
                        <CartSidebar />
                    </div>
                </CartProvider>
            </SearchFilterProvider>
        </OrdersUIProvider>
    );
}
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
                    <div className="w-full min-h-screen flex bg-gray-100">

                        {/* LEFT SIDE CONTENT */}
                        <div className="flex flex-col w-full border-r border-gray-200 dark:border-neutral-700">
                            <div className="sticky top-0 z-30">
                                <TopBar />
                            </div>

                            <div className="flex-1 bg-slate-50 dark:bg-neutral-900/50">
                                {children}
                            </div>
                        </div>

                        {/* SIDE CART (overlays when open) */}
                        <CartSidebar />
                    </div>
                </CartProvider>
            </SearchFilterProvider>
        </OrdersUIProvider>
    );
}

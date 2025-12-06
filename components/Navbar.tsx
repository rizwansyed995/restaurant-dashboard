"use client";

import Link from "next/link";
import { Menu, Bell, PersonStandingIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { useAppTheme } from "@/context/theme-app-context";
import MainMenu from "@/components/Main-Menu";
import { orders } from "@/data/orders";
const newOrderCount = orders.filter(o => o.status === "NEW").length;

export default function Navbar() {
    const pathname = usePathname();
    const { appTheme } = useAppTheme(); // ✅ correct place to call the hook

    const tabs = [
        { label: "My Orders", href: "/orders/my-orders" },
        { label: "Take New Order", href: "/orders/new-order" },
        { label: "Table View", href: "/orders/tables" },
    ];

    return (
        <nav className="flex items-center justify-between px-4 pt-3  dark:border-neutral-700 bg-white dark:bg-neutral-900">
            {/* Left side */}
            <div className="flex items-center gap-3">
                <MainMenu />
                <span className="text-xl font-semibold border-black dark:border-white text-black dark:text-white">
                    Savouré
                </span>
            </div>

            {/* Center Tabs */}
            <div className="hidden md:flex items-center gap-8">
                {tabs.map((tab) => {
                    const active =
                        pathname === tab.href ||
                        (tab.href === "/orders/my-orders" && pathname.startsWith("/orders/my-orders"));

                    const isMyOrders = tab.label === "My Orders";

                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`relative text-sm font-semibold pb-1 ${active
                                ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                                : "text-neutral-600 dark:text-neutral-300"
                                }`}
                        >
                            {tab.label}

                            {isMyOrders && newOrderCount > 0 && (
                                <span className="
                    absolute -top-2 -right-4 
                    bg-red-500 text-white 
                    text-[10px] font-bold 
                    px-1.5 py-0.5 rounded-full
                ">
                                    {newOrderCount}
                                </span>
                            )}
                        </Link>
                    );
                })}

            </div>

            {/* Right side */}
            <div className="flex items-center gap-4 ">
                <Link href="/admin" className="border-black dark:border-white text-black dark:text-white">
                    <PersonStandingIcon />
                </Link>

                <Bell className="w-5 h-5 cursor-pointer border-black dark:border-white text-black dark:text-white" />

                {/* Theme Toggle */}
                <div className="border-black dark:border-white text-black dark:text-white">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}

"use client";

import Link from "next/link";
import { Menu, Bell, PersonStandingIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { useAppTheme } from "@/context/theme-app-context";

export default function Navbar() {
    const pathname = usePathname();
    const { appTheme } = useAppTheme(); // ✅ correct place to call the hook

    const tabs = [
        { label: "My Orders", href: "/orders" },
        { label: "Take New Order", href: "/orders/take-order" },
        { label: "Table View", href: "/orders/tables" },
    ];

    return (
        <nav className="flex items-center justify-between px-4 py-3 border-b dark:border-neutral-700 bg-white dark:bg-neutral-900">
            {/* Left side */}
            <div className="flex items-center gap-3">
                <Menu className="w-6 h-6 cursor-pointer border-black dark:border-white text-black dark:text-white" />
                <span className="text-xl font-semibold border-black dark:border-white text-black dark:text-white">
                    rista
                </span>
            </div>

            {/* Center Tabs */}
            <div className="hidden md:flex items-center gap-8">
                {tabs.map((tab) => {
                    const active = pathname === tab.href;
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`text-sm font-semibold pb-1 ${active
                                    ? "border-b-2 border-black dark:border-white text-black dark:text-white"
                                    : "text-neutral-600 dark:text-neutral-300"
                                }`}
                        >
                            {tab.label}
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

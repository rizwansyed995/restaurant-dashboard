"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Menu,
    Home,
    ClipboardList,
    Layers,
    Settings,
    ChevronDown,
    ChevronRight,
    User,
} from "lucide-react";

export default function MainMenu() {
    const [open, setOpen] = useState(false);
    const [openSection, setOpenSection] = useState<string | null>(null);
    const pathname = usePathname();

    // disable scroll when menu is open (mobile UX fix)
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    const toggleMenu = () => setOpen(!open);
    const toggleSection = (section: string) =>
        setOpenSection(openSection === section ? null : section);

    const menuItems = [
        {
            label: "Home",
            icon: Home,
            href: "/home",
        },
        {
            label: "Orders",
            icon: ClipboardList,
            children: [
                { label: "My Orders", href: "/orders/my-orders" },
                { label: "Take New Order", href: "/orders/new-order" },
                { label: "Table View", href: "/orders/tables" },
            ],
        },

        {
            label: "Menu Management",
            icon: Layers,
            children: [
                { label: "Categories", href: "/menu-management/categories" },
                { label: "Items", href: "/menu-management/items" },
                { label: "Addons", href: "/menu-management/addons" },
            ],
        },
        {
            label: "Settings",
            icon: Settings,
            href: "/settings",
        },
        {
            label: "Admin",
            icon: User,
            children: [
                { label: "Users", href: "/admin/users" },
                { label: "Analytics", href: "/admin/analytics" },
            ],
        },
    ];

    return (
        <>
            {/* BUTTON TRIGGER */}
            <button
                onClick={toggleMenu}
                className="
          flex items-center gap-1 px-2 py-1 rounded-md
          text-sm font-medium
          text-black dark:text-white
          hover:bg-neutral-100 dark:hover:bg-neutral-800
        "
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-black/40 dark:bg-black/60 z-40"
                />
            )}

            {/* SIDEBAR DRAWER */}
            <aside
                className={`
          fixed top-0 left-0 h-full w-72 
          bg-white dark:bg-neutral-900
          border-r border-neutral-200 dark:border-neutral-700
          z-50 p-5 flex flex-col 
          transform transition-transform duration-300 z-1000
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                <h2 className="text-xl font-semibold mb-5 text-black dark:text-white">
                    Main Menu
                </h2>

                <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;

                        // SECTION WITHOUT CHILDREN
                        if (!item.children) {
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href!}
                                    onClick={() => setOpen(false)}
                                    className={`
                    flex items-center justify-between px-3 py-2 rounded-md
                    text-sm font-medium transition
                    ${pathname === item.href
                                            ? "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400"
                                            : "text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                        }
                  `}
                                >
                                    <span className="flex items-center gap-3">
                                        <Icon className="w-5 h-5" />
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        }

                        // SECTION WITH DROPDOWN CHILDREN
                        return (
                            <div key={item.label} className="flex flex-col">
                                <button
                                    onClick={() => toggleSection(item.label)}
                                    className="
                    flex items-center justify-between px-3 py-2 rounded-md
                    text-sm font-medium text-black dark:text-white
                    hover:bg-neutral-100 dark:hover:bg-neutral-800 transition
                  "
                                >
                                    <span className="flex items-center gap-3">
                                        <Icon className="w-5 h-5" />
                                        {item.label}
                                    </span>

                                    {openSection === item.label ? (
                                        <ChevronDown className="w-4 h-4" />
                                    ) : (
                                        <ChevronRight className="w-4 h-4" />
                                    )}
                                </button>

                                {/* CHILDREN LIST */}
                                {openSection === item.label && (
                                    <div className="ml-9 flex flex-col border-l border-neutral-300 dark:border-neutral-700 pl-3">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                onClick={() => setOpen(false)}
                                                className={`
                          px-2 py-1 rounded-md text-sm mt-1
                          ${pathname === child.href
                                                        ? "text-blue-600 dark:text-blue-400 font-medium"
                                                        : "text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                                                    }
                        `}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}

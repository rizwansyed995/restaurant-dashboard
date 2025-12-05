"use client";

import {
  FileSearch,
  RefreshCw,
  Truck,
  PackageCheck,
  BellOff,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MenuItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const menuItems: MenuItem[] = [
  { label: "Overview", href: "/orders/my-orders", icon: FileSearch },
  { label: "New", href: "/orders/my-orders/new", icon: RefreshCw },
  { label: "Processing", href: "/orders/my-orders/processing", icon: RefreshCw },
  { label: "Dispatched", href: "/orders/my-orders/dispatched", icon: Truck },
  { label: "Delivered", href: "/orders/my-orders/delivered", icon: PackageCheck },
  { label: "Canceled", href: "/orders/my-orders/canceled", icon: BellOff },
];

export default function DeliveryMenu() {
  const pathname = usePathname();

  return (
    <div className="
      w-20                    /* narrower */
      md:w-24                 /* normal width on MD+ */
      bg-white 
      dark:bg-neutral-900 
      border-r 
      border-neutral-200 
      dark:border-neutral-700 
      h-full 
      overflow-y-auto         /* scroll when vertical space is tight */
      pt-2
    ">
      <nav className="flex flex-col items-center space-y-3 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors w-full text-center",  // 👈 added 'relative'
                isActive
                  ? "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r" />
              )}

              {/* Smaller icons */}
              <Icon className="w-5 h-5 md:w-6 md:h-6" />

              {/* Label */}
              <span className="text-[10px] md:text-xs font-medium leading-tight">
                {item.label}
              </span>
            </Link>

          );
        })}
      </nav>
    </div>
  );
}

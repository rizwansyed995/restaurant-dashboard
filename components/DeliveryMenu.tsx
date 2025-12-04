"use client";

import { 
  FileSearch, 
  RefreshCw, 
  Truck, 
  PackageCheck, 
  BellOff 
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
  { label: "Overview", href: "/orders", icon: FileSearch },
  { label: "Now", href: "/orders/new", icon: RefreshCw },
  { label: "Processing", href: "/orders/processing", icon: RefreshCw },
  { label: "Dispatched", href: "/orders/dispatched", icon: Truck },
  { label: "Delivered", href: "/orders/delivered", icon: PackageCheck },
  { label: "Canceled", href: "/orders/canceled", icon: BellOff },
];

export default function DeliveryMenu() {
  const pathname = usePathname();

  return (
    <div className="w-32 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-700 h-full">
      <nav className="flex flex-col p-3 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.href === "/orders" && pathname === "/orders");
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-2 px-2 py-4 rounded-lg transition-colors relative",
                isActive
                  ? "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r" />
              )}
              <Icon className="w-7 h-7" />
              <span className="text-xs font-medium text-center leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}


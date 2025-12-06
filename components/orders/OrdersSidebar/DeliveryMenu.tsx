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

export default function DeliveryMenu({
  onSelect,
}: {
  onSelect?: () => void; // ← add this
}) {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { label: "Overview", href: "/orders/my-orders", icon: FileSearch },
    { label: "New", href: "/orders/my-orders/new", icon: RefreshCw },
    { label: "Processing", href: "/orders/my-orders/processing", icon: RefreshCw },
    { label: "Ready", href: "/orders/my-orders/ready", icon: Truck },
    { label: "All Orders", href: "/orders/my-orders/all-orders", icon: PackageCheck },
    { label: "Canceled", href: "/orders/my-orders/canceled", icon: BellOff },
  ];

  return (
    <div
      className="
        w-20 md:w-24
        bg-white dark:bg-neutral-900
         border-neutral-200 dark:border-neutral-700
        h-full overflow-y-auto
        pt-2
      "
    >
      <nav className="flex flex-col items-center space-y-3 px-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onSelect} // ← close menu on click
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors w-full text-center",
                isActive
                  ? "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r" />
              )}

              <Icon className="w-5 h-5 md:w-6 md:h-6" />

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

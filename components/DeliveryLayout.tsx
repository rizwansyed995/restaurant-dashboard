"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import DeliveryMenu from "./DeliveryMenu";

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDeliveryPage = pathname?.startsWith("/delivery");

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-neutral-900">
      {/* Top Section */}
      <div className="border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
        <div className="px-6 py-4">
          {/* Logo */}

          {/* Delivery Button */}
          <Link
            href="/delivery"
            className={cn(
              "inline-block px-6 py-3 rounded-lg font-bold text-white transition-colors relative",
              isDeliveryPage
                ? "bg-neutral-800 dark:bg-neutral-700"
                : "bg-neutral-600 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600"
            )}
          >
            Delivery
            {isDeliveryPage && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400" />
            )}
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <DeliveryMenu />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}


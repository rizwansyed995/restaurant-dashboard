"use client";

import { MenuItem, DietaryType } from "@/data/menu";
import { cn } from "@/lib/utils";

function DietaryIcon({ type }: { type: DietaryType }) {
  const isVeg = type === "veg";
  return (
    <div className={cn(
      "w-4 h-4 border-2 flex items-center justify-center p-[2px] rounded-sm flex-shrink-0",
      isVeg ? "border-green-600" : "border-red-600"
    )}>
      <div className={cn(
        "w-full h-full rounded-full",
        isVeg ? "bg-green-600" : "bg-red-600"
      )} />
    </div>
  );
}

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div
      className="
        group relative flex items-start gap-4 p-3 
        bg-white dark:bg-neutral-800 
        border border-gray-100 dark:border-neutral-700 
        rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer
      "
    >
      {/* Image Placeholder */}
      <div className={cn("w-24 h-24 rounded-lg flex-shrink-0 object-cover", item.imageColor)} />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between h-24 py-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-2 leading-tight">
            {item.name}
          </h3>
          <DietaryIcon type={item.dietary} />
        </div>

        <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Rs. {item.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
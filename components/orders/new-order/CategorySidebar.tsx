"use client";

import { CATEGORIES } from "@/data/menu";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CategorySidebar({ activeCategory, onSelectCategory }: CategorySidebarProps) {
  return (
    // Changed: Reduced width (w-48), removed h-full, overflow-y-auto, custom-scrollbar
    <div className="w-48 flex-shrink-0 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800y">
      <div className="p-2 space-y-1">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg text-sm font-medium transition-all duration-200 text-left",
                isActive
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-md text-xs font-bold uppercase",
                  isActive
                    ? "bg-white text-black dark:bg-black dark:text-white"
                    : cat.color
                )}
              >
                {cat.icon}
              </div>
              {/* Optional: You could hide this label on smaller screens if needed */}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
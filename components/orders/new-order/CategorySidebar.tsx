"use client";

import { CATEGORIES } from "@/data/menu";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export default function CategorySidebar({ activeCategory, onSelectCategory }: CategorySidebarProps) {
  return (
    <>
      {/* MOBILE: Horizontal Scrollable List */}
      <div className="md:hidden w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-20">
        <div className="flex overflow-x-auto p-2 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0",
                  isActive
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                    : "bg-gray-100 text-gray-600 dark:bg-neutral-800 dark:text-gray-400"
                )}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP: Vertical Sidebar */}
      <div className="hidden md:block w-48 flex-shrink-0 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800">
        <div className="p-2 space-y-1 sticky top-4">
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
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
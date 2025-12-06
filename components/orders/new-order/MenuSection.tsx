"use client";

import React, { useState } from "react";
import { CATEGORIES, MENU_ITEMS } from "@/data/menu";
import CategorySidebar from "./CategorySidebar";
import MenuCard from "./MenuCard";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("indian-mains");

  // Filter items based on active category
  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);
  const activeCategoryLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label;

  return (
    // Updated: Added flex-col for mobile, md:flex-row for desktop
    <div className="flex flex-col md:flex-row w-full bg-slate-50 dark:bg-neutral-900 transition-colors duration-300">
      
      {/* 1. Sidebar Component (Responsive) */}
      <CategorySidebar 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      {/* 2. Main Content Grid */}
      <div className="flex-1 p-4 md:p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              {activeCategoryLabel}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
              {filteredItems.length} Items
            </p>
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pb-20">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="col-span-full h-64 border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl flex flex-col items-center justify-center text-gray-400">
              <span className="text-lg font-medium">No items found</span>
              <span className="text-sm">Select another category</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
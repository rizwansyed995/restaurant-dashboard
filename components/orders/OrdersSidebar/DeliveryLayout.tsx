"use client";

import { useState } from "react";
import DeliveryMenu from "./DeliveryMenu";
import { Menu } from "lucide-react";

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-full bg-white dark:bg-neutral-900">

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed bottom-5 right-5 z-[60]
          w-12 h-12 rounded-full
          flex items-center justify-center
          bg-blue-600 text-white
          shadow-lg
        "
      >
        <Menu size={24} />
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <DeliveryMenu />
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`
          fixed top-0 left-0 h-full z-[70]
          bg-white dark:bg-neutral-900
          border-r border-neutral-200 dark:border-neutral-700
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <DeliveryMenu onSelect={() => setOpen(false)} />
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[65]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar z-10 relative">
        {children}
      </div>
    </div>
  );
}

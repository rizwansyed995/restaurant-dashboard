"use client";

import DeliveryMenu from "./DeliveryMenu";

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white dark:bg-neutral-900">
      {/* Main Content Area */}
      <DeliveryMenu />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}


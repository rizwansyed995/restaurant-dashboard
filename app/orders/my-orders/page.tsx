"use client";

import React, { useState } from "react";
import UniversalButton from "@/components/buttons/UniversalButton";

import NewOrdersColumn from "@/components/orders/overview/NewOrdersColumn";
import AcceptedColumn from "@/components/orders/overview/AcceptedColumn";
import ReadyColumn from "@/components/orders/overview/ReadyColumn";

export default function MyOrdersPage() {
  const [active, setActive] = useState<"new" | "accepted" | "ready">("new");

  return (
    <div className="p-4 h-full flex flex-col">

      {/* MOBILE TABS USING UNIVERSAL BUTTON */}
      <div className="md:hidden grid grid-cols-3 gap-2 mb-4">
        <UniversalButton
          label="New"
          onClick={() => setActive("new")}
          variant={active === "new" ? "primary" : "neutral"}
          className="w-full"
        />

        <UniversalButton
          label="Accepted"
          onClick={() => setActive("accepted")}
          variant={active === "accepted" ? "primary" : "neutral"}
          className="w-full"
        />

        <UniversalButton
          label="Ready"
          onClick={() => setActive("ready")}
          variant={active === "ready" ? "primary" : "neutral"}
          className="w-full"
        />
      </div>

      {/* MOBILE: Only show selected column */}
      <div className="md:hidden">
        {active === "new" && <NewOrdersColumn />}
        {active === "accepted" && <AcceptedColumn />}
        {active === "ready" && <ReadyColumn />}
      </div>

      {/* DESKTOP: 3 COLUMNS ALWAYS VISIBLE */}
      <div className="hidden md:grid grid-cols-3 gap-4 h-full min-h-0">
        <NewOrdersColumn />
        <AcceptedColumn />
        <ReadyColumn />
      </div>

    </div>
  );
}

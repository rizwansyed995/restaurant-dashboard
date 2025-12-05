// utils/useDynamicTimeAgo.ts
"use client";

import { useEffect, useState } from "react";

export function useDynamicTimeAgo(isoDate: string, freeze: boolean = false) {
  const getLabel = () => {
    const now = Date.now();
    const orderTime = new Date(isoDate).getTime();
    const diff = Math.floor((now - orderTime) / 1000); // seconds difference

    if (diff < 60) {
      return `${diff} sec ago`;
    }

    const mins = Math.floor(diff / 60);
    return `${mins} min ago`;
  };

  const [label, setLabel] = useState(getLabel());

  useEffect(() => {
    if (freeze) return; // completed orders don't update

    const interval = setInterval(() => {
      setLabel(getLabel());
    }, 1000);

    return () => clearInterval(interval);
  }, [freeze, isoDate]);

  return label;
}

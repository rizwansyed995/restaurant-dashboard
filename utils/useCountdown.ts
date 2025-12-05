"use client";

import { useEffect, useState } from "react";

export function useCountdown(seconds: number, active: boolean) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (!active) return;
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [active, time]);

  const format = () => {
    const s = time % 60;
    const m = Math.floor(time / 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return {
    time,
    formatted: format(),
  };
}

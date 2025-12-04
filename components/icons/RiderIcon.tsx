"use client";

import React from "react";

export function RiderIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-gray-500"
      aria-hidden
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M4 22c0-4 3-7 8-7s8 3 8 7" />
    </svg>
  );
}

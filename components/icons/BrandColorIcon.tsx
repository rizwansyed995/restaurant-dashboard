"use client";

import React from "react";

type BrandColorIconProps = {
  color?: string;
  size?: number;
};

export function BrandColorIcon({ color = "#ef4444", size = 28 }: BrandColorIconProps) {
  return (
    <div
      aria-hidden
      style={{ width: size, height: size, backgroundColor: color }}
      className="rounded-full flex-shrink-0"
    />
  );
}

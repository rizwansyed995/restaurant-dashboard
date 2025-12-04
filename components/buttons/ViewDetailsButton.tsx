"use client";

import React from "react";

export type ViewDetailsButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function ViewDetailsButton({
  onClick,
  children,
  className = "",
  ariaLabel = "View Details",
}: ViewDetailsButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={
        "px-3 py-1.5 rounded-md text-white text-sm font-medium shadow-sm focus:outline-none inline-flex items-center justify-center " +
        className
      }
      style={{ backgroundColor: "#2563eb" }}
    >
      {children ?? "View Details"}
    </button>
  );
}

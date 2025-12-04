"use client";

import React from "react";

export type RejectButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function RejectButton({
  onClick,
  children,
  className = "",
  ariaLabel = "Reject",
}: RejectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={
        "px-3 py-1.5 rounded-md text-white text-sm font-medium shadow-sm focus:outline-none inline-flex items-center justify-center " +
        className
      }
      style={{ backgroundColor: "#374151" }}
    >
      {children ?? "Reject"}
    </button>
  );
}

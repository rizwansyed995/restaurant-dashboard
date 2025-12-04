"use client";

import React from "react";

export type AcceptButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function AcceptButton({
  onClick,
  children,
  className = "",
  ariaLabel = "Accept",
}: AcceptButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={
        "px-4 py-2 rounded-xl text-white text-sm font-semibold shadow-sm focus:outline-none inline-flex items-center justify-center " +
        className
      }
      style={{ backgroundColor: "#ef4444" }}
    >
      {children ?? "Accept"}
    </button>
  );
}

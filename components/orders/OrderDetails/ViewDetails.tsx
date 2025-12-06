"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ViewDetailsProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function ViewDetails({ open, onClose, children }: ViewDetailsProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent SSR rendering of modal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable page scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!mounted) return null;
  if (!open) return null;

  // Portal ensures no hydration mismatch
  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-100 transition-opacity" />

      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative z-[1000] w-full max-w-lg 
          bg-white dark:bg-neutral-900 
          rounded-2xl shadow-2xl p-6
          animate-in fade-in zoom-in
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 
            p-2 rounded-full 
            hover:bg-neutral-200 dark:hover:bg-neutral-700
            transition
          "
        >
          <X className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}

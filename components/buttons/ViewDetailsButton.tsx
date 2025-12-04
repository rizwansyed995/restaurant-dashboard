"use client";

type ViewDetailsButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export function ViewDetailsButton({ onClick, children }: ViewDetailsButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm"
      aria-label="View details"
      type="button"
    >
      {children ?? "View Details"}
    </button>
  );
}

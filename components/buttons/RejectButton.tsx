"use client";

type RejectButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export function RejectButton({ onClick, children }: RejectButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-lg bg-gray-700 text-white text-sm"
      aria-label="Reject"
      type="button"
    >
      {children ?? "Reject"}
    </button>
  );
}

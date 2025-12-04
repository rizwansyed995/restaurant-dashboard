"use client";

type AcceptButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export function AcceptButton({ onClick, children }: AcceptButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-lg bg-red-600 text-white text-sm"
      aria-label="Accept"
      type="button"
    >
      {children ?? "Accept"}
    </button>
  );
}

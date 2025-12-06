import Link from "next/link";

interface UniversalButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?:
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "neutral"
  | "accept"
  | "reject"
  | "tabActive"
  | "tabInactive";
  className?: string;
}

export default function UniversalButton({
  label,
  href,
  onClick,
  variant = "primary",
  className = "",
}: UniversalButtonProps) {
  const base =
    "h-10 flex items-center justify-center rounded-md text-sm font-semibold transition p-5";

  const styles: Record<string, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",

    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",

    success:
      "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",

    warning:
      "bg-yellow-500 text-black hover:bg-yellow-600 active:bg-yellow-700",

    neutral:
      "bg-neutral-200 text-neutral-800 active:bg-neutral-400 dark:bg-neutral-700 dark:text-neutral-200",

    accept:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",

    reject:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",

    tabActive:
      "bg-slate-900 text-white dark:bg-white dark:text-black",

    tabInactive:
      "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-neutral-800",
  };


  const btnClass = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass}>
        {label}
      </Link>
    );
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {label}
    </button>
  );
}

import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className,
  ...props
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary" &&
      "bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5",
    variant === "secondary" &&
      "border border-border bg-surface text-white hover:border-primary/50 hover:bg-surface/80",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} {...props}>
      {children}
    </button>
  );
}
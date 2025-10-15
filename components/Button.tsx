import React from "react";
import clsx from "clsx";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" };

export default function Button({ className, variant = "primary", ...props }: Props) {
  const styles = clsx(
    "px-5 py-3 rounded-2xl font-semibold transition",
    variant === "primary" && "bg-brand-orange text-black hover:opacity-90 shadow-soft",
    variant === "ghost" && "border border-white/20 hover:border-white/40 text-white"
  );
  return <button className={clsx(styles, className)} {...props} />;
}

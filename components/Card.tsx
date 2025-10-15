import React from "react";
import clsx from "clsx";
export default function Card({ className, children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={clsx("glass rounded-2xl p-5", className)}>{children}</div>;
}

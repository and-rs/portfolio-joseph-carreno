import { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: props) {
  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto max-w-screen-lg p-8">{children}</div>
    </div>
  );
}

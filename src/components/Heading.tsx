import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className?: string; 
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h2 className={`text-3xl font-bold ${className || ""}`}>
      {children}
    </h2>
  );
}

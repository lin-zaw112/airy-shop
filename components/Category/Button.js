"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Button({ children, category }) {
  const [effect, setEffect] = useState(false);

  return (
    <Link
      href={`/category/${category}`}
      onClick={() => {
        setEffect(true);
      }}
      onAnimationEnd={() => setEffect(false)}
      className={`flex-none rounded-full bg-neutral-50 px-6 py-2 text-lg capitalize shadow transition-shadow hover:shadow-md ${
        effect && "animate-wiggle"
      }`}
    >
      {children}
    </Link>
  );
}

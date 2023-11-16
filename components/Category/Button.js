"use client";
import Link from "next/link";
import React from "react";

export default function Button({ children, category }) {
  return (
    <Link
      href={`/category/${category}`}
      className={`flex-none rounded-full bg-neutral-50 px-6 py-2 text-lg capitalize shadow transition-shadow hover:shadow-md`}
    >
      {children}
    </Link>
  );
}

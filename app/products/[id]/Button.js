"use client";
import React from "react";

export default function Button({
  children,
  className,
  active,
  handler,
  disabled = false,
}) {
  return (
    <button
      onClick={handler}
      className={`border-2 border-neutral-950 px-12 py-4 capitalize transition disabled:border-gray-200 disabled:bg-gray-300 disabled:text-white disabled:focus:outline-none ${
        active
          ? "bg-neutral-950 text-neutral-50 transition duration-500 active:bg-neutral-50 active:text-neutral-950"
          : " hover:bg-neutral-950 hover:text-neutral-50 active:bg-neutral-950 active:text-neutral-50"
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

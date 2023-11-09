"use client";
import { CartSlice, useDispatch } from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ product }) {
  const { id, title, price, thumbnail, description, category, stock, brand } =
    product;
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(
      CartSlice.actions.addToCart({ title, brand, price, id, thumbnail }),
    );
  };

  return (
    <Link
      href={`/products/${id}`}
      className="group flex h-44 w-full flex-row items-center overflow-hidden rounded-2xl shadow sm:h-48 md:h-56"
    >
      <div className="relative h-44 w-1/3 overflow-hidden sm:h-64">
        <Image
          src={thumbnail}
          alt={description}
          fill
          sizes="80vw"
          className="object-contain object-center transition group-hover:scale-110"
        />
      </div>
      <div className=" relative h-full w-2/3 justify-center px-4 py-8 font-sans uppercase backdrop-blur-sm">
        <h2 className="line-clamp-2 text-lg sm:text-lg">{title}</h2>
        <h3 className="text-sm text-gray-500">{brand}</h3>
        <div>
          <p className="font-mono">in stock : {stock}</p>
          <button
            className="border bg-neutral-950 px-5 py-1 uppercase text-neutral-50 transition duration-500 active:bg-neutral-50 active:text-neutral-950"
            onClick={increaseQuantity}
          >
            add
          </button>
        </div>
        <div className="absolute bottom-0 pb-3 capitalize text-neutral-800 sm:text-lg">
          <h3 className="text-sm text-neutral-700/90">{category}</h3>
          price :
          <span className="text-lg font-semibold text-neutral-950 sm:text-xl">
            &nbsp;${price}
          </span>
        </div>
      </div>
    </Link>
  );
}

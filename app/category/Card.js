"use client";
import { addToTheCart, useDispatch } from "@/lib/redux";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ product }) {
  const { id, title, price, thumbnail, description, category, stock, brand } =
    product;
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    dispatch(addToTheCart({ title, brand, price, id, thumbnail }));
  };

  return (
    <div className="group flex h-56 w-full flex-row items-center overflow-hidden rounded-2xl shadow">
      <Link
        href={`/products/${id}`}
        className="relative h-44 w-1/3 overflow-hidden sm:h-64"
      >
        <Image
          src={thumbnail}
          alt={description}
          fill
          sizes="80vw"
          className="object-contain object-center transition group-hover:scale-110"
        />
      </Link>
      <div className=" relative h-full w-2/3 justify-center px-4 py-8 font-sans uppercase backdrop-blur-sm">
        <Link href={`/products/${id}`}>
          <h2 className="line-clamp-2 text-lg sm:text-lg">{title}</h2>
        </Link>
        <h3 className="text-sm text-gray-500">{brand}</h3>
        <p className="font-mono">in stock : {stock}</p>
        <button
          className="my-2 border border-neutral-950 bg-neutral-950 px-5 py-2 uppercase text-neutral-50 transition duration-500 active:bg-neutral-50 active:text-neutral-950"
          onClick={increaseQuantity}
        >
          add to cart
        </button>

        <div className="absolute bottom-0 pb-3 capitalize text-neutral-800 sm:text-lg">
          <h3 className="text-sm text-neutral-700/90">{category}</h3>
          price :
          <span className="text-lg font-semibold text-neutral-950 sm:text-xl">
            &nbsp;${price}
          </span>
        </div>
      </div>
    </div>
  );
}

import { useSelector } from "@/lib/redux";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Card({ id }) {
  const carts = useSelector((state) => state.Cart.carts);
  const [item] = carts.filter((item) => item.id === id);

  return (
    <div className="flex h-fit w-full flex-row justify-around rounded-lg p-4 shadow">
      <div className="relative h-24 min-h-fit w-24">
        <Image
          sizes="25vw"
          fill
          className="object-contain object-left"
          alt={item.title}
          src={item.thumbnail}
        />
      </div>
      <div className="mx-2 flex flex-col">
        <div className="my-2 flex flex-col">
          <Link href={`/products/${id}`} className="whitespace-nowrap text-xl">
            {item.title}
          </Link>
          <h2 className=" my-4 text-lg capitalize">{item.quantity} pics </h2>
        </div>
      </div>
    </div>
  );
}

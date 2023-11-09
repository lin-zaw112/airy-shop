import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ItemCard({
  id,
  title,
  price,
  thumbnail,
  description,
  category,
}) {
  return (
    <Link
      href={`/products/${id}`}
      className="group flex h-36 w-full flex-row items-center overflow-hidden rounded-2xl shadow sm:h-96 sm:w-56 sm:flex-col md:w-60"
    >
      <div className="relative h-44 w-full overflow-hidden sm:h-64">
        <Image
          src={thumbnail}
          alt={description}
          fill
          sizes="80vw"
          className="object-cover object-center transition group-hover:scale-110"
        />
      </div>
      <div className=" relative h-full w-full justify-center px-4 py-8 font-sans uppercase backdrop-blur-sm sm:h-48">
        <h2 className="line-clamp-2 text-lg sm:text-lg">{title}</h2>
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

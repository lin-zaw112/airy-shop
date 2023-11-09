import { CartSlice, useDispatch, useSelector } from "@/lib/redux";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Card({ id }) {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.Cart.carts);
  const [item] = carts.filter((item) => item.id === id);
  const increaseQuantity = () => {
    dispatch(CartSlice.actions.addToCart(item));
  };
  const decreaseQuantity = () => {
    dispatch(CartSlice.actions.removeFromCart(item));
  };

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
      <div className="flex flex-col">
        <div className="my-2 flex flex-col">
          <Link href={`/products/${id}`} className="text-xl">
            {item.title}
          </Link>
          <h2>
            {item.quantity} pics X {item.price} = {item.total} $
          </h2>
        </div>
        <div className="flex gap-3 ">
          <button
            className="border bg-neutral-950 px-5 py-1 uppercase text-neutral-50 transition duration-500 active:bg-neutral-50 active:text-neutral-950"
            onClick={increaseQuantity}
          >
            add
          </button>
          <button className="border px-5 py-1" onClick={decreaseQuantity}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

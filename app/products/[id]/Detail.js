"use client";
import React from "react";
import { range } from "underscore";

import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as ActiveStarIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import { useDispatch, CartSlice, UiSlice, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";

export default function Detail({ product }) {
  const { title, brand, description, rating, price, id, thumbnail } = product;
  const dispatch = useDispatch();
  const hasItemInCart = useSelector((state) => state.Cart.hasItem);
  const router = useRouter();
  const addToCartHandler = () => {
    dispatch(
      CartSlice.actions.addToCart({ title, brand, price, id, thumbnail }),
    );
  };

  return (
    <div className="mx-4 md:mx-8 md:mb-auto">
      <h1 className="relative mx-4 mt-3 text-3xl before:absolute before:-left-4 before:top-1/2 before:h-full before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-yellow-500 md:m-8 md:mb-0 lg:text-4xl">
        {title}
      </h1>
      <span className="mx-4 text-gray-500 lg:text-lg">
        from {brand.toUpperCase()}
      </span>

      <div className="mx-5 my-4">
        <p className=" leading-relaxed md:text-lg lg:text-xl">{description}</p>
        <div
          className="relative my-2 flex w-fit flex-row before:absolute before:-right-28 before:hover:content-[attr(ratings)] md:before:text-lg"
          ratings={`${rating} Ratings`}
        >
          {range(5).map((i) => {
            return i + 1 >= rating ? (
              <StarIcon className="h-6 w-6 md:h-8 md:w-8 " key={i} />
            ) : (
              <ActiveStarIcon
                className="h-6 w-6 text-yellow-400 md:h-8 md:w-8"
                key={i}
              />
            );
          })}
        </div>
        <h3 className="justify-center text-4xl lg:text-5xl">
          $
          <span className=" text-xl md:text-2xl lg:text-3xl">
            &nbsp;{price}
          </span>
        </h3>
      </div>
      <div className="flex flex-row justify-center md:my-10 md:gap-12 lg:my-16">
        <Button handler={addToCartHandler} active>
          Add to Cart +
        </Button>
        <Button
          handler={() => {
            router.push("/Checkout");
          }}
          disabled={!hasItemInCart}
        >
          Check out
        </Button>
      </div>
    </div>
  );
}

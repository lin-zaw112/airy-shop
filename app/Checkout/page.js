"use client";
import { useSelector, sendCartData, useDispatch } from "@/lib/redux";
import React from "react";
import Card from "./Card";
import Button from "../products/[id]/Button";

export default function Page() {
  const Items = useSelector((state) => state.Cart.carts);
  const total = useSelector((state) => state.Cart.total);
  const hasItemInCart = useSelector((state) => state.Cart.hasItem);

  const dispatch = useDispatch();
  const CheckoutCart = () => {
    dispatch(sendCartData(Items));
  };
  return (
    <main className="mx-auto my-12 w-5/6 overflow-hidden px-4 py-10 shadow md:w-2/4 lg:w-1/4">
      <div className="flex flex-col gap-3 ">
        {Items.map((item) => (
          <Card key={item.id} id={item.id} />
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="p-2">
          Total Price : <span className="text-lg">{total} $</span>
        </h2>

        <Button
          className="h-full w-full"
          active
          disabled={!hasItemInCart}
          handler={CheckoutCart}
        >
          Place Order
        </Button>
      </div>
    </main>
  );
}

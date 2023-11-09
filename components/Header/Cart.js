"use client";
import Card from "./Card";
import { useSelector } from "@/lib/redux";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import React, { useEffect, useState } from "react";

const animation = {
  name: "Slide down",
  variants: {
    initial: {
      opacity: 0,
      top: "-100%",
      height: 0,
    },
    animate: {
      top: 48, // px
      height: "auto",
      opacity: 1,
    },
    exit: {
      top: "-100%",
      height: 0,
      opacity: 0,
    },
  },
};

export default function Cart({ handler }) {
  const [effect, setEffect] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const itemsQuantity = useSelector((state) => state.Cart.itemsQuantity);
  const items = useSelector((state) => state.Cart.carts);
  useEffect(() => {
    setEffect(true);
  }, [itemsQuantity]);

  return (
    <div className="relative">
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <button
            count={itemsQuantity}
            onClick={() => {
              handler();
              setEffect(true);
              setOpen((prev) => !prev);
            }}
            onAnimationEnd={() => setEffect(false)}
            className={`relative  ${
              effect && "animate-wiggle"
            } before:absolute before:top-0 before:h-5 before:w-5 before:rounded-full before:bg-yellow-500 before:font-sans before:text-sm before:content-[Attr(count)] hover:animate-wiggle `}
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </button>

          {isOpen && (
            <m.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animation.variants}
              key="cartLists"
              className="absolute right-0 top-12 bg-gray-50/80 backdrop-blur-lg"
            >
              {items.map((item) => (
                <m.div
                  key={item.id}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={animation.variants}
                >
                  <Card id={item.id} key={items.id} />
                </m.div>
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}

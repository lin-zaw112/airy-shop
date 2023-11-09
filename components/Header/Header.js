"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  AnimatePresence,
  m,
  LazyMotion,
  domAnimation,
  motion,
} from "framer-motion";
import NavItem from "./NavItem";
import { useDispatch, UiSlice } from "@/lib/redux";
import Cart from "./Cart";

const animation = {
  name: "Slide Right",
  variants: {
    initial: {
      right: "-100%",
    },
    animate: {
      right: 0,
    },
    exit: {
      right: "-100%",
    },
  },
};

export default function Header() {
  const [isMenuOpen, SetMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 z-10 flex h-16 w-screen items-center justify-between border-b border-gray-400 bg-neutral-50 px-4">
      <h1 className="font-serif text-4xl font-semibold">
        <Link href="/">
          Airy
          <sapn className="font-sans text-lg font-bold">Shop</sapn>
        </Link>
      </h1>
      <div className="z-50 flex items-center space-x-2">
        <Cart
          handler={() => {
            SetMenu(false);
            dispatch(UiSlice.actions.toggleCart());
          }}
        />
        <input
          type="checkbox"
          name="menu"
          id="menu"
          className="peer hidden"
          checked={isMenuOpen}
          onChange={() => {
            SetMenu((prev) => !prev);
          }}
        />
        <label htmlFor="menu">
          <AnimatePresence mode="sync">
            {isMenuOpen ? (
              <motion.svg
                initial={{ rotate: "90deg" }}
                animate={{
                  rotate: "0deg",
                  transitionEnd: { display: "none" },
                }}
                exit={{ rotate: "90deg" }}
                className="h-8 w-8 flex-none pb-1"
                key="close"
              >
                <XMarkIcon />
              </motion.svg>
            ) : (
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{ opacity: 0, display: "none" }}
                className=" h-8 w-8 flex-none pb-1"
                key="open"
              >
                <Bars3Icon />
              </motion.svg>
            )}
          </AnimatePresence>
        </label>
      </div>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <m.div className="absolute left-0 top-0 flex h-screen w-screen">
              <m.div
                className="absolute left-0 top-0 h-screen w-screen "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onClick={() => {
                  SetMenu(false);
                }}
              />

              <m.div
                initial="initial"
                animate="animate"
                exit="exit"
                key="menu"
                variants={animation.variants}
                className="absolute right-0 top-0 flex h-screen w-screen bg-gray-500/80 backdrop-blur-lg md:w-96"
              >
                <nav className="mt-10 h-full w-full p-6 font-sans uppercase">
                  <NavItem
                    link={"/category/"}
                    menuToggle={() => {
                      SetMenu((prev) => !prev);
                    }}
                  />
                </nav>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}

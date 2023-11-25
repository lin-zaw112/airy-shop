"use client";
import Button from "@/app/products/[id]/Button";
import React, { useEffect, useState } from "react";
import { random } from "underscore";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const getRandomUser = async () => {
  const data = await fetch(
    `https://dummyjson.com/users/${random(100)}?select=username,password,email`,
  );
  return await data.json();
};

export default function Page() {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();
  useEffect(() => {
    getRandomUser().then((data) => setUser(data));
  }, []);
  const SignIn = async () => {
    const data = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        expiresInMins: 60,
      }),
    });
    const user = await data.json();
    setCookie("jwt", user.token);
    router.refresh();
  };
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="h-4/5 w-2/4 rounded-lg px-20 py-16 shadow">
        <h1 className="text-center font-serif text-3xl uppercase">
          Login to an account
        </h1>
        <div className="mx-auto mt-8 max-w-md">
          <div className=" my-10 grid grid-cols-1  gap-6">
            <label htmlFor="username" className="block">
              <span className="capitalize text-gray-700">Name</span>
              <input
                type="text"
                id="username"
                className="mt-0 block w-full border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0"
                value={user.username}
              />
            </label>
            <label htmlFor="password" className="block">
              <span className="capitalize  text-gray-700">password</span>
              <input
                type="password"
                id="password"
                className=" mt-0 block w-full border-0 border-b-2 border-gray-200 px-0.5 focus:border-black focus:ring-0"
                value={user.password}
              />
            </label>
            <Button active className="w-1/2 place-self-center" handler={SignIn}>
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

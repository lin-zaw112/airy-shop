import Link from "next/link";
import React from "react";

async function getCategoriesFromApi() {
  const data = await fetch("https://dummyjson.com/products/categories");
  return await data.json();
}

export default async function layout({ children }) {
  const categories = await getCategoriesFromApi();
  return (
    <main className="flex flex-row">
      <div className="sr-only top-16 m-2 h-screen overflow-hidden rounded-lg shadow md:not-sr-only md:sticky md:w-2/5 lg:w-1/5 ">
        <h3 className="mx-5 my-2 text-lg font-semibold uppercase">
          Categories
        </h3>
        <ul className="mx-5 h-1/2 overflow-scroll rounded border-2 uppercase">
          {categories.map((cat) => (
            <li key={cat} className="">
              <Link
                href={`/category/${cat}`}
                className="block w-full p-2 shadow"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mx-5 my-2 flex h-full flex-col overflow-hidden md:mx-0 md:w-3/5 md:rounded-lg md:shadow lg:w-4/5">
        {children}
      </div>
    </main>
  );
}

import ItemCard from "@/components/ItemCard/ItemCard";
import React from "react";
import Paginate from "./Paginate";

const getProducts = async (page) => {
  console.log(`https://dummyjson.com/products?limit=20&skip=${20 * page}`);
  const data = await fetch(
    `https://dummyjson.com/products?limit=20&skip=${20 * page}`,
  );
  return await data.json();
};
export default async function Page({ searchParams }) {
  const page = searchParams.page ?? "0";
  const products = await getProducts(page);
  if (products.length <= 0)
    return (
      <div className="relative m-2 flex h-full w-4/5 flex-col overflow-hidden rounded-lg shadow">
        <h1> We are trying to get more product for you</h1>
      </div>
    );
  return (
    <div className="relative m-2 flex h-full w-4/5 flex-col overflow-hidden rounded-lg shadow">
      <div className="flex w-full flex-row flex-wrap justify-around gap-3 overflow-y-scroll">
        {products.products.map((product) => (
          <ItemCard
            id={product.id}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
            thumbnail={product.thumbnail}
            key={product.id}
          />
        ))}
      </div>
      <Paginate pageCount={4} />
    </div>
  );
}

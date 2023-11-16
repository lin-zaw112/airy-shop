import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { random } from "underscore";

const getProducts = async function () {
  const randomNum = random(0, 80);
  const data = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${randomNum}&select=price,title,description,id,thumbnail,category`,
  );
  const products = await data.json();
  return products.products;
};
export default async function Overview() {
  const products = await getProducts();
  return (
    <div className=" mx-1 mt-12 flex flex-col flex-wrap justify-around gap-1 sm:flex-row sm:gap-3 md:mx-10 md:justify-center lg:mx-32 xl:justify-start">
      {products.map((product) => (
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
  );
}

import React from "react";
import Paginate from "../Paginate";
import Card from "../Card";
const getProducts = async (page, category) => {
  console.log(
    `https://dummyjson.com/products/category/${category}?limit=20&skip=${
      20 * page
    }`,
  );
  const data = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=20&skip=${
      20 * page
    }`,
  );
  const products = await data.json();
  return products;
};
export default async function Page({ params, searchParams }) {
  const page = searchParams.page ?? "0";
  const products = await getProducts(page, params.id);
  return (
    <div className="m-2 flex max-h-max w-4/5 flex-row flex-wrap justify-center  gap-5 rounded-lg p-5 shadow">
      {products.products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
      <Paginate pageCount={products.total / products.limit} />
    </div>
  );
}

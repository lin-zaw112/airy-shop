import Gallery from "@/components/Gallery/Gallery";
import React from "react";
import Detail from "./Detail";
import { cookies } from "next/headers";

export default async function page({ params }) {
  const { id } = params;
  const getProductById = async (id) => {
    const { _, value: token } = cookies().get("jwt");
    const data = await fetch(`https://dummyjson.com/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return await data.json();
  };
  const product = await getProductById(id);
  console.log(product);
  return (
    <main>
      <div className="h-screen md:flex md:h-fit md:flex-row md:justify-between lg:mx-auto lg:w-5/6">
        <Gallery images={product.images} title={product.title} />
        <Detail product={product} />
      </div>
    </main>
  );
}

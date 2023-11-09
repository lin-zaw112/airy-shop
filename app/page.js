import Categories from "@/components/Category/Categories";
import Slider from "@/components/Poster/Slider";
import Overview from "@/components/overview/Overview";
import Image from "next/image";
import Link from "next/link";
import { sample } from "underscore";

async function getCategoriesFromApi() {
  const data = await fetch("https://dummyjson.com/products/categories");
  return await data.json();
}

export default async function Home() {
  const categories = await getCategoriesFromApi();
  return (
    <main className="">
      <div className="max-w-2xl overflow-hidden sm:mx-auto md:overflow-auto">
        <Categories categoryList={sample(categories, 3)} />
      </div>
      <div className="mx-4 max-w-2xl font-serif sm:mx-auto">
        <Slider>
          <div className="relative grid h-full w-full max-w-2xl place-content-center overflow-hidden rounded-lg">
            <Image
              src="/75precentDiscont.png"
              alt="blackFriday50%off"
              fill
              sizes="50vw"
              className="object-contain object-center md:object-cover"
            />
          </div>
          <div className="relative grid h-full w-full max-w-2xl place-content-center overflow-hidden rounded-lg">
            <Image
              src="/Black-Friday-50-percent-off.png"
              alt="blackFriday50%off"
              fill
              sizes="50vw"
              className="object-contain object-center md:object-cover"
            />
          </div>
        </Slider>
      </div>
      <Overview />
      <div className="flex w-full justify-center py-4">
        <Link
          href="/category?page=2"
          className="bg-neutral-950 px-6 py-2 text-neutral-50"
        >
          Next
        </Link>
      </div>
    </main>
  );
}

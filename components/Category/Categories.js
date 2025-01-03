import React from "react";
import Button from "./Button";
export default function Categories({ categoryList }) {
  console.log(categoryList);

  return (
    <div
      className="flex flex-row flex-nowrap justify-around space-x-2 overflow-auto p-3
     [@media(max-width:767px)]:scrollbar-hide"
    >
      {categoryList.map((category) => (
        <Button key={category.name} category={category.name}>
          {category.name}
        </Button>
      ))}
      <Button key="more" category="">
        more
      </Button>
    </div>
  );
}

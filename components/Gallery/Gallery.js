"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Gallery({ images, title }) {
  const [currentImage, setImage] = useState(images.at(0));
  return (
    <div className="h-1/2 w-screen md:w-1/2">
      <div className="relative box-border h-3/4 w-full overflow-hidden rounded-lg border-8 border-neutral-50 md:h-96">
        <Image
          src={currentImage}
          alt={title}
          fill
          sizes="100vw"
          className="h-full w-full rounded-lg object-contain object-center"
        />
      </div>
      <div className="flex w-full flex-row justify-evenly gap-2 py-2">
        {images.map((image, i) => {
          return (
            <div
              onClick={() => {
                setImage(image);
              }}
              key={i}
              className="relative h-24 w-32 cursor-pointer overflow-hidden rounded-lg"
            >
              <Image src={image} alt={title} fill sizes="10vw" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

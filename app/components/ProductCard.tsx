"use client";

// import Image from "next/image";
import React from "react";
// import { Button } from "./Button";
import { ImageCarousel } from "./Carousel";

export const ProductCard = ({
  id,
  title,
  description,
  cost,
  images,
}: // images,
{
  id: number;
  title: string;
  description: string;
  cost: number;
  images: string[];
}) => {
  return (
    <div
      className="w-80 min-h-52 m-auto flex flex-col items-center border  rounded-lg shadow md:flex-row md:max-w-2xl  border-gray-700 bg-gray-800 md:w-full"
      key={id}
    >
      {/* {images.map((i) => (
        <img
          key={uuidv4()}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={i}
          alt=""
        />
      ))} */}

      <ImageCarousel className="max-w-xs" images={images} />
      {/* <Image
        width={5}
        height={5}
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={images[0]}
        alt=""
      /> */}
      <div className="flex flex-col w-full min-h-10  p-4 leading-normal justify-between md:min-h-[240px]">
        <div className="flex flex-col justify-between">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
            {title}
          </h5>
          {description && (
            <p className="mb-3 font-normal  text-gray-400">
              {description.length > 150
                ? description.substring(0, 150) + "..."
                : description}
            </p>
          )}
        </div>
        <div className="flex justify-between w-full">
          <span className="text-3xl font-bold  text-white">
            {cost / 1_000_000_000} SOL
          </span>
          <a
            href={`/products/${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

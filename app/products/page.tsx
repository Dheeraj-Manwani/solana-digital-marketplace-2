"use server";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getProducts } from "@/actions";
import { ProductCard } from "../components/ProductCard";

export default async function Products() {
  const products = await getProducts();
  return (
    <section className=" pt-24 pb-24 w-full">
      <div className="w-full flex justify-center">
        <h1 className="mt-2 mb-8 text-2xl font-bold leading-none tracking-tight md:text-5xl lg:text-4xl text-white">
          Buy some{" "}
          <span className="underline underline-offset-3 decoration-4 decoration-blue-600">
            Goodness
          </span>
        </h1>
      </div>
      <div className="flex flex-col gap-8 container m-auto" key={uuidv4()}>
        {products.map((pro) => (
          <ProductCard
            key={pro.id}
            id={pro.id}
            title={pro.title}
            cost={pro.cost}
            description={pro.description || ""}
            images={pro.images.map((img) => img.imageUrl)}
          />
        ))}
      </div>
    </section>
  );
}

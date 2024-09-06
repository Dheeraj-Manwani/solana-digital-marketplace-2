"use server";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { getProducts } from "@/actions";
import { ProductCard } from "../components/ProductCard";

export default async function Products() {
  const products = await getProducts();
  return (
    <section className=" bg-gray-900 pt-24 pb-24 w-full">
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

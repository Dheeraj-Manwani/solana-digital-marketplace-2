"use client";

import React from "react";
import { Hero } from "@/app/components/Hero";
import { HEADER_DATA } from "@/app/lib/data";

export default function Products() {
  return (
    <Hero
      dataObj={HEADER_DATA.sell}
      linkBtn={{ text: "Start selling", href: "/seller/new" }}
      btn={{ text: "Seller Dashboard", href: "/seller/dashboard" }}
    />
  );
}

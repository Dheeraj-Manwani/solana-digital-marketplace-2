import React from "react";
import { Hero } from "@/app/components/Hero";
import { HEADER_DATA } from "@/app/lib/data";

export default function Home() {
  return <Hero dataObj={HEADER_DATA.home} />;
}

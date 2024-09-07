import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export function ImageCarousel({
  images,
  className = "",
}: {
  images: string[];
  className?: string;
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={twMerge("w-full", className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={img}
                    alt="Product Images"
                    width={800}
                    height={800}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} className="translate-x-5" />
      <CarouselNext variant={"ghost"} className="-translate-x-5" />
    </Carousel>
  );
}

"use client"

import * as React from "react";
import {useRef} from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function VideoCarousel() {
  const videoData = [
    {
      id: 1,
      Image: "/images/show1.png",
      Title: "Movie 1"
    },
    {
      id: 2,
      Image: "/images/show2.png",
      Title: "Movie 2"
    },
    {
      id: 3,
      Image: "/images/show3.png",
      Title: "Movie 3"
    },
    {
      id: 4,
      Image: "/images/show4.png",
      Title: "Movie 4"
    },
    {
      id: 5,
      Image: "/images/show5.png",
      Title: "Movie 5"
    },
    {
      id: 6,
      Image: "/images/show2.png",
      Title: "Movie 2"
    },
    {
      id: 7,
      Image: "/images/show3.png",
      Title: "Movie 3"
    }
  ];

  const plugin = useRef(
    Autoplay({
      playOnInit: true,
      delay: 3000,
    })
  )

  return (
    <>
      <div className=" mt-10 text-gray-600 dark:text-white p-10 ">
        <div className="mb-5">
          <h1 className="text-2xl pb-3">Trending</h1>
          <hr className="bg-white" />
        </div>
        <div>
          <Carousel
            className="w-full "
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
          >
            <CarouselContent className="-ml-1">
              {videoData.map((videoData, index) => (
                <CarouselItem key={index} className=" basis-1/">
                  <Image
                    className="rounded-2xl shadow-md hover:scale-95 ease-in-out duration-300"
                    src={videoData.Image}
                    width={300}
                    height={300}
                    alt={videoData.Title}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div>
              <CarouselPrevious className="ms-5 text-black dark:text-white" />
              <CarouselNext className="me-5 text-black dark:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
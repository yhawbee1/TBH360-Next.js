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
import { movieData } from "@/app/db/movieData";
import Link from "next/link";

export default function VideoCarousel() {
  // const videoData = [
  //   {
  //     id: 1,
  //     Image: "/images/show1.png",
  //     Title: "Movie 1"
  //   },
  //   {
  //     id: 2,
  //     Image: "/images/show2.png",
  //     Title: "Movie 2"
  //   },
  //   {
  //     id: 3,
  //     Image: "/images/show3.png",
  //     Title: "Movie 3"
  //   },
  //   {
  //     id: 4,
  //     Image: "/images/show4.png",
  //     Title: "Movie 4"
  //   },
  //   {
  //     id: 5,
  //     Image: "/images/show5.png",
  //     Title: "Movie 5"
  //   },
  //   {
  //     id: 6,
  //     Image: "/images/show2.png",
  //     Title: "Movie 2"
  //   },
  //   {
  //     id: 7,
  //     Image: "/images/show3.png",
  //     Title: "Movie 3"
  //   }
  // ];

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
              loop: true
            }}
            plugins={[plugin.current]}
          >
            <CarouselContent className="-ml-1">
              {movieData.map((video) => (
                <CarouselItem key={video.id} className=" basis-1/ ">
                  <Link href={`/video/${video.id}`} >
                  <div
                    className="relative h-[537.15px] w-[320px] rounded-lg flex items-end text-white overflow-hidden"
                    style={{
                      backgroundImage: `url("${video.image}")`,
                      backgroundSize: "cover",
                      borderImage:"fill 0 linear-gradient(#0003,#000) 10",
                      borderRadius: "30px",
                    }}
                  >
                    <h1 className="text-2xl p-3 ">{video.title}</h1>
                  </div>
                  </Link>
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

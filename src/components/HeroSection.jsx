"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const plugin = useRef(
    Autoplay({
      playOnInit: true,
      jump: true,
      delay: 6000,
    })
  );

  const HeroDetails = [
    {
      id: 1,
      Header: "Embark on an Epic Odyssey of Endless Streaming Adventures.",
      Description:
        "Dive into a world of blockbusters, cult classics, niche favorites, and exclusive originals. Explore diverse genres,from laugh- out - loud comedies to heart - pounding dramas.",
      Image: "/images/argylle.webp",
    },
    {
      id: 2,
      Header:
        "Stream endless entertainment. Thousands of movies & shows. Dive in!",
      Description:
        "Dive into a world of blockbusters, cult classics, niche favorites, and exclusive originals. Explore diverse genres, from laugh-out-loud comedies to heart-pounding dramas.",
      Image: "/images/rebel-moon.webp",
    },
    {
      id: 3,
      Header:
        "Unleash your inner explorer and discover your next binge-worthy adventure.",
      Description:
        "Dive into a vast library of movies and TV shows, tailored to your tastes. Explore hidden gems, revisit classics, and get recommendations for your next obsession.",
      Image: "/images/beekeeper.jpeg",
    },
  ];

  return (
    <Carousel
      opts={{
        loop: true,
      }}
        plugins={[plugin.current]}
        className="w-full h-full top-14"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent>
          {HeroDetails.map((heroDetail) => (
            <CarouselItem key={heroDetail.id}>
              <section
                style={{
                  background: `url(${heroDetail.Image})`,
                  backgroundBlendMode: "multiply",
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
                className="w-screen h-[70vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center py-4"
              >
                <div className="text-center text-white w-[95%]  md:w-[80%] lg:w-[55%] space-y-3 md:space-y-5 lg:space-y-6">
                  <h1 className="font-bold lg:font-extrabold lg:leading-tight text-4xl md:text-4xl lg:text-5xl">
                    {heroDetail.Header}
                  </h1>
                  <p className=" ">{heroDetail.Description}</p>
                  <button className="bg-[#2567908f] hover:bg-[#215270] transition-all duration-150 rounded-full px-6 py-3">
                    Watch Now
                  </button>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  );
}

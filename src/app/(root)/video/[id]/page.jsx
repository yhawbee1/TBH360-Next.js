'use clirn'
import React from "react";
import { notFound } from "next/navigation";
import { movieData } from "@/app/db/movieData";
import Image from "next/image";
// import Video from "next-video";
// import myVideo from "/videos/The Crush _ Oscar® Nominated Short Film.mp4"; 

async function fetchVideo(id) {
  const video = movieData.find((video) => video.id.toString() === id);
  return video || null;
}

export default async function Page({ params }) {
  const video = await fetchVideo(params.id);

  if (!video) {
    return notFound();
  }

  return (
    <section className="w-full p-10 ">
      <div className="w-full ">
        <iframe
          className="w-full  rounded-md"
          src={video.video}
          title="YouTube video player"
          frameborder="0"
          width="100"
          height="700"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="bg-tbhgreen rounded-md p-4 my-4 flex ">
        
        <div className="flex space-x-4 w-[50%]">
          <div>
            <Image
              src={video.user.image}
              alt={video.user.name}
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">
              {video.user.name}
            </p>
            <p className="text-sm text-gray-300">
              {video.user.subscribers} subscribers
            </p>
          </div>
            <button className="border rounded-3xl px-4 mr-4 text-white">
              Subscribe
            </button>
        </div>
        
        <div className="bg-tbhblue/40 w-[50%] p-3 rounded-md ">
          <div className="flex justify-between ">
            <h1>5,000 Comments</h1>
            <h1>Add Comment</h1>
          </div>
          <hr />
          <div>
            <Image
            ></Image>
          </div>
        </div>

        {/* <h1 className="text-4xl font-bold mt-4">{video.title}</h1>
        <p className="text-xl mt-2">{video.description}</p>
        <p className="text-lg font-semibold">{video.user.name}</p>
        <p className="text-sm text-gray-600">
          {video.user.subscribers} subscribers
        </p> */}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return movieData.map((video) => ({
    id: video.id.toString()
  }));
}

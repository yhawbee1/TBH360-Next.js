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
      <iframe
        src={video.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <h1 className="text-4xl font-bold mt-4">{video.title}</h1>
      <p className="text-xl mt-2">{video.description}</p>
      <div className="mt-4">
        <Image
          src={video.user.image}
          alt={video.user.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-lg font-semibold">{video.user.name}</p>
        <p className="text-sm text-gray-600">
          {video.user.subscribers} subscribers
        </p>
      </div>
      <div className="mt-4">
        <Image
          src={video.user.comment.image}
          alt={video.user.comment.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-lg font-semibold">{video.user.comment.name}</p>
        <p className="text-sm text-gray-600">{video.user.comment.date}</p>
        <p className="text-md mt-2">{video.user.comment.comment}</p>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return movieData.map((video) => ({
    id: video.id.toString()
  }));
}

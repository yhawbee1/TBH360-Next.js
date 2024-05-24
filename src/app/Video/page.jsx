import Video from "next-video";
import getStarted from "/videos/hurrry.mp4";

export default function Page() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/cW8VLC9nnTo?si=gjIVnhBfy8fy8UBY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}

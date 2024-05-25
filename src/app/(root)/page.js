import Episode from "@/components/Episode";
import HeroSection from "@/components/HeroSection";
import ThemeSwitch from "@/components/ThemeSwitcher";
import RecommendedVideos from "@/components/RecommendedVideos";
import VideoCarousel from "@/components/VideoCarousel";
import { Suspense } from "react";
import SkeletonCard from "@/components/SkeletonCard";



export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Suspense fallback={<SkeletonCard/>}>
      <VideoCarousel/>
      </Suspense>
      <RecommendedVideos/>
      <Episode/>
    </main>
  );
}

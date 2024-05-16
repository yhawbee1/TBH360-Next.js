import Episode from "@/components/Episode";
import HeroSection from "@/components/HeroSection";
import ThemeSwitch from "@/components/ThemeSwitcher";
import RecommendedVideos from "@/components/RecommendedVideos";
import VideoCarousel from "@/components/VideoCarousel";



export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <VideoCarousel/>
      <RecommendedVideos/>
      <Episode/>
    </main>
  );
}

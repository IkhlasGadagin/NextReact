import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   {/* <h1 className="text-3xl text-center">Ikhlas and Next.js</h1> */}
   <HeroSection />
   <FeaturedCourses />
  </main>
  )
}

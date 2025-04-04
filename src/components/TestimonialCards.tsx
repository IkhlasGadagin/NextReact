"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/cn";

const testimonials = [
    {
      quote:
        "This platform has completely transformed how I collaborate with my band. No more emailing audio files back and forth!",
      name: "Sarah Mitchell",
      title: "Lead Vocalist, The Echoes",
    },
    {
      quote:
        "Real-time syncing is a game changer. It feels like we’re all in the same room even though we’re in different cities.",
      name: "Jamal Rivera",
      title: "Music Producer & Sound Engineer",
    },
    {
      quote:
        "Being able to track the entire history of our projects has saved us so many times. It's like version control for creativity!",
      name: "Emily Zhao",
      title: "Composer & Arranger",
    },
    {
      quote:
        "The loop and sample library is massive! I always find fresh inspiration when I feel stuck.",
      name: "Leo Johnson",
      title: "Independent Beat Maker",
    },
    {
      quote:
        "As a drummer, timing is everything. This platform delivers on low-latency audio sharing like no other I've tried.",
      name: "Carlos Mendes",
      title: "Drummer, Session Artist",
    },
    {
      quote:
        "What sets this apart is how intuitive everything feels. I was up and running with my first track in under 10 minutes.",
      name: "Nina Kapoor",
      title: "Singer-Songwriter",
    },
    {
      quote:
        "Our remote jam sessions have become the highlight of my week. The platform just works flawlessly.",
      name: "Daniel Nguyen",
      title: "Guitarist, Indie Collective",
    },
    {
      quote:
        "It's like Google Docs for music production. Total game changer for remote collaborations.",
      name: "Rachel Kim",
      title: "Electronic Music Producer",
    },
    {
      quote:
        "I love being able to rewind and compare previous versions of our mixes. Super helpful during final mastering!",
      name: "Mark Thompson",
      title: "Audio Mastering Engineer",
    },
    {
      quote:
        "From brainstorming loops to final tracks, this platform supports the entire creative journey. I’m hooked!",
      name: "Priya Das",
      title: "Multi-instrumentalist & Educator",
    },
  ];
  
const TestimonialCards = () => {
   /*  return (
        <div className="h-[40rem] w-full dark:bg-gray-800
                        dark:bg-grid-white/[0.2] relative flex flex-col 
                        items-center justify-center overflow-hidden">
            <h2 className="text-center mt-10 text-3xl">Here our Harmony: Voice of Success</h2>
         <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                />
            </div>
         </div>
          
        </div>
      ); */
      return (
        <>
        <h2 className="text-center mt-10 text-3xl">Here our Harmony: Voice of Success</h2>
        <div className="relative flex h-[30rem] w-full items-center justify-center bg-white dark:bg-black">

          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                />
            </div>
          </p>
        </div>
        </>
      );  
}

export default TestimonialCards
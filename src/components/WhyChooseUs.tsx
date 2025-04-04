"use client";
import React from "react";
// import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// const image1 = "/images/ilogo.png";

const music_content = [
    {
      title: "Collaborative Jamming",
      description:
        "Jam together with your bandmates, producers, or collaborators in real time. Whether you're across the street or across the globe, our platform lets you create, share, and refine your music in perfect harmony.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Jamming
        </div>
      ),
    },
    {
      title: "Real-Time Sound Sync",
      description:
        "Hear changes as they happen. With our real-time sync feature, every note, beat, and lyric update is instantly reflected for everyone. Forget version mismatches and keep your creative flow uninterrupted.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          {/* <Image
            src={image1}
            width={100}
            height={100}
            className="h-full w-full object-cover"
            alt="real-time music sync"
          /> */}
          Musical instrument data
        </div>
      ),
    },
    {
      title: "Track History",
      description:
        "Keep a complete timeline of your music production journey. Revisit earlier versions, compare different takes, and restore what works best. Our version control for music helps you stay organized and creative.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Track History
        </div>
      ),
    },
    {
      title: "Endless Inspiration",
      description:
        "Explore loops, samples, and beats contributed by a vibrant community of creators. Never run out of ideas with access to an ever-growing library of sounds to spark your next masterpiece.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Endless Inspiration
        </div>
      ),
    },
  ];
  
  
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={music_content} contentClassName="" />
    </div>
  )
}

export default WhyChooseUs
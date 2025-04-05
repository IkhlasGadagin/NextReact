"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "./ui/moving-border";
import Link from 'next/link'
import SparklesUnder from "./SparklesUnder";

const SpotLightNew = () => {
  return (
<div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <div className='p-4 relative z-10 w-full text-center'>
            {/* <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"           
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music cources and transform your 
                musical journey today. Whether you're a beginner or looking
                to refine your skills, we've got you covered.
            </p> */}
            <SparklesUnder/>
            {/* <div className="mt-4">
                <Link href="/courses">
                <Button
                 borderRadius="1.75rem">Explore Courses</Button>
                </Link>
            </div> */}
        </div>
      </div>
    </div>  )
}

export default SpotLightNew
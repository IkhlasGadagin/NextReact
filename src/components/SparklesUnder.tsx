"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/moving-border";
import Link from 'next/link'
const SparklesUnder = () => {
    const words = [" Music", "Art", "Happiness", "Peace"];
    return (
        <div className="h-[30rem] mt-16 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1
                className="md:text-7xl lg:text-6xl mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            > Welcome the World of <FlipWords words={words} /></h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <div className="mt-4">
               {/* <div className="text-center text-3xl mb-4 font-bold
               bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
               md:text-xl lg:text-3xl
               ">Dive into our comprehensive music cources and transform your 
                musical journey today. Whether you're a beginner or looking
                to refine your skills, we've got you covered</div>  */}
                <Link href="/courses">
                <Button
                 borderRadius="1.75rem">Explore Courses</Button>
                </Link>
            </div>
        </div>
    )
}

export default SparklesUnder
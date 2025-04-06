"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/moving-border";
import Link from 'next/link'

const SparklesUnder = () => {
    const words = [" Music", "Art", "Happiness", "Peace"];
    return (
        <div className="h-[20rem] md:h-[25rem] mt-16 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1
                className="text-3xl sm:text-xl md:text-5xl lg:text-6xl  md:mt-0 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            > Welcome to the World of <FlipWords words={words} /></h1>
            <div className="w-[35rem] sm:w-[40rem] h-40 relative"> {/* Decreased the width on smaller screens */}
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
                <div className="absolute inset-0 w-[90%] sm:w-[70%] h-full bg-black  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> {/* Decreased the width */}
            </div>
            <div className="mt-10">
                <Link href="/courses">
                    <Button
                        borderRadius="1.75rem">Explore Courses</Button>
                </Link>
            </div>
        </div>
    )
}

export default SparklesUnder;

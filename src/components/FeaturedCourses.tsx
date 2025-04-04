'use client'
import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';

interface CourseData {
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: {
        name: string;
        bio: string;
    };
    isFeatured: boolean;
    categories: string[];
    image: string;
    lessons: {
        title: string;
        slug: string;
        videoUrl: string;
        description: string;
    }[];
}
const FeaturedCourses = () => {
    const featuredCourses = courseData.filter((course: CourseData) => course.isFeatured===false)
  return (
    <div 
    className='py-12 bg-black'
    >
     <div>  
        <div className="text-center">
            <h2 className="text-4xl font-bold text-white-600">Featured Courses</h2>
            <p className="text-neutral-300 text-2xl text-teal-600">Learn With the Best</p>
        </div>
     </div>
     <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {featuredCourses.map((course: CourseData) => (
                <div key={course.slug} className="flex justify-center">
                    <BackgroundGradient
                    className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-800 
                    overflow-hidden h-full max-w-sm'
                    >
                        <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                            <p className='text-lg sm:text-xl dark:text-white font-bold text-teal-600'>{course.title}</p>
                            <p className='text-neutral-300 dark:text-white'>{course.description}</p>
                            <Link href={`/courses/${course.slug}`} className="inline-block py-3 px-6 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors">
                                Learn more
                            </Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}

        </div>
     </div>
     <div className='mt-20 text-center'>
        <Link href="/courses" className="inline-block py-3 px-6 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors">
            View All Courses
        </Link>
     </div>
    </div>
  )
}

export default FeaturedCourses
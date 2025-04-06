'use client';
import React from 'react';
import courseData from '../data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface CourseData {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.filter((course: CourseData) => course.isFeatured);

  return (
    <div className="py-12 bg-black px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Courses</h2>
        <p className="text-lg sm:text-xl text-teal-300 mt-2">Learn With the Best</p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course: CourseData) => (
            <div key={course.slug} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-800 overflow-hidden w-full max-w-sm h-full">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow text-center">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-teal-600 dark:text-white">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-white mt-2">
                      {course.description}
                    </p>
                    <p className="text-sm text-neutral-400 dark:text-neutral-300 mt-1 italic">
                      Instructor: {course.instructor}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-block py-2 px-5 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/courses"
          className="inline-block py-3 px-6 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;

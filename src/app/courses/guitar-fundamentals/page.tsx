import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white mt-20">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center">
        <div className="relative w-full">
          <img
            src="/instruments/guitarlearn.jpg"
            alt="Guitar Fundamentals"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
          Master Your Guitar
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
          Start your journey into guitar mastery with our fundamentals course. Learn the basics, practice with ease, and grow into a confident player.
        </p>

        {/* Short Learning Details */}
        <ul className="text-sm md:text-base text-gray-400 list-disc list-inside space-y-2 mb-8">
          <li>🎸 Learn guitar parts & how to hold it</li>
          <li>🎵 Master basic open chords (C, G, D, Em, Am)</li>
          <li>🧠 Understand simple music theory</li>
          <li>⏱ Practice strumming patterns & rhythm</li>
          <li>🎶 Play easy songs within your first week</li>
        </ul>

        <button className="bg-gradient-to-r from-red-500 to-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity w-fit">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default Page;

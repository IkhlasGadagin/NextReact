import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white mt-20">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center">
        <div className="relative w-full">
          <img
            src="/instruments/bluelearn.jpg" // Replace with actual image path
            alt="Blues Guitar Techniques"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
          Blues Guitar Techniques
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
          Explore the soul of blues music with expressive guitar techniques. From emotional bends to gritty licks, master the timeless art of blues guitar playing.
        </p>

        {/* Learning Details */}
        <ul className="text-sm md:text-base text-gray-400 list-disc list-inside space-y-2 mb-8">
          <li>🎵 12-bar blues structure & shuffle rhythms</li>
          <li>🎸 String bending, slides & vibrato techniques</li>
          <li>🎶 Classic blues licks and turnaround riffs</li>
          <li>🎼 Improvising with minor & major pentatonic scales</li>
          <li>🎤 Playing with feeling & phrasing like the legends</li>
        </ul>

        <button className="bg-gradient-to-r from-yellow-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity w-fit">
          Start Playing
        </button>
      </div>
    </div>
  );
};

export default Page;

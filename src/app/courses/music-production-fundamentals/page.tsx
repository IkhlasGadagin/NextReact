import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white mt-20">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center">
        <div className="relative w-full">
          <img
            src="/instruments/musicproduction.jpg" // Make sure this image exists in your public folder
            alt="Music Production Fundamentals"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
          Music Production Fundamentals
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
          Dive into the world of music production. Learn how to turn ideas into finished tracks using professional techniques and industry-standard tools.
        </p>

        {/* Learning Details */}
        <ul className="text-sm md:text-base text-gray-400 list-disc list-inside space-y-2 mb-8">
          <li>🎚 Understanding DAWs (FL Studio, Ableton, Logic Pro)</li>
          <li>🎛 Recording, editing, and mixing audio</li>
          <li>🎵 Using MIDI & virtual instruments</li>
          <li>🎧 EQ, compression, and mastering essentials</li>
          <li>🎼 Creative workflow & track arrangement tips</li>
        </ul>

        <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity w-fit">
          Start Producing
        </button>
      </div>
    </div>
  );
};

export default Page;

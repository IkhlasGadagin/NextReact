import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white mt-20">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center">
        <div className="relative w-full">
          <img
            src="/instruments/pianolearn.jpg" // Replace with your actual image path
            alt="Piano for Beginners"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Piano for Beginners
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
          Begin your musical journey with the piano. Learn the basics of melody, rhythm, and harmony in an easy-to-follow format designed for first-time players.
        </p>

        {/* Learning Details */}
        <ul className="text-sm md:text-base text-gray-400 list-disc list-inside space-y-2 mb-8">
          <li>🎼 Understanding the keyboard layout</li>
          <li>🎹 Playing simple melodies and chords</li>
          <li>🧠 Reading sheet music and rhythms</li>
          <li>🎶 Basic finger exercises and posture</li>
          <li>🎵 Playing popular beginner songs</li>
        </ul>

        <button className="bg-gradient-to-r from-white to-gray-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity w-fit">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default Page;

import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white mt-20">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center">
        <div className="relative w-full">
          <img
            src="/instruments/vocallearn.jpg" // Make sure this image exists
            alt="Advanced Vocal Techniques"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
          Master Vocal Techniques
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
          Elevate your voice with our advanced vocal techniques course. Designed for experienced singers ready to refine control, expand range, and master performance.
        </p>

        {/* Learning Details */}
        <ul className="text-sm md:text-base text-gray-400 list-disc list-inside space-y-2 mb-8">
          <li>🎤 Breath control & diaphragm support</li>
          <li>🎵 Vocal agility & runs training</li>
          <li>🎼 Resonance tuning & vocal placement</li>
          <li>🧠 Ear training & pitch perfection</li>
          <li>🎙 Stage presence & emotional expression</li>
        </ul>

        <button className="bg-gradient-to-r from-yellow-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity w-fit">
          Start Singing
        </button>
      </div>
    </div>
  );
};

export default Page;

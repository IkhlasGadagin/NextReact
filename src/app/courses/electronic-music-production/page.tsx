import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white mt-20">
      {/* Left side: Image */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center">
        <div className="relative w-full">
          <img
            src="/instruments/electrolearn.jpg" // Replace with actual image path
            alt="Electronic Music Production"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          Electronic Music Production
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
          Create cutting-edge electronic tracks with modern tools and techniques. Learn how to craft powerful beats, design unique sounds, and build professional-quality EDM, techno, house, and more.
        </p>

        {/* Learning Details */}
        <ul className="text-sm md:text-base text-gray-400 list-disc list-inside space-y-2 mb-8">
          <li>🎛 Synthesizer programming & sound design</li>
          <li>🥁 Beat making & drum machine sequencing</li>
          <li>🎚 Mixing and layering electronic elements</li>
          <li>🎵 Creating drops, risers & transitions</li>
          <li>📦 Sampling, looping, and remix techniques</li>
        </ul>

        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity w-fit">
          Start Producing
        </button>
      </div>
    </div>
  );
};

export default Page;

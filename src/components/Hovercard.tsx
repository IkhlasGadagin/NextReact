'use client';
import { HoverEffect } from './ui/card-hover-effect';

export const projects = [
  {
    title: 'Spotify Soundcheck',
    description:
      'An in-depth session on how Spotify supports artists through tools like Spotify for Artists, playlisting strategies, and fan engagement.',
    link: 'https://artists.spotify.com',
  },
  {
    title: 'YouTube Music Masterclass',
    description:
      'Learn how to optimize your presence on YouTube Music, build a global audience, and monetize your music through Content ID.',
    link: 'https://music.youtube.com',
  },
  {
    title: 'Apple Music for Artists Webinar',
    description:
      'Discover how Apple Music empowers musicians with data insights, fan analytics, and creative marketing tools.',
    link: 'https://artists.apple.com',
  },
  {
    title: 'Bandcamp DIY Success Talk',
    description:
      'A webinar focused on independent artist success stories and how to sell music and merchandise directly to fans on Bandcamp.',
    link: 'https://bandcamp.com',
  },
  {
    title: 'SoundCloud Creator Camp',
    description:
      'Join industry experts and creators to explore trends, marketing hacks, and monetization opportunities on SoundCloud.',
    link: 'https://soundcloud.com/creators',
  },
  {
    title: 'Tidal Rising Artist Panel',
    description:
      "A deep dive into Tidal's artist-first approach, featuring rising musicians and tips on maximizing exposure and revenue.",
    link: 'https://tidal.com/forartists',
  },
];

export const Hovercard = () => {
  return (
    <section className="bg-black py-12 px-6 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Workshops & Webinars</h2>
        <p className="text-lg sm:text-xl text-teal-300 mt-2">
          Level up your music career with expert-led sessions
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

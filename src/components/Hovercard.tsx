"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Spotify Soundcheck",
    description:
      "An in-depth session on how Spotify supports artists through tools like Spotify for Artists, playlisting strategies, and fan engagement.",
    link: "https://artists.spotify.com",
  },
  {
    title: "YouTube Music Masterclass",
    description:
      "Learn how to optimize your presence on YouTube Music, build a global audience, and monetize your music through Content ID.",
    link: "https://music.youtube.com",
  },
  {
    title: "Apple Music for Artists Webinar",
    description:
      "Discover how Apple Music empowers musicians with data insights, fan analytics, and creative marketing tools.",
    link: "https://artists.apple.com",
  },
  {
    title: "Bandcamp DIY Success Talk",
    description:
      "A webinar focused on independent artist success stories and how to sell music and merchandise directly to fans on Bandcamp.",
    link: "https://bandcamp.com",
  },
  {
    title: "SoundCloud Creator Camp",
    description:
      "Join industry experts and creators to explore trends, marketing hacks, and monetization opportunities on SoundCloud.",
    link: "https://soundcloud.com/creators",
  },
  {
    title: "Tidal Rising Artist Panel",
    description:
      "A deep dive into Tidal's artist-first approach, featuring rising musicians and tips on maximizing exposure and revenue.",
    link: "https://tidal.com/forartists",
  },
];


export const Hovercard = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
    <HoverEffect items={projects} />
  </div>
  )
}

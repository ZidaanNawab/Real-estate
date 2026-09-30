"use client";

import { useEffect, useRef, useState } from "react";
import { CustomVideoPlayer } from "@/components/ui/CustomVideoPlayer";

interface VideoItem {
  src: string;
  poster: string;
  title: string;
}

const videos: VideoItem[] = [
  {
    src: "/showcase-1.mp4",
    poster: "/images/posters/showcase-1-poster.jpg",
    title: "[PLACEHOLDER — confirm what this video shows, e.g. 'Site Walkthrough']",
  },
  {
    src: "/showcase-2.mp4",
    poster: "/images/posters/showcase-2-poster.jpg",
    title: "[PLACEHOLDER — confirm what this video shows, e.g. 'Project Tour']",
  },
];

/**
 * VideoShowcase — lazy-mounts both CustomVideoPlayer instances via
 * IntersectionObserver. Neither video element exists in the DOM until this
 * section scrolls into view → zero video data fetched on initial page load.
 *
 * Layout:
 *  - Mobile: videos stacked vertically, each up to 90vw wide
 *  - Desktop (md+): two videos side-by-side, each capped at 360px wide
 *    so the 9:16 "reels-style" proportions stay intact and nothing stretches
 *
 * Each video uses CustomVideoPlayer which handles:
 *  - 9:16 aspect-ratio container (no CLS)
 *  - Custom play/pause/mute controls (no native browser controls)
 *  - preload="none" — no network request until user presses play
 */
export function VideoShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/*
        Two-column grid on md+, single column on mobile.
        justify-items-center keeps each narrow 360px video centred in its cell.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {videos.map((video) => (
        <div key={video.src} className="flex flex-col gap-3 w-full" style={{ maxWidth: "360px" }}>

            {inView ? (
              <CustomVideoPlayer
                src={video.src}
                poster={video.poster}
                title={video.title}
              />
            ) : (
              /*
                Pre-mount placeholder: same 9:16 aspect-ratio as the player,
                same max-width — no layout shift when the real player mounts.
              */
              <div
                className="w-full mx-auto bg-navy/10 rounded-2xl flex items-center justify-center"
                style={{ aspectRatio: "9 / 16", maxWidth: "360px" }}
              >
                <div className="text-charcoal/30 text-xs text-center px-4">
                  <div className="w-12 h-12 rounded-full border-2 border-charcoal/20 flex items-center justify-center mx-auto mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  Video loading…
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

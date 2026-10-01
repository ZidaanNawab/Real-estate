"use client";

/**
 * HeroBackgroundVideo
 *
 * Decorative full-bleed hero background video. Rules:
 *  - ONE video downloaded per device: desktop (≥768px) or mobile (<768px).
 *    src is chosen with matchMedia — NOT two <video> elements hidden by CSS.
 *  - autoPlay + muted + loop + playsInline. No controls, no audio.
 *  - preload="metadata" — fetches only enough to show poster, not the full file.
 *  - Fades in from the poster image via opacity transition when the video can play.
 *  - Respects prefers-reduced-motion: shows only the poster, never plays.
 *  - Respects navigator.connection.saveData: shows only the poster on data saver.
 *  - Graceful autoplay failure: play() rejection just keeps the poster visible, no console error.
 *  - Handles viewport resize / orientation change: if breakpoint crosses 768 px the
 *    component swaps src, reloads, and replays.
 *  - aria-hidden + tabIndex={-1}: purely decorative, invisible to assistive tech.
 */

import { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  /** Overlay gradient / dark scrim rendered on top of the video */
  overlayClassName?: string;
}

const MOBILE_BREAKPOINT = 768; // px — matches Tailwind's `md`

// Video sources — compressed (desktop ~2.2 MB, mobile ~2.3 MB).
const DESKTOP_SRC = "/hero-image-bg.mov";
const MOBILE_SRC  = "/hero-image-bg-2.mov";

// Poster images (WebP, instant first paint while video buffers)
const DESKTOP_POSTER = "/images/hero/hero-desktop-poster.webp";
const MOBILE_POSTER  = "/images/hero/hero-mobile-poster.webp";

function getSrc(isMobile: boolean) {
  return isMobile ? MOBILE_SRC : DESKTOP_SRC;
}
function getPoster(isMobile: boolean) {
  return isMobile ? MOBILE_POSTER : DESKTOP_POSTER;
}

export function HeroBackgroundVideo({ overlayClassName }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Start as null — resolved client-side only (avoids SSR mismatch)
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  // Controls opacity: 0 until video canPlay, then fades to 1
  const [videoOpacity, setVideoOpacity] = useState(0);
  // Whether to show video at all (false for reduced-motion / data-saver)
  const [showVideo, setShowVideo] = useState(true);

  // ── 1. Decide on mount: reduced-motion / data-saver / breakpoint ──────────
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShowVideo(false);
      return;
    }
    // Respect data-saver
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const conn = (navigator as any).connection;
    if (conn?.saveData === true) {
      setShowVideo(false);
      return;
    }

    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    setIsMobile(mq.matches);

    // Handle resize / orientation change: swap src if breakpoint crosses
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // ── 2. When isMobile changes (initial resolve or breakpoint flip): load + play ─
  useEffect(() => {
    if (!showVideo || isMobile === null) return;
    const v = videoRef.current;
    if (!v) return;

    // Reset opacity so the fade-in plays again on src swap
    setVideoOpacity(0);

    v.src = getSrc(isMobile);
    v.poster = getPoster(isMobile);
    v.muted = true; // ensure muted even after React rehydration
    v.load();

    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay blocked — poster stays visible, no console error
      });
    };

    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, [isMobile, showVideo]);

  // ── 3. Poster: show the correct one server-side + before video loads ───────
  // isMobile === null means we're on the server or first client render.
  // Use desktop poster as SSR default (most users); it gets corrected immediately
  // after hydration if the client is actually mobile.
  const posterSrc = isMobile === null ? DESKTOP_POSTER : getPoster(isMobile);

  return (
    <>
      {/*
        Poster image — always rendered, acts as the instant background
        while the video is loading (or permanently if video is skipped).
        Rendered as a plain <img> (not next/image fill) because we need it
        behind the video z-stack without any Next.js wrapper div in the way.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
        // Preload hint for the browser
        fetchPriority="high"
      />

      {/* Video — conditionally rendered (never in DOM for reduced-motion/data-saver) */}
      {showVideo && (
        <video
          ref={videoRef}
          // src set imperatively in useEffect — avoids SSR src mismatch
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setVideoOpacity(1)}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            zIndex: 1,
            opacity: videoOpacity,
            transition: "opacity 0.8s ease-in-out",
          }}
        />
      )}

      {/* Dark overlay — on top of everything, keeps hero text readable */}
      <div
        aria-hidden="true"
        className={
          overlayClassName ??
          "absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80"
        }
        style={{ zIndex: 2 }}
      />
    </>
  );
}

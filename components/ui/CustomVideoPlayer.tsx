"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
  poster: string;
  title: string;
}

/**
 * CustomVideoPlayer
 *
 * 9:16 vertical video player with custom minimal controls:
 *  - Click-anywhere play/pause (large center button that fades 1.5s after playback starts)
 *  - Mute/unmute toggle (top-right corner, always visible)
 *  - Thin progress bar at the bottom; click to seek
 *  - Video starts MUTED — user can unmute deliberately via the button
 *  - NO autoPlay, NO loop, preload="none" (network-lazy, data only on user play)
 *  - Fully keyboard-accessible: all controls are <button> elements with aria-labels
 */
export function CustomVideoPlayer({ src, poster, title }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  // Play button is shown when paused; briefly shown then hidden after play starts
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const [progress, setProgress] = useState(0); // 0–100

  // ── Fade helpers (defined first so event handler useEffect can depend on them) ──
  const clearFade = useCallback(() => {
    if (fadeTimerRef.current) {
      clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  }, []);

  const scheduleFade = useCallback(() => {
    clearFade();
    setShowPlayBtn(true);
    // Hide the play button 1.5s after playback starts
    fadeTimerRef.current = setTimeout(() => setShowPlayBtn(false), 1500);
  }, [clearFade]);

  // Clean up fade timer on unmount
  useEffect(() => () => clearFade(), [clearFade]);

  // ── Sync state from native video events ──────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Ensure muted is set imperatively — the `muted` JSX attribute alone can
    // be dropped during React hydration in some browser/version combinations.
    v.muted = true;

    const onPlay = () => {
      setIsPlaying(true);
      scheduleFade();
    };
    const onPause = () => {
      setIsPlaying(false);
      setShowPlayBtn(true);
      clearFade();
    };
    const onEnded = () => {
      setIsPlaying(false);
      setShowPlayBtn(true);
      setProgress(0);
      clearFade();
    };
    const onTimeUpdate = () => {
      if (v.duration > 0) {
        setProgress((v.currentTime / v.duration) * 100);
      }
    };

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    v.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [scheduleFade, clearFade]);

  // ── Actions ───────────────────────────────────────────────────────────────
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {
        setIsPlaying(false);
        setShowPlayBtn(true);
      });
    } else {
      v.pause();
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation(); // don't bubble to the play/pause click handler
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  }, []);

  // Show the play-button briefly on any click when already playing
  const handleContainerClick = useCallback(() => {
    if (isPlaying) {
      setShowPlayBtn(true);
      scheduleFade();
    }
    togglePlay();
  }, [isPlaying, scheduleFade, togglePlay]);

  // Seek on progress bar click
  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
    setProgress(ratio * 100);
  }, []);

  return (
    /*
      Outer shell: constrain max-width so 9:16 videos stay narrow on desktop
      (reels/shorts-style), rather than stretching across the full grid cell.
      mx-auto centres the shell inside its parent grid cell.
    */
    <div className="w-full mx-auto" style={{ maxWidth: "360px" }}>
      {/*
        Aspect-ratio wrapper (9:16 = portrait).
        `position: relative` so overlay controls sit inside it.
        `overflow-hidden` clips everything to the rounded corners.
        `cursor-pointer` signals the whole area is clickable.
      */}
      <div
        className="relative w-full bg-navy/20 rounded-2xl overflow-hidden cursor-pointer select-none"
        style={{ aspectRatio: "9 / 16" }}
        onClick={handleContainerClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleContainerClick();
          }
        }}
        role="group"
        aria-label={title}
        tabIndex={-1}
      >
        {/* ── Video element ─────────────────────────────────────────────── */}
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover"
          aria-label={title}
          onContextMenu={(e) => e.preventDefault()}
        >
          Your browser does not support the video tag.
        </video>

        {/* ── Mute toggle — top-right, always visible ───────────────────── */}
        <button
          onClick={toggleMute}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMute(e);
            }
          }}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        {/* ── Center play/pause button — fades out 1.5s after play starts ─ */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={[
            "absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset",
            showPlayBtn ? "opacity-100" : "opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <span className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
            {isPlaying ? (
              // Pause — two vertical bars
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              // Play — triangle
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 translate-x-0.5" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
        </button>

        {/* ── Progress bar — bottom of video, click to seek ─────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20 cursor-pointer"
          onClick={handleSeek}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Video progress"
          title="Click to seek"
        >
          <div
            className="h-full bg-orange transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

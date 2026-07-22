"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Container from "@/components/layout/Container";

export default function VideoStorySection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section
      id="travel-story"
      className="relative isolate h-[320px] overflow-hidden bg-heading sm:h-[520px] lg:h-[550px]"
      aria-labelledby="travel-story-heading"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        src="/videos/travel-story.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="absolute inset-0 -z-10 bg-heading/55" />

      <Container className="flex h-full items-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-[42rem] text-white">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/85 uppercase sm:text-sm">
            Travel with purpose
          </p>
          <div
            id="travel-story-heading"
            role="heading"
            aria-level="2"
            className="mt-4 max-w-[15ch] text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.02] font-medium tracking-[-0.045em] text-white"
            style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
          >
            Unforgettable journeys, made for you.
          </div>

          <button
            type="button"
            onClick={togglePlayback}
            aria-pressed={!isPlaying}
            className="mt-6 inline-flex items-center gap-4 text-xs font-semibold tracking-[0.12em] uppercase sm:mt-10 sm:text-sm"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-white text-heading transition-transform duration-200 hover:scale-105 sm:size-14">
              {isPlaying ? (
                <Pause aria-hidden="true" className="size-4 fill-current sm:size-5" />
              ) : (
                <Play aria-hidden="true" className="ml-0.5 size-4 fill-current sm:size-5" />
              )}
            </span>
            {isPlaying ? "Pause video" : "Play video"}
          </button>
        </div>
      </Container>
    </section>
  );
}

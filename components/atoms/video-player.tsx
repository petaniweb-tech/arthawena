import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Import Assets //
import play from "@/assets/icons/play.svg";
import pause from "@/assets/icons/pause.svg";

interface VideoPlayerProps {
  videoSrc: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  isMuted: boolean;
  onVideoClick: () => void;
  onVideoEnded: () => void;
}

export default function VideoPlayer({
  videoSrc,
  videoRef,
  isPlaying,
  isMuted,
  onVideoClick,
  onVideoEnded,
}: VideoPlayerProps) {
  return (
    <main
      onClick={onVideoClick}
      className="flex items-center w-full h-screen justify-center origin-center relative"
    >
      <video
        ref={videoRef}
        muted={isMuted}
        loop={false}
        controls={false}
        preload="metadata"
        playsInline
        className="object-cover object-center h-full w-full"
        onEnded={onVideoEnded}
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={onVideoClick}
          className={cn(
            "flex items-center justify-center p-9 rounded-full bg-white bg-opacity-10 transition-opacity duration-500",
            isPlaying ? "opacity-0" : "opacity-100"
          )}
        >
          <Image
            src={isPlaying ? pause : play}
            alt={isPlaying ? "pause" : "play"}
            priority={true}
            className="block w-16 h-16 opacity-70"
          />
        </button>
      </div>
    </main>
  );
}

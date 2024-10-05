"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Import Assets //
import play from "@/assets/icons/play.svg";
import pause from "@/assets/icons/pause.svg";

interface VideoPlayerProps {
  videoSrc: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  isMuted: boolean;
  showPoster: boolean;
  poster?: string | StaticImageData;
  onVideoClick: () => void;
  onVideoEnded: () => void;
}

export default function VideoPlayer({
  videoSrc,
  videoRef,
  isPlaying,
  isMuted,
  showPoster,
  poster,
  onVideoClick,
  onVideoEnded,
}: VideoPlayerProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Define screen size for small devices
  const smallScreenThreshold = 1024;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < smallScreenThreshold);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileVideoVariants = {
    played: {
      width: "100vw",
      height: "auto",
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
    paused: {
      width: "100vw",
      height: "100vh",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main
      onClick={onVideoClick}
      className="flex items-center w-full h-screen justify-center origin-center relative"
    >
      <motion.video
        ref={videoRef}
        muted={isMuted}
        loop={false}
        controls={false}
        preload="metadata"
        playsInline
        width="100vh"
        height="auto"
        className="object-cover object-center h-full w-full"
        onEnded={onVideoEnded}
        onClick={onVideoClick}
        animate={isSmallScreen ? (isPlaying ? "played" : "paused") : ""}
        variants={isSmallScreen ? mobileVideoVariants : {}}
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

      {showPoster && poster && (
        <div className="absolute inset-0">
          <Image
            src={poster}
            alt="Video thumbnail"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

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

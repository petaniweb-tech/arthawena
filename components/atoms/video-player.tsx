import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Import Assets //
import play from "@/assets/icons/play.svg";
import pause from "@/assets/icons/pause.svg";
import fallbackImage from "@/assets/images/fallback-image.webp";

interface VideoPlayerProps {
  videoSrc: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean;
  isMuted: boolean;
  poster?: string;
  onVideoClick: () => void;
  onVideoEnded: () => void;
}

export default function VideoPlayer({
  videoSrc,
  videoRef,
  isPlaying,
  isMuted,
  poster,
  onVideoClick,
  onVideoEnded,
}: VideoPlayerProps) {
  const [key, setKey] = useState(0);
  const [posterLoaded, setPosterLoaded] = useState(false);

  useEffect(() => {
    // Force re-render of video element when poster changes
    setKey((prevKey) => prevKey + 1);
    setPosterLoaded(false);
  }, [poster]);

  return (
    <main
      onClick={onVideoClick}
      className="flex items-center w-full h-screen justify-center origin-center relative"
    >
      <video
        key={key}
        ref={videoRef}
        muted={isMuted}
        loop={false}
        controls={false}
        preload="metadata"
        playsInline
        className="object-cover object-center h-full w-full"
        onEnded={onVideoEnded}
        onClick={onVideoClick}
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      {!isPlaying && (
        <div className="absolute inset-0">
          <Image
            src={poster || fallbackImage}
            alt="Video thumbnail"
            layout="fill"
            objectFit="cover"
            onLoad={() => setPosterLoaded(true)}
            onError={() => setPosterLoaded(false)}
          />
          {!posterLoaded && (
            <Image
              src={fallbackImage}
              alt="Fallback thumbnail"
              layout="fill"
              objectFit="cover"
            />
          )}
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

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Import Assets //
import play from "@/assets/icons/play.svg";
import pause from "@/assets/icons/pause.svg";

interface VideoPlayerProps {
  videoSrc: string;
  videoRef?: React.RefObject<HTMLVideoElement>;
  isVideoPlay?: boolean;
  muted?: boolean;
  onManualPause?: () => void;
  onVideoEnd?: () => void;
}

export default function VideoPlayer({
  videoSrc,
  videoRef,
  isVideoPlay = false,
  muted = true,
  onManualPause,
  onVideoEnd,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(isVideoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [fadeOut, setFadeOut] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const internalVideoRef = useRef<HTMLVideoElement>(null);
  const finalVideoRef = videoRef || internalVideoRef;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleVideoClick = () => {
    if (finalVideoRef.current) {
      if (isPlaying) {
        finalVideoRef.current.pause();
        clearTimeout(timerRef.current as NodeJS.Timeout);
        setFadeOut(false);
        setIsPaused(true);

        if (onManualPause) {
          onManualPause();
        }
      } else {
        finalVideoRef.current.currentTime = 1;
        // If it's the first play, start from second 1
        if (!hasStarted) {
          finalVideoRef.current.currentTime = 1;
          setHasStarted(true); // Mark the video as having been started
        } else if (isPaused) {
          // If resuming after pause, ensure video plays till the end
          finalVideoRef.current.onended = () => {
            if (onVideoEnd) {
              onVideoEnd(); // Call the onVideoEnd callback when video ends
            }
          };
        }
        finalVideoRef.current.play();
        finalVideoRef.current.muted = false;
        setIsMuted(false);
        setIsPaused(false);

        clearTimeout(timerRef.current as NodeJS.Timeout);
        timerRef.current = setTimeout(() => {
          setFadeOut(true);
        }, 1500);
      }

      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (finalVideoRef.current) {
      finalVideoRef.current.muted = isMuted;

      // Attach onended event to move to the next slide when video ends
      finalVideoRef.current.onended = () => {
        if (onVideoEnd) {
          onVideoEnd(); // Call the onVideoEnd callback when video ends
        }
      };
    }
  }, [isMuted, finalVideoRef, onVideoEnd]);

  useEffect(() => {
    setIsPlaying(isVideoPlay);
    setFadeOut(false);
  }, [isVideoPlay]);

  return (
    <main
      onClick={handleVideoClick}
      className="flex items-center w-full h-screen justify-center origin-center relative"
    >
      <video
        ref={finalVideoRef}
        autoPlay={false}
        muted={isMuted}
        loop={false}
        controls={false}
        preload="metadata"
        playsInline
        className="object-cover object-center h-full w-full"
      >
        <source src={videoSrc} type="video/webm" />
      </video>

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handleVideoClick}
          className={cn(
            "flex items-center justify-center p-9 rounded-full bg-white bg-opacity-10 transition-opacity duration-500",
            fadeOut ? "opacity-0" : "opacity-100"
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

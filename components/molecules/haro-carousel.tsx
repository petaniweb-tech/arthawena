"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import Swiper Components //
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Importing Data //
import { client } from "@/sanity/lib/client";
import { bannerQuery } from "@/sanity/services/banner-query";

// Import Components //
import VideoPlayer from "../atoms/video-player";
import SwiperNavigation from "../atoms/swiper-navigation";

interface BannerItem {
  type: string;
  url: string;
}

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperRef>(null);
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [current, setCurrent] = useState(1);
  const [isPlayVideo, setIsPlayVideo] = useState<boolean>(false);
  const videoRefs = useRef<React.RefObject<HTMLVideoElement>[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nextSlideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false); // Track paused video state

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(bannerQuery);
      setBanners(result[0]?.images || []);
    };

    fetchData();
  }, []);

  const muteAllVideos = () => {
    videoRefs.current.forEach((videoRef) => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.pause();
      }
    });
  };

  const swapSlideNext = () => {
    swiperRef?.current?.swiper?.slideNext();
  };

  const handleManualPause = () => {
    if (nextSlideTimeoutRef.current) {
      clearTimeout(nextSlideTimeoutRef.current);
    }

    // Only move to the next slide if the video isn't resumed
    nextSlideTimeoutRef.current = setTimeout(() => {
      if (!isPaused) {
        swapSlideNext();
      }
    }, 3000);
  };

  const handleVideoEnd = () => {
    swapSlideNext();
  };

  const handlePlayVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef?.current) {
      videoRef.current.play().then(() => {
        setIsPlayVideo(true);
        videoRef.current!.onended = handleVideoEnd; // Ensure video plays till the end
      });
    }
  };

  const handleResumeVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef?.current) {
      if (nextSlideTimeoutRef.current) {
        clearTimeout(nextSlideTimeoutRef.current); // Clear the pause timeout if resuming
      }
      videoRef.current
        .play()
        .then(() => {
          setIsPlayVideo(true);
          setIsPaused(false); // Mark video as resumed
          // Ensure video plays until the end after resuming
          videoRef.current!.onended = handleVideoEnd;
        })
        .catch((err) => console.error("Error resuming video:", err));
    }
  };

  const handleClick = (swiper: any) => {
    const videoRef = videoRefs.current[swiper.realIndex];
    if (videoRef?.current) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (isPaused) {
        // Resume the paused video
        setIsPaused(false);
        handleResumeVideo(videoRef);
      } else {
        // Play the video for the first time
        handlePlayVideo(videoRef);
      }
    }
  };

  if (!banners.length) {
    return null;
  }

  return (
    <Swiper
      ref={swiperRef}
      speed={700}
      grabCursor={false}
      modules={[Autoplay]}
      loop={true}
      onSlideChange={(swiper) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        setIsPlayVideo(false);
        muteAllVideos();

        const videoRef = videoRefs.current[swiper.realIndex];
        if (videoRef?.current) {
          videoRef.current.currentTime = 9; // Show thumbnail at 9 seconds
        }

        timeoutRef.current = setTimeout(swapSlideNext, 3000);

        setCurrent(swiper.realIndex + 1);
      }}
      onClick={handleClick}
      className="w-full h-screen"
    >
      <SwiperNavigation />
      {banners.map((banner, index) => {
        if (!banner?.url) {
          return "";
        }

        if (!videoRefs.current[index]) {
          videoRefs.current[index] = React.createRef<HTMLVideoElement>();
        }

        return (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center object-cover object-center w-full h-full"
          >
            <div className="relative">
              {banner.type === "video" ? (
                <VideoPlayer
                  videoSrc={banner.url}
                  isVideoPlay={isPlayVideo}
                  muted={true}
                  videoRef={videoRefs.current[index]}
                  onManualPause={() => {
                    setIsPaused(true); // Track the paused state
                    handleManualPause();
                  }}
                  onVideoEnd={handleVideoEnd}
                />
              ) : (
                <Image
                  src={banner.url}
                  alt={`Slide ${index}`}
                  priority={true}
                  sizes="100vw"
                  width={100}
                  height={100}
                  className="w-full h-screen object-cover object-center"
                />
              )}

              <div
                className="absolute flex justify-center w-full px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl items-end pb-8 lg:pb-[36px]"
                style={{
                  height: "fit-content",
                  alignSelf: "flex-end",
                  bottom: 0,
                }}
              >
                <div className="w-full flex items-end bg-white bg-opacity-15 border border-white border-opacity-70 h-[6px]">
                  <div className="flex w-full">
                    {banners.map((_, index) => (
                      <div
                        key={index}
                        className={`h-[6px] flex-1 ${
                          current - 1 === index ? "bg-white" : ""
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

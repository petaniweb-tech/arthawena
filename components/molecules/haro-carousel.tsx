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
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const videoRefs = useRef<React.RefObject<HTMLVideoElement>[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  );

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

  const handleVideoEnd = () => {
    setIsPlayingVideo(false);
    swapSlideNext();
  };

  const handleVideoClick = (index: number) => {
    const videoRef = videoRefs.current[index];
    if (videoRef?.current) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      if (isPlayingVideo && !isPaused) {
        // Pause the video
        videoRef.current.pause();
        setIsPaused(true);
        setIsPlayingVideo(false);
        pauseTimeoutRef.current = setTimeout(() => {
          swapSlideNext();
        }, 3000);
      } else {
        // Play or resume the video
        if (!isPlayingVideo || (isPlayingVideo && isPaused)) {
          if (currentVideoIndex !== index) {
            // First time playing this video
            videoRef.current.currentTime = 1;
            setCurrentVideoIndex(index);
          }
          videoRef.current.muted = false; // Ensure the video is not muted when playing
          videoRef.current.play();
          setIsPaused(false);
          setIsPlayingVideo(true);
        }
      }
    }
  };

  const handleSlideChange = (swiper: any) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    setIsPlayingVideo(false);
    setIsPaused(false);
    muteAllVideos();

    const videoRef = videoRefs.current[swiper.realIndex];
    if (videoRef?.current) {
      videoRef.current.currentTime = 9; // Show thumbnail at 9 seconds
      videoRef.current.muted = true; // Mute the video when showing thumbnail
    }

    timeoutRef.current = setTimeout(swapSlideNext, 3000);

    setCurrent(swiper.realIndex + 1);
    setCurrentVideoIndex(null);
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
      onSlideChange={handleSlideChange}
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
                  videoRef={videoRefs.current[index]}
                  isPlaying={isPlayingVideo && currentVideoIndex === index}
                  isMuted={!isPlayingVideo} // Mute only when not playing
                  currentTime={9}
                  onVideoClick={() => handleVideoClick(index)}
                  onVideoEnded={handleVideoEnd}
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

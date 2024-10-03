import React from "react";
import { useSwiper } from "swiper/react";

// Import Icons //
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function SwiperNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute hidden lg:flex items-center justify-center z-[70] left-[140px] top-1/2 -translate-y-1/2 w-fit h-fit"
      >
        <ChevronLeftIcon className="h-10 w-10 text-white stroke-1" />
      </button>

      <button
        onClick={() => swiper.slideNext()}
        className="absolute hidden lg:flex items-center justify-center z-[70] right-[140px] top-1/2 -translate-y-1/2 w-fit h-fit"
      >
        <ChevronRightIcon className="h-10 w-10 text-white stroke-1" />
      </button>
    </>
  );
}

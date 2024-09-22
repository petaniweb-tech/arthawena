"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

// import Assets //
import technology from "@/assets/images/home/technology.webp";
import sustainability from "@/assets/images/home/sustainability.webp";
import csrprograms from "@/assets/images/home/csr-program.webp";
import ourproduct from "@/assets/images/home/our-product.webp";
import technologyicon from "@/assets/images/home/technology-icon.webp";
import sustainabilityicon from "@/assets/images/home/sustainability-icon.webp";
import csrprogramsicon from "@/assets/images/home/csr-programs-icon.webp";
import ourproducticon from "@/assets/images/home/our-product-icon.webp";

export default function ShowcaseCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectCreative]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        waitForTransition: true,
      }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      className="w-full h-[530px] object-cover object-center"
    >
      <SwiperSlide className="flex relative h-full w-full items-center justify-center object-cover object-center">
        <Image
          src={technology}
          alt="Technology"
          priority={true}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary">
          <h5 className="text-[32px] font-aeonik-medium text-white text-center leading-tight">
            Technology
          </h5>

          <div className="flex flex-col items-center gap-9">
            <Image
              src={technologyicon}
              alt="Technology Icon"
              priority={true}
              width={100}
              height={100}
              className="h-[70px] w-auto"
            />
            <Link href="/our-business/technology">
              <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 border border-white border-opacity-30">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex relative h-full w-full items-center justify-center object-cover object-center">
        <Image
          src={sustainability}
          alt="Arthawena for Sustainability"
          priority={true}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary">
          <h5 className="text-[32px] font-aeonik-medium text-white text-center leading-tight">
            Arthawena
            <br />
            for Sustainability
          </h5>

          <div className="flex flex-col items-center gap-9">
            <Image
              src={sustainabilityicon}
              alt="Sustainability Icon"
              priority={true}
              className="h-20 w-auto"
            />
            <Link href="/sustainability/arthawena-for-sustainability">
              <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 border border-white border-opacity-30">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex relative h-full w-full items-center justify-center object-cover object-center">
        <Image
          src={csrprograms}
          alt="CSR Programs"
          priority={true}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary">
          <h5 className="text-[32px] font-aeonik-medium text-white text-center leading-tight">
            CSR
            <br />
            Programs
          </h5>

          <div className="flex flex-col items-center gap-9">
            <Image
              src={csrprogramsicon}
              alt="CSR Programs Icon"
              priority={true}
              className="h-[70px] w-auto"
            />
            <Link href="/sustainability/csr-programs">
              <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 border border-white border-opacity-30">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex relative h-full w-full items-center justify-center object-cover object-center">
        <Image
          src={ourproduct}
          alt="Our Product"
          priority={true}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary">
          <h5 className="text-[32px] font-aeonik-medium text-white text-center leading-tight">
            Our
            <br />
            Product
          </h5>

          <div className="flex flex-col items-center gap-9">
            <Image
              src={ourproducticon}
              alt="Our Product Icon"
              priority={true}
              className="h-[70px] w-auto"
            />
            <Link href="/our-business/our-product">
              <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 border border-white border-opacity-30">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

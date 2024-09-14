"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Import Data //
import { client } from "@/sanity/lib/client";
import { technologyQuery } from "@/sanity/services/technology-query";
import { TechnologyType, TechnologyImageType } from "@/types/technology-type";

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import { PortableText } from "@portabletext/react";
import portableTextComponents from "@/components/atoms/portable-text";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNavigation from "@/components/atoms/swiper-navigation";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Technology() {
  const [technologyData, setTechnologyData] = useState<TechnologyType[]>([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchTechnologyData = async () => {
      const data = await client.fetch(technologyQuery);
      setTechnologyData(data);
    };

    fetchTechnologyData();
  }, []);

  return (
    <>
      {/* <-- === Breadcrumb Start === --> */}
      <DynamicBreadcrumb
        backgroundColor="bg-black"
        breadcrumbColor="text-white/75"
        breadcrumbPageColor="text-white"
        whiteFontHover="lg:hover:text-white duration-300"
      />
      {/* <-- === Breadcrumb End === --> */}

      <main>
        <section className="flex flex-col w-full gap-5 lg:gap-7 lg:items-center px-content-padding-sm pt-content-padding-top-sm lg:pt-content-padding-top-lg 2xl:pt-content-padding-top-2xl pb-16 lg:pb-24 bg-primary">
          <h2 className="text-[48px] lg:text-6xl font-aeonik-medium text-white">
            Technology
          </h2>
          <div className="flex flex-col gap-5 lg:gap-7">
            <p className="text-[15px] lg:text-[17px] font-light text-white leading-relaxed lg:text-center">
              Our standard internal procedures are meticulously designed and
              executed <br className="hidden lg:block" />
              in a systematic manner, starting from the beginning
            </p>

            <p className="text-[15px] lg:text-[17px] font-light text-white leading-relaxed lg:text-center">
              We believe technology plays a significant role in bringing
              competitive cost, <br className="hidden lg:block" />
              high quality and on-time delivery products for our customers.
            </p>
          </div>
        </section>

        <section className="w-full pt-14 lg:pt-28">
          <div className="flex flex-col gap-14 lg:gap-28">
            {/* Loop through fetched technology data */}
            {technologyData.map((technology, index) => (
              <div key={`Technology-${index}`} className="flex flex-col">
                <div className="flex flex-col px-content-padding-sm lg:px-[220px] 2xl:px-content-padding-2xl">
                  <div className="flex items-center justify-center w-full pb-5 lg:pb-9 border-b-2 lg:border-b-[3px] border-primary">
                    {/* Technology Title */}
                    <h3 className="text-3xl lg:text-[54px] text-primary font-aeonik-medium leading-tight text-center whitespace-pre-line">
                      {technology.title}
                    </h3>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-7 mt-9 lg:mt-14">
                    <div className="block lg:w-full">
                      {/* Technology Specification */}
                      <p className="text-[15px] lg:text-base text-charcoal text-opacity-85 whitespace-pre-line leading-[1.7] lg:leading-[1.75]">
                        <PortableText
                          value={technology.specification}
                          components={portableTextComponents}
                        />
                      </p>
                    </div>

                    {/* Technology Description */}
                    <p className="text-[15px] lg:text-base lg:w-full text-charcoal leading-relaxed text-opacity-80 lg:leading-[1.75]">
                      <PortableText
                        value={technology.description}
                        components={portableTextComponents}
                      />
                    </p>
                  </div>
                </div>

                {/* Carousel Images */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  speed={700}
                  pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                      return `<span class="${className} swiper-pagination-custom-bullet"></span>`;
                    },
                  }}
                  autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                  }}
                  className="w-full h-full aspect-square lg:aspect-video object-cover object-center mt-11 lg:mt-16"
                >
                  <SwiperNavigation />
                  {technology.images?.map(
                    (image: TechnologyImageType, imgIndex: number) => (
                      <SwiperSlide
                        key={imgIndex}
                        className="w-full h-full object-cover object-center"
                      >
                        <Image
                          src={image.url}
                          alt={`Carousel-${imgIndex}`}
                          priority={true}
                          className="w-full h-full object-cover object-center"
                          width={800}
                          height={600}
                        />
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

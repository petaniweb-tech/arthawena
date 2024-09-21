"use client";

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import ImageBackground from "@/assets/images/sustainability/img-map.webp";
import ImageFlag from "@/assets/images/sustainability/img-flag.webp";
import ImageSponsor from "@/assets/images/sustainability/img-sponsor.webp";
import { CsrImageType, CsrType } from "@/types/sustainability";
import { client } from "@/sanity/lib/client";
import { csrQuery } from "@/sanity/services/csr-query";
import portableTextComponents from "@/components/atoms/portable-text";
import { PortableText } from "next-sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

export default function CsrPrograms() {
  const [csrData, setCsrData] = useState<CsrType[]>([]);

  useEffect(() => {
    const fetchCsrData = async () => {
      const data = await client.fetch(csrQuery);
      setCsrData(data);
    };

    fetchCsrData();
  }, []);

  return (
    <>
      {/* <-- === Breadcrumb Start === --> */}
      <DynamicBreadcrumb
        backgroundColor="bg-background"
        breadcrumbColor="text-charcoal/50"
        breadcrumbPageColor="text-charcoal"
        fontWeight="font-medium"
        blackFontHover="lg:hover:text-charcoal duration-300"
      />
      {/* <-- === Breadcrumb End === --> */}

      {/* <-- === CSR Programs Section === --> */}
      <section className="relative pt-content-padding-top-sm lg:pt-content-padding-top-lg 2xl:pt-content-padding-top-2xl">
        <div className="px-content-padding-sm">
          {/* Title */}
          <h1 className="font-aeonik-medium text-[50px] lg:text-center lg:text-6xl  text-primary mb-7">
            CSR Programs
          </h1>

          {/* Description */}
          <p className="text-[15px] leading-relaxed lg:font-light lg:text-center lg:text-[17px] text-charcoal mb-8 text-opacity-90">
            We believe in taking action to create a positive impact on the{" "}
            <br className="hidden lg:block" />
            communities and world around us. Through CSR initiatives, we strive{" "}
            <br className="hidden lg:block" />
            to make a difference and create a better future for all.
          </p>
        </div>

        {/* Flag Image */}

        {/* Map Background */}
        <div className="relative">
          <div className="absolute top-0 right-8 z-20 lg:left-44 lg:top-16 object-cover object-center">
            <Image
              src={ImageFlag}
              alt="Indonesian Flag"
              width={50}
              height={50}
              objectFit="cover"
              className="lg:w-[70px] lg:h-[70px]"
            />
          </div>

          <div className="overflow-hidden overscroll-none relative">
            <Image
              src={ImageBackground}
              alt="Map Background"
              width={1024}
              height={1980}
              className="h-auto pt-10 pb-10 scale-150 lg:scale-125 translate-x-7 lg:translate-x-32  lg:pt-16 w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10 opacity-70"></div>
          </div>

          {/* Legend for Sponsors */}
          <div className="absolute -bottom-10 right-5 lg:-bottom-20 lg:right-20 lg:p-4 p-2 drop-shadow-md w-fit bg-white">
            <ul className="text-left space-y-1 lg:space-y-3 text-[7px] lg:text-sm">
              <li className="flex items-center">
                <span className="block w-2 h-2 lg:w-3 lg:h-3  bg-[#57B948] rounded-full" />
                <span className="mx-2">:</span>
                <span>Habitat for Humanity Indonesia</span>
              </li>
              <li className="flex items-center">
                <span className="block w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full" />
                <span className="mx-2">:</span>
                <span>Wahana Visi Indonesia</span>
              </li>
              <li className="flex items-center">
                <span className="block w-2 h-2 lg:w-3 lg:h-3 bg-[#2B55B2]  rounded-full" />
                <span className="mx-2">:</span>
                <span>Oxfam Foundation</span>
              </li>
              <li className="flex items-center">
                <span className="block w-2 h-2 lg:w-3 lg:h-3 bg-[#F2E823] rounded-full" />
                <span className="mx-2">:</span>
                <span>Direct Emergency Assistance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsors Logos */}
        <div className="mt-32 lg:mt-60 flex justify-center px-content-padding-sm mb-10 lg:px-content-padding-lg 2xl:px-content-padding-2xl object-center object-cover">
          <Image
            src={ImageSponsor}
            alt="Sponsor Logos"
            width={1000}
            height={50}
            className="lg:h-auto lg:w-[95%]"
          />
        </div>
      </section>

      {/* New CSR Section */}
      <section className="lg:flex lg:flex-col lg:gap-24 px-content-padding-sm lg:px-content-padding-lg pt-16 lg:pt-52 lg:pb-40 pb-[10px]">
        {csrData.map((csr, index) => (
          <div key={index} className="mb-10">
            {/* Title */}
            <h2
              className="text-3xl font-aeonik-medium lg:text-center lg:text-5xl mb-4 lg:mb-7"
              style={{ color: csr.titleColor }}
            >
              {csr.title}
            </h2>

            {/* Subtitle */}
            <p className="text-charcoal text-opacity-80 lg:text-center text-[15px] lg:text-[17px] font-semibold mb-10 lg:mb-32 tracking-wider">
              {csr.subtitle}
            </p>

            <div className="flex flex-col lg:flex-row lg:items-center w-full lg:h-fit lg:gap-28">
              {/* Image */}
              {csr.images != null && (
                <Swiper
                  modules={[Autoplay]}
                  loop={true}
                  speed={700}
                  autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                    waitForTransition: true,
                  }}
                  className="h-[280px] w-full lg:w-[60%] 2xl:w-[70%] lg:h-[280px] 2xl:h-[300px] object-cover object-center rounded-xl mb-10 lg:mb-0"
                >
                  {csr.images?.map((image: CsrImageType, imgIndex: number) => (
                    <SwiperSlide
                      key={imgIndex}
                      className="w-full h-full object-cover object-center"
                    >
                      <Image
                        src={image.url}
                        alt={`Carousel-${imgIndex}`}
                        priority={true}
                        className="w-full h-full object-cover object-center"
                        width={500}
                        height={300}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {/* Description */}
              <div
                className={`text-charcoal text-[15px] leading-relaxed text-opacity-80 whitespace-pre-line mb-14 lg:mb-0 lg:w-full ${csr.images == null ? "lg:px-64" : ""}`}
              >
                <PortableText
                  value={csr.description}
                  components={portableTextComponents}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

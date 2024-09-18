"use client";

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import ImageBackground from '@/assets/images/sustainability/img-map.webp';
import ImageFlag from '@/assets/images/sustainability/img-flag.webp';
import ImageSponsor from '@/assets/images/sustainability/img-sponsor.webp';
import { CsrImageType, CsrType } from "@/types/sustainability";
import { client } from "@/sanity/lib/client";
import { csrQuery } from "@/sanity/services/csr-query";
import portableTextComponents from "@/components/atoms/portable-text";
import { PortableText } from "next-sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperNavigation from "@/components/atoms/swiper-navigation";
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
      <section className="relative pt-content-padding-top-sm lg:text-left">
        <div className="px-content-padding-sm">
          {/* Title */}
          <h1 className="font-aeonik-medium text-4xl lg:text-5xl  text-orange-600 mb-8">CSR Programs</h1>

          {/* Description */}
          <p className="text-[15px] font-light lg:text-xl text-charcoal mb-8">
            We believe in taking action to create a positive impact on the communities and world around us.
            Through CSR initiatives, we strive to make a difference and create a better future for all.
          </p>
        </div>

        {/* Flag Image */}


        {/* Map Background */}
        <div className="relative">

          <div className="absolute top-0 right-10">
            <Image
              src={ImageFlag}
              alt="Indonesian Flag"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          <Image
            src={ImageBackground}
            alt="Map Background"
            width={1024}
            height={1980}
            className="h-[180px] w-full"
          />

          {/* Legend for Sponsors */}
          <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg w-[250px]">
            <ul className="text-left space-y-4 text-[13px]">
              <li className="flex items-center">
                <span className="block w-4 h-4 bg-yellow-500 mr-3 rounded-full"></span> Habitat for Humanity Indonesia
              </li>
              <li className="flex items-center">
                <span className="block w-4 h-4 bg-blue-500 mr-3 rounded-full"></span> Wahana Visi Indonesia
              </li>
              <li className="flex items-center">
                <span className="block w-4 h-4 bg-green-500 mr-3 rounded-full"></span> Oxfam Foundation
              </li>
              <li className="flex items-center">
                <span className="block w-4 h-4 bg-red-500 mr-3 rounded-full"></span> Direct Emergency Assistance
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsors Logos */}
        <div className="mt-10 flex justify-center space-x-6 mb-24">
          <Image src={ImageSponsor} alt="Sponsor Logos" width={300} height={50} />
        </div>
      </section>

      {/* New CSR Section */}
      <section className="px-content-padding-sm lg:px-content-padding-lg py-16 lg:py-24 bg-white">
        {csrData.map((csr, index) => (
          <div key={index} className="mb-10">
            {/* Title */}
            <h2 className="text-2xl font-aeonik-medium lg:text-3xl mb-4" style={{ color: csr.titleColor }}>
              {csr.title}
            </h2>

            {/* Subtitle */}
            <p className="text-charcoal font-medium mb-6">{csr.subtitle}</p>

            {/* Image */}
            {/* {csr.images[0] && (
              <div className="mb-6">
                <Image
                  src={csr.images[0].url}
                  alt={csr.title}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            )} */}
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={700}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
                waitForTransition: true,
              }}
              className="h-[280px] w-full lg:aspect-video object-cover object-center mt-11 lg:mt-16"
            >
              {/* Navigation component */}
              <SwiperNavigation />
              {csr.images?.map((image: CsrImageType, imgIndex: number) => (
                <SwiperSlide
                  key={imgIndex}
                  className="w-full h-full object-cover object-center"
                >
                  <Image
                    src={image.url}
                    alt={`Carousel-${imgIndex}`}
                    priority={true}
                    className="w-full h-full object-cover object-center rounded-lg"
                    width={500}
                    height={300}
                  />
                </SwiperSlide>
              ))}
            </Swiper>


            {/* Description */}
            <div className="text-charcoal whitespace-pre-line mt-10">
              <PortableText value={csr.description} components={portableTextComponents} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

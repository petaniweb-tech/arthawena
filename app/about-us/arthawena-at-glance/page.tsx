// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import portableTextComponents from "@/components/atoms/portable-text";
import { arthawenaAtGlanceQuery } from "@/sanity/services/arthawena-at-glance-query"
import { ArthawenaAtGlanceType } from "@/types/arthawena-at-glance-type"

export default async function ArthawenaAtGlance() {
  const arthawenaAtGlanceData: ArthawenaAtGlanceType[] = await client.fetch(arthawenaAtGlanceQuery);
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

      {/* <-- === The content must be placed right here === --> */}
      <main className="px-content-padding-sm pt-content-padding-top-sm lg:pt-content-padding-top-lg 2xl:pt-content-padding-top-2xl lg:px-content-padding-lg 2xl:px-content-padding-2xl">

      {/* section at glance */}
      <section className="flex flex-col gap-8 lg:items-center justify-center">
        <h1 className="text-primary lg:text-primary text-[58px] font-aeonik-medium leading-none">Arthawena {""}
        <br className="lg:hidden"/>at Glance</h1>
      <p className="text-charcoal text-base lg:text-center lg:mb-10">Welcome to Arthawena, where constant innovation drives us 
        <br className="hidden lg:block" />towards endless possibilities in harmony with the world.</p>
        <div className="lg:w-full lg:h-1 lg:bg-primary"></div>
      </section>

      <section className="flex flex-col mt-20 gap-20 lg:items-center lg:justify-center lg:w-auto">
      {arthawenaAtGlanceData.map((arthawenaAtGlance) => (
      <div key={`arthawena-at-glance-${arthawenaAtGlance.title}`} className="text-charcoal flex flex-col lg:justify-center lg:items-center lg:w-[59%]">
        <Image 
        src={arthawenaAtGlance.imageUrl}
        alt={arthawenaAtGlance.title}
        width={0}
        height={0}
        sizes="100vw"
        priority={true}
        quality={100}
        className="object-cover object-center w-auto h-16"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">{arthawenaAtGlance.title}</h1>
        <div className="font-light text-21 lg:text-center">
          <PortableText 
          value={arthawenaAtGlance.description}
          components={portableTextComponents}
          />
        </div>
        <div className="lg:text-center font-light text-21 mt-6">
        <p className="font-medium">{arthawenaAtGlance.employee}</p>
        <p>{arthawenaAtGlance.location}</p>
        </div>
      </div>
      ))
      }
      </section>
    </main>
    </>
  );
}

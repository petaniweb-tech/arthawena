// Import Data //
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { arthawenaAtGlanceQuery } from "@/sanity/services/arthawena-at-glance-query"
import { ArthawenaAtGlanceType } from "@/types/arthawena-at-glance-type"

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import portableTextComponents from "@/components/atoms/portable-text";


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
      <main className="px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl pt-content-padding-top-sm lg:pt-content-padding-top-lg 2xl:pt-content-padding-top-2xl mb-40 lg:mb-48">

      {/* section at glance */}
      <section className="flex flex-col gap-8 lg:items-center justify-center">
        <h1 className="text-primary lg:text-primary text-[58px] font-aeonik-medium leading-none">Arthawena {""}
        <br className="lg:hidden"/>at Glance</h1>
      <p className="text-charcoal text-base lg:text-center lg:mb-10">Welcome to Arthawena, where constant innovation drives us 
        <br className="hidden lg:block" />towards endless possibilities in harmony with the world.</p>
        <div className="lg:w-full lg:h-1 lg:bg-primary"></div>
      </section>

      <section className="flex flex-col mt-20 gap-16 lg:items-center lg:justify-center lg:w-auto">
      {arthawenaAtGlanceData.map((arthawenaAtGlance) => (
      <div key={`arthawena-at-glance-${arthawenaAtGlance.title}`} className="text-charcoal flex flex-col lg:justify-center lg:items-center lg:w-[70%]">
        <div className="w-fit block object-center">
                <Image
                  src={arthawenaAtGlance.imageUrl}
                  alt={arthawenaAtGlance.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  quality={100}
                  className="w-auto h-20 lg:[70px]"
                ></Image>
              </div>
              <h1 className="text-2xl font-semibold my-7 lg:mt-12">
                {arthawenaAtGlance.title}
              </h1>

        {/* Description Section */}
        {arthawenaAtGlance.description &&
          Array.isArray(arthawenaAtGlance.description) && (
        <div className="text-opacity-80 text-base leading-relaxed lg:text-center whitespace-pre-line">
          <PortableText 
          value={arthawenaAtGlance.description}
          components={portableTextComponents}
          />
        </div>
        )}

        {/* Employee and Location Section */}
        <div>
        <p className="text-opacity-80 text-base font-medium mt-6 lg:text-center">{arthawenaAtGlance.employee}</p>
        <p className="text-opacity-80 text-base font-medium lg:text-center">{arthawenaAtGlance.location}</p>
        </div>
      </div>
      ))
      }
      </section>
    </main>
    </>
  );
}

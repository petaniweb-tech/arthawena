// Import Data //
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { arthawenaAtGlanceQuery } from "@/sanity/services/arthawena-at-glance-query";
import { ArthawenaAtGlanceType } from "@/types/arthawena-at-glance-type";

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import portableTextComponents from "@/components/atoms/portable-text";

export default async function ArthawenaAtGlance() {
  const arthawenaAtGlanceData: ArthawenaAtGlanceType[] = await client.fetch(
    arthawenaAtGlanceQuery
  );
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

      <main className="px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl pt-content-padding-top-sm lg:pt-content-padding-top-lg 2xl:pt-content-padding-top-2xl mb-40 lg:mb-48">
        {/* section at glance */}
        <section className="flex flex-col gap-8 lg:items-center justify-center">
          <h2 className="text-[50px] lg:text-6xl font-aeonik-medium text-primary leading-none">
            Arthawena {""}
            <br className="block lg:hidden" />
            at Glance
          </h2>
          <p className="text-charcoal text-[15px] lg:text-[17px] lg:font-light lg:text-center lg:mb-10 leading-relaxed">
            Welcome to Arthawena, where constant innovation drives us
            <br className="hidden lg:block" />
            towards endless possibilities in harmony with the world.
          </p>
          <div className="lg:w-full lg:h-1 lg:bg-primary"></div>
        </section>

        <section className="flex flex-col mt-16 lg:mt-20 gap-20 lg:items-center lg:justify-center lg:w-auto px-2">
          {arthawenaAtGlanceData.map((arthawenaAtGlance) => (
            <div
              key={`arthawena-at-glance-${arthawenaAtGlance.title}`}
              className="flex flex-col lg:justify-center lg:items-center lg:w-[70%]"
            >
              <div className="w-fit block object-center">
                <Image
                  src={arthawenaAtGlance.imageUrl}
                  alt={arthawenaAtGlance.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  quality={100}
                  className="w-auto h-[70px] lg:[70px]"
                ></Image>
              </div>
              <h1 className="text-xl font-semibold my-7 lg:mt-12 text-charcoal">
                {arthawenaAtGlance.title}
              </h1>

              {/* Description Section */}
              {arthawenaAtGlance.description &&
                Array.isArray(arthawenaAtGlance.description) && (
                  <div className="text-charcoal text-opacity-90 text-[15px] leading-relaxed lg:text-center whitespace-pre-line">
                    <PortableText
                      value={arthawenaAtGlance.description}
                      components={portableTextComponents}
                    />
                  </div>
                )}

              {/* Employee and Location Section */}
              {(arthawenaAtGlance.employee || arthawenaAtGlance.location) && (
                <div className="mt-6 lg:text-center">
                  {arthawenaAtGlance.employee && (
                    <p className="text-charcoal text-opacity-90 text-[15px] font-semibold">
                      {arthawenaAtGlance.employee}
                    </p>
                  )}
                  {arthawenaAtGlance.location && (
                    <p className="text-charcoal text-opacity-90 text-[15px] mt-1">
                      {arthawenaAtGlance.location}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

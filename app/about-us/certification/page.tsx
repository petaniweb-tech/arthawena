// Importing Data //
import { client } from "@/sanity/lib/client";
import { certificationQuery } from "@/sanity/services/certification-query";
import { PortableText } from "@portabletext/react";
import { CertificationType } from "@/types/certification-type";

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import portableTextComponents from "@/components/atoms/portable-text";

export default async function Certification() {
  const certificationData: CertificationType[] =
    await client.fetch(certificationQuery);

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
        <section className="flex flex-col w-full gap-5 lg:gap-7 lg:items-center">
          <h2 className="text-[50px] lg:text-6xl font-aeonik-medium text-primary">
            Certification
          </h2>
          <div className="flex flex-col gap-5 lg:gap-7">
            <p className="text-[15px] lg:text-[17px] lg:font-light text-charcoal leading-relaxed lg:text-center">
              Arthawena has been awarded numerous UN certifications, showcasing
              our <br className="hidden lg:block" />
              business commitment to providing high-quality packaging.
            </p>

            <p className="text-[15px] lg:text-[17px] lg:font-light text-charcoal leading-relaxed lg:text-center">
              One of the major achievements in this area that Arthawena has
              achieved, is that we <br className="hidden lg:block" />
              have been granted a certification by FSSC to guarantee the
              delivery and <br className="hidden lg:block" />
              maintenance of safe food, feed, and packaging for the customer
              goods industry.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 px-10 lg:px-0 mt-20 lg:mt-32">
          {certificationData.map((certification) => (
            <div
              key={`certification-${certification.title}.`}
              className="w-full flex flex-col items-center justify-center gap-3 px-3 min-h-36 lg:min-h-40 max-h-40 lg:max-h-44"
              style={{ backgroundColor: certification.backgroundColor }}
            >
              {/* Only render description if it's not null or undefined */}
              {certification.description &&
                Array.isArray(certification.description) && (
                  <div className="text-white text-sm text-center whitespace-pre-line">
                    <PortableText
                      value={certification.description}
                      components={portableTextComponents}
                    />
                  </div>
                )}
              <p className="text-[28px] lg:text-[32px] font-aeonik-medium text-white text-center pb-1 tracking-[.05em]">
                {certification.title}
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

import Image from "next/image";

// Import Data //
import { client } from "@/sanity/lib/client";
import { productQuery } from "@/sanity/services/product-query";
import { ProductType } from "@/types/product-type";

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";

export default async function OurProduct() {
  const productData: ProductType[] = await client.fetch(productQuery);

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

      <main className="lg:px-content-padding-lg 2xl:px-content-padding-2xl pt-content-padding-top-sm lg:pt-content-padding-top-lg 2xl:pt-content-padding-top-2xl mb-32 lg:mb-48">
        <section className="flex flex-col w-full gap-5 lg:gap-7 lg:items-center px-content-padding-sm">
          <h2 className="text-[48px] lg:text-6xl font-aeonik-medium text-primary">
            Our Product
          </h2>
          <div className="block">
            <p className="text-[15px] lg:text-[17px] lg:font-light text-charcoal leading-relaxed lg:text-center">
              Arthawena has expanded its product range to include various types
              of cans, <br className="hidden lg:block" />
              custom-tailored to meet the technical specifications and design
              preferences of our <br className="hidden lg:block" />
              customers. Our sales team is extensively trained and equipped with
              comprehensive <br className="hidden lg:block" />
              technical knowledge to advise customers in selecting the most
              suitable <br className="hidden lg:block" />
              specifications according to their requirements.
            </p>
          </div>
        </section>

        <section className="w-screen lg:w-full lg:px-14 flex flex-col gap-2 lg:gap-4 mt-[74px] lg:mt-32">
          {productData.map((product) => (
            <div
              key={`product-${product.title}`}
              className="aspect-square lg:aspect-auto block relative w-full h-full lg:h-auto object-cover object-center"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                priority={true}
                width={1000}
                height={1000}
                quality={100}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="bg-black bg-opacity-50 w-fit flex items-center justify-center px-4 py-2 text-white text-[13px] lg:text-sm">
                  {product.title}
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

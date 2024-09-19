import Image from "next/image";

// Import Components //
import HeroCarousel from "@/components/molecules/haro-carousel";
import ShowcaseCarousel from "@/components/molecules/showcase-carousel";
import Showcase from "@/components/molecules/showcase";

// Import Assets //
import sustainable from "@/assets/images/home/sustainable.webp";
import employees from "@/assets/images/home/employees.webp";
import plants from "@/assets/images/home/plants.webp";
import vision from "@/assets/images/home/vision.webp";
import mission from "@/assets/images/home/mission.webp";
import locationmobile from "@/assets/images/home/location-mobile.webp";
import locationdesktop from "@/assets/images/home/location-desktop.webp";

export default async function Home() {
  return (
    <main>
      <section className="w-full h-screen">
        <HeroCarousel />
      </section>

      {/* <-- ==== Who We Are Start ==== --> */}
      <section className="bg-who-we-are-mobile lg:bg-who-we-are-desktop bg-cover block lg:flex lg:items-center lg:justify-between w-full px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl pt-16 lg:pt-36 pb-12 lg:pb-40">
        <div className="flex flex-col gap-7 lg:gap-9 lg:w-[45%]">
          <h6 className="text-[19px] lg:text-[26px] text-white">WHO WE ARE</h6>
          <h4 className="text-[28px] lg:text-[46px] text-white font-aeonik-medium leading-tight lg:leading-[1.4]">
            THE MOST RELIABLE TIN CAN SUPPLIER IN INDONESIA
          </h4>

          <div className="flex items-center w-fit text-xs lg:text-[17px] tracking-wider font-semibold lg:font-aeonik-regular text-white justify-center py-[6px] lg:pt-3 lg:pb-[14px] px-5 lg:px-6 rounded-full bg-white bg-opacity-10 lg:bg-opacity-0 border border-white border-opacity-40 lg:border-opacity-65 mt-2 lg:mt-4">
            SINCE 1991
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-[45%] gap-7 lg:pl-14">
          <p className="text-[17px] text-white leading-relaxed">
            Arthawena is one of the best general tin producer companies in the
            national can industry. Arthawena makes cans from quality materials
            and the manufacturing process is an accordance with proven quality
            and quality standards, with nearly 19 years of experience in the
            national can industry.
          </p>

          <p className="text-[17px] text-white leading-relaxed">
            To maintain product quality and quality, Arthawena continues to
            expand its business and take steps to improve management, production
            systems, and improve quality and service. In line with market
            demands and developments, Arthawena implements the ISO 9001: 2000
            Quality Management System and has been certified since 2004. These
            steps will continue to develop and improve Arthawena to provide
            satisfaction and service to Arthawena customers.
          </p>
        </div>
      </section>

      <section className="mt-14 w-full px-content-padding-sm flex flex-col gap-6 lg:hidden">
        <p className="text-[15px] text-charcoal text-opacity-80 leading-relaxed">
          Arthawena is one of the best general tin producer companies in the
          national can industry. Arthawena makes cans from quality materials and
          the manufacturing process is an accordance with proven quality and
          quality standards, with nearly 19 years of experience in the national
          can industry.
        </p>

        <p className="text-[15px] text-charcoal text-opacity-80 leading-relaxed">
          To maintain product quality and quality, Arthawena continues to expand
          its business and take steps to improve management, production systems,
          and improve quality and service. In line with market demands and
          developments, Arthawena implements the ISO 9001: 2000 Quality
          Management System and has been certified since 2004. These steps will
          continue to develop and improve Arthawena to provide satisfaction and
          service to Arthawena customers.
        </p>
      </section>
      {/* <-- ==== Who We Are End ==== --> */}

      {/* <-- ==== Company Values Start ==== --> */}
      <section className="mt-20 lg:mt-48 w-full block px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-11 lg:gap-16">
          <div className="block w-fit h-fit lg:w-full lg:h-full">
            <Image
              src={sustainable}
              alt="Sustainable Company"
              priority={true}
              className="w-52 h-auto lg:w-full lg:h-full"
            />
          </div>

          <div className="block w-fit h-fit lg:w-full lg:h-full">
            <Image
              src={employees}
              alt="Sustainable Company"
              priority={true}
              className="w-52 h-auto lg:w-full lg:h-full"
            />
          </div>

          <div className="block w-fit h-fit lg:w-full lg:h-full">
            <Image
              src={plants}
              alt="Sustainable Company"
              priority={true}
              className="w-52 h-auto lg:w-full lg:h-full"
            />
          </div>
        </div>
      </section>
      {/* <-- ==== Company Values End ==== --> */}

      {/* <-- ==== Vision & Mission Start ==== --> */}
      <section className="mt-28 lg:mt-64 w-full px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl">
        <div className="flex flex-col lg:flex-row lg:items-start gap-[18px] lg:gap-0">
          <div className="block w-auto lg:w-[60%]">
            <h3 className="text-[38px] lg:text-6xl text-primary font-aeonik-medium leading-tight">
              Vision & Mission
            </h3>
          </div>
          <div className="block w-auto lg:w-[48%] lg:pt-1">
            <p className="text-[15px] lg:text-[17px] text-charcoal text-opacity-80 lg:text-opacity-100 leading-relaxed">
              We firmly believe that through our dedicated efforts and strategic
              vision, Arthawena can become a leader in the metal packaging
              industry in Indonesia.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:hidden mt-14 gap-10">
          <div className="relative">
            <div className="flex flex-col pt-2">
              <p className="text-base text-charcoal text-opacity-60 font-semibold tracking-wider">
                OUR VISION
              </p>
              <div className="block pr-[52px] mt-[14px]">
                <p className="text-[22px] text-primary font-aeonik-medium leading-[1.4]">
                  To be the best in metal packaging industry in Indonesia.
                </p>
              </div>
            </div>

            <div className="flex absolute w-fit h-fit top-0 right-0">
              <Image
                src={vision}
                alt="Vision"
                priority={true}
                className="w-11 h-11"
              />
            </div>
          </div>

          <div className="relative">
            <div className="flex flex-col pt-2">
              <p className="text-base text-charcoal text-opacity-60 font-semibold tracking-wider">
                OUR MISSION
              </p>
              <div className="block pr-[52px] mt-[14px]">
                <p className="text-[22px] text-primary font-aeonik-medium leading-[1.4]">
                  To continually improve our products and services to meet
                  customer&apos;s expectations, and to provide a reasonable
                  values to stakeholder.
                </p>
              </div>
            </div>

            <div className="flex absolute w-fit h-fit top-0 right-0">
              <Image
                src={mission}
                alt="Mission"
                priority={true}
                className="w-11 h-11"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-full items-start justify-center mt-44">
          <div className="flex flex-col w-1/2 gap-[60px]">
            <div className="flex w-full h-auto items-center justify-center">
              <Image
                src={vision}
                alt="Vision"
                priority={true}
                className="w-[50px] h-[50px]"
              />
              <div className="h-[2px] bg-primary w-full" />
            </div>
            <div className="flex flex-col gap-7">
              <p className="text-lg text-charcoal text-opacity-60 font-semibold tracking-wider">
                OUR VISION
              </p>
              <div className="block pr-48">
                <p className="text-3xl text-primary font-aeonik-medium leading-[1.4]">
                  To be the best in metal packaging industry in Indonesia.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 gap-[60px]">
            <div className="block w-fit h-fit">
              <Image
                src={mission}
                alt="Mission"
                priority={true}
                className="w-[50px] h-[50px]"
              />
            </div>
            <div className="flex flex-col gap-7">
              <p className="text-lg text-charcoal text-opacity-60 font-semibold tracking-wider">
                OUR MISSION
              </p>
              <div className="block pr-32">
                <p className="text-3xl text-primary font-aeonik-medium leading-[1.4]">
                  To continually improve our products and services to meet
                  customer&apos;s expectations, and to provide a reasonable
                  values to stakeholder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <-- ==== Vision & Mission End ==== --> */}

      {/* <-- ==== Location Start ==== --> */}
      <section className="mt-28 lg:mt-64 w-full">
        <div className="flex flex-col px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl lg:flex-row lg:items-start gap-[18px] lg:gap-0">
          <div className="block w-auto lg:w-[60%]">
            <h3 className="text-[38px] lg:text-6xl text-primary font-aeonik-medium leading-tight">
              Location
            </h3>
          </div>
          <div className="block w-auto lg:w-[48%] lg:pt-1">
            <p className="text-[15px] lg:text-[17px] text-charcoal text-opacity-80 lg:text-opacity-100 leading-relaxed">
              Our company has grown from its single location to encompass 5
              plants strategically placed across Java.
            </p>
          </div>
        </div>

        <div className="w-full -translate-y-16 block lg:hidden">
          <Image
            src={locationmobile}
            alt="Location"
            priority={true}
            className="w-full h-full"
          />
        </div>

        <div className="w-full -translate-y-28 hidden lg:block">
          <Image
            src={locationdesktop}
            alt="Location"
            priority={true}
            className="w-full h-full"
          />
        </div>

        <div className="w-full flex flex-col lg:hidden items-center justify-center px-content-padding-sm gap-12">
          <div className="flex flex-col gap-[10px] items-center">
            <p className="text-[17px] text-primary font-semibold text-center">
              PLANT A1, MALANG
            </p>
            <p className="text-sm text-charcoal text-opacity-65 font-medium text-center leading-[1.7]">
              Jl. Ahmad Yani Utara 32 Blimbing
              <br />
              Kota Malang, Jawa Timur
            </p>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <p className="text-[17px] text-primary font-semibold text-center">
              PLANT A2, MALANG
            </p>
            <p className="text-sm text-charcoal text-opacity-65 font-medium text-center leading-[1.7]">
              Jl. Kertanegara 85 Karangploso
              <br />
              Kabupaten Malang, Jawa Timur
            </p>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <p className="text-[17px] text-primary font-semibold text-center">
              PLANT A3, TANGERANG
            </p>
            <p className="text-sm text-charcoal text-opacity-65 font-medium text-center leading-[1.7]">
              Jl. Raya Serang km 12, Kampung Cirewed
              <br />
              RT 03 / RW 02 Desa Sukadamai
              <br />
              Cikupa, Tangerang
            </p>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <p className="text-[17px] text-primary font-semibold text-center">
              PLANT A5, TANGERANG
            </p>
            <p className="text-sm text-charcoal text-opacity-65 font-medium text-center leading-[1.7]">
              Jl. Industri km 12, Kampung Cirewed
              <br />
              RT 01 / RW 04 Desa Sukadamai
              <br />
              Cikupa, Tangerang
            </p>
          </div>

          <div className="flex flex-col gap-[10px] items-center">
            <p className="text-[17px] text-primary font-semibold text-center">
              PLANT A6, BOGOR
            </p>
            <p className="text-sm text-charcoal text-opacity-65 font-medium text-center leading-[1.7]">
              Jl. Melati RT 01 / RW 01 Desa
              <br />
              Wanaherang Kecamatan Gunung
              <br />
              Putri, Bogor, Jawa Barat
            </p>
          </div>
        </div>
      </section>
      {/* <-- ==== Location End ==== --> */}

      {/* <-- ==== CTA Start ==== --> */}
      <section className="mt-28 lg:mt-10">
        <div className="block lg:hidden">
          <ShowcaseCarousel />
        </div>
        <div className="hidden lg:block">
          <Showcase />
        </div>
      </section>
      {/* <-- ==== CTA End ==== --> */}
    </main>
  );
}

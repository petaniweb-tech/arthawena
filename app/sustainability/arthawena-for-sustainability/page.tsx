import Image from "next/image";
import Link from "next/link";

// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import HeroBackground from "@/assets/images/sustainability/img-sustainability-background.webp";

// Import Icons
import IcCo2 from "@/assets/icons/sustainability/ic-co2.webp";
import IcReuse from "@/assets/icons/sustainability/ic-reuse.webp";
import IcTech from "@/assets/icons/sustainability/ic-tech.webp";
import IcMinimizeWaste from "@/assets/icons/sustainability/ic-minimize-waste.webp";
import IcGreener from "@/assets/icons/sustainability/ic-greener.webp";
import IcCorporate from "@/assets/icons/sustainability/ic-corporate.webp";
import { heroSustainType } from "@/types/sustainability";
import { HeroItem } from "../components/atoms/hero-item";

export default function ArthawenaForSustainability() {
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

      {/* <-- === Hero Section === --> */}
      <div className="relative h-screen lg:h-auto pt-[210px] pb-14 lg:pt-[300px] mb-20 lg:pb-44">
        {/* Hero background image */}
        <Image
          src={HeroBackground}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="h-full object-cover object-center"
          objectPosition="center"
          priority
        />
        {/* Content overlay */}
        <div className="relative z-10 inset-0 flex flex-col items-center justify-center h-full lg:w-full space-y-12 lg:space-y-28 text-white">
          {heroSustainType.map((section, index) => (
            <HeroItem
              key={index}
              title={section.title}
              imageSrc={section.imageSrc}
              altText={section.altText}
              description={section.description}
              isReversed={section.isReversed}
            />
          ))}
        </div>
      </div>

      {/* <-- === Content Section === --> */}
      <section className="mt-16 lg:mt-24">
        <div className="px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl">
          <div className="text-left mb-12 lg:mb-20 lg:flex lg:space-x-12 lg:justify-between">
            {/* Left Column: Title */}
            <div className="lg:w-1/2 lg:mt-8">
              <h2 className="text-sm lg:text-xl text-charcoal font-medium lg:font-normal text-opacity-75 lg:tracking-normal lg:text-opacity-100 uppercase lg:capitalize tracking-wider">
                We Grow
              </h2>
              <h3 className="text-4xl lg:text-7xl font-aeonik-medium text-primary mt-2 mb-8 lg:mt-2">
                Excellent
              </h3>
            </div>

            {/* Right Column: Description */}
            <div className="lg:w-1/2">
              <p className="text-[15px] lg:text-base text-charcoal mt-4 leading-relaxed lg:leading-[1.7] text-opacity-90">
                <span className="font-semibold">
                  We innovate, we plan and put into action as we work towards
                  sustainable goals.{" "}
                </span>
                Through careful planning and action, we continuously innovate
                and implement renewable energy initiatives using the latest
                machinery to increase efficiency and productivity. This allows
                us to surpass our clients&#39; expectations and meet their
                evolving needs. Come together for sustainability with our
                environmentally friendly products and processes that prioritize
                customer safety.
              </p>
              <p className="text-[15px] lg:text-base text-charcoal mt-4 lg:mt-5 leading-relaxed lg:leading-[1.7] text-opacity-90">
                We strive to consistently maintain high Key Performance
                Indicators, showing our commitment to improving the world we
                live in.
              </p>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <Image
                src={IcCo2}
                alt="CO2 Icon"
                width={120}
                height={120}
                className="mx-auto mb-7 lg:mb-8 lg:h-[120px] w-auto"
              />
              <h4 className="text-lg mb-4 tracking-wider font-semibold text-charcoal leading-[1.4] text-opacity-90">
                REDUCE GHG EMISSION <br /> INTENSITY 0.005 in 2023
              </h4>
              <p className="text-sm text-charcoal">in Tons CO₂eq / 1000 pcs</p>
            </div>
            <div>
              <Image
                src={IcReuse}
                alt="Reuse Icon"
                width={120}
                height={120}
                className="mx-auto mb-7 lg:mb-8 lg:h-[120px] w-auto"
              />
              <h4 className="text-lg mb-4 tracking-wider font-semibold text-charcoal leading-[1.4] text-opacity-90">
                REUSE ACTIVITY ON <br /> AVERAGE RATE 96%
              </h4>
            </div>
            <div>
              <Image
                src={IcTech}
                alt="Technology Icon"
                width={120}
                height={120}
                className="mx-auto mb-7 lg:mb-8 lg:h-[120px] w-auto"
              />
              <h4 className="text-lg mb-4 tracking-wider font-semibold text-charcoal leading-[1.4] text-opacity-90">
                NEWEST TECHNOLOGY <br /> ENABLE TO USE 10-14% <br /> LESS
                MATERIAL{" "}
              </h4>
              <p className="text-sm text-charcoal">
                Without compromising <br /> their initial quality
              </p>
            </div>
          </div>

          <div className="w-full h-0.5 bg-primary mb-16 mt-16 lg:mt-28 lg:mb-[90px]"></div>
        </div>
      </section>

      {/* <-- === Content Section (We Evolve) === --> */}
      <section>
        <div className="px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl">
          <div className="text-left mb-12 lg:flex lg:space-x-12 lg:justify-between">
            {/* Left Column: Title and Subtitle */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mt-12">
              <h2 className="text-sm text-opacity-75 font-medium lg:font-normal lg:text-xl text-charcoal uppercase lg:tracking-normal lg:text-opacity-100  lg:capitalize tracking-wider">
                We Evolve
              </h2>
              <h3 className="text-4xl lg:text-7xl font-aeonik-medium text-primary mt-2 mb-8 lg:mt-2">
                Service
              </h3>
            </div>

            {/* Right Column: Description and Button */}
            <div className="lg:w-1/2">
              <p className="text-[15px] lg:text-base text-charcoal mt-8 leading-relaxed lg:leading-[1.7] text-opacity-90">
                Realizing the importance of a strong team, we prioritize
                building a supportive and skilled community.
                <span className="font-semibold">
                  {" "}
                  Our team members are our greatest asset and we invest in their
                  training and education to provide the best services possible.{" "}
                </span>
                Prioritizing Employee Health and Safety measures at work, we
                design our work environment with ergonomic considerations to
                enhance comforts that lead to improved productivity and
                efficiency.
              </p>
              <p className="text-[15px] lg:text-base text-charcoal mt-4 lg:mt-5 leading-relaxed lg:leading-[1.7] text-opacity-90">
                <span className="font-semibold">
                  {" "}
                  Our company prioritizes career development and promotes
                  ethical conduct amongst our people and partners.{" "}
                </span>
                Practice for transparency, non-discrimination, ethics, and
                gender equality are constantly emphasised in our workplace,
                while also valuing diversity to allow us to work towards the
                same goals. With well-equipped and thoughtfully designed
                facilities, our employees work safely, comfortably, and
                efficiently.
              </p>

              {/* Button */}
              <div className="mt-8 lg:mt-10 mb-14 lg:mb-[70px]">
                <Link
                  href="/careers/culture"
                  className="text-[15px] tracking-wider inline-block font-medium text-primary border border-primary py-1 px-4 rounded-full"
                >
                  READ OUR CULTURE
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-0.5 bg-primary mb-16 lg:mb-[90px]"></div>
        </div>
      </section>

      {/* <-- === Content Section (We Care - Accountability) === --> */}
      <section>
        <div className="px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl lg:flex lg:space-x-12">
          {/* Left Column: Title and Subtitle */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mt-12">
            <h2 className="text-sm lg:text-xl text-charcoal text-opacity-75 font-medium lg:font-normal uppercase lg:tracking-normal lg:text-opacity-100  lg:capitalize tracking-wider">
              We Care
            </h2>
            <h3 className="text-4xl lg:text-7xl font-aeonik-medium text-primary mt-2 mb-8 lg:mt-2">
              Accountability
            </h3>
          </div>

          {/* Right Column: Description and Button */}
          <div className="lg:w-1/2">
            <p className="text-[15px] lg:text-base text-charcoal mt-8 leading-relaxed lg:leading-[1.7] text-opacity-90">
              We are known for our accountability to provide high-quality,
              reliable products for over 30 years with a dedicated team of
              staff, working together safely towards a greener future, one step
              at a time.
            </p>
            <p className="text-[15px] lg:text-base text-charcoal mt-6 leading-relaxed lg:leading-[1.7] text-opacity-90">
              We have made consistent efforts to decrease our greenhouse gas
              emissions over time.{" "}
              <span className="font-semibold">
                Our main goal has been to minimize waste, encourage recycling,
                and engage in responsible reuse practices.
              </span>{" "}
              This involves managing liquid waste through the distillation
              process and reusing wastewater.
            </p>
            <p className="text-[15px] lg:text-base text-charcoal mt-6 leading-relaxed lg:leading-[1.7] text-opacity-90">
              sustainability agenda. In Arthawena, team up with local partners
              we actively working towards reducing electricity and fuel
              consumption by installing solar panels offices and seek other
              renewable energy sources going forwards. Not only were we able to
              reduce{" "}
              <span className="font-semibold">
                {" "}
                air pollutants through incineration machine
              </span>
              , we also took it a step further to build a new one-build a better
              future, a simple yet powerful thing a plating trees for a greener.
            </p>
            <p className="text-[15px] lg:text-base text-charcoal mt-6 leading-relaxed lg:leading-[1.7] text-opacity-90">
              Making a difference in the world around us. We prioritize the
              well-being of our surroundings, people, and community.{" "}
              <span className="font-semibold">
                Through many Corporate Social Responsibility initiatives all
                over Indonesia.
              </span>
            </p>

            {/* Button */}
            <div className="text-start mt-8 lg:mt-10 mb-16 lg:mb-24">
              <Link
                href="/sustainability/csr-programs"
                className="text-[15px] tracking-wider inline-block font-medium text-primary border border-orange-500 py-1 px-4 rounded-full"
              >
                READ CSR PROGRAMS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <-- === Icon Section (Minimize Waste, Greener, CSR) === --> */}
      <section>
        <div className="px-content-padding-sm lg:px-64 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mt-3 pb-28 lg:pb-40">
          {/* Minimize Waste */}
          <div>
            <Image
              src={IcMinimizeWaste}
              alt="Minimize Waste Icon"
              width={120}
              height={120}
              className="mx-auto mb-10 lg:h-[120px]"
            />
            <h4 className="text-lg tracking-wider text-charcoal font-semibold leading-[1.4] text-opacity-90">
              MINIMIZE WASTE
            </h4>
          </div>

          {/* Greener */}
          <div>
            <Image
              src={IcGreener}
              alt="Greener Icon"
              width={120}
              height={120}
              className="mx-auto mb-10 lg:h-[120px]"
            />
            <h4 className="text-lg tracking-wider text-charcoal font-semibold leading-[1.4] text-opacity-90">
              GREENER
            </h4>
          </div>

          {/* Corporate Social Responsibility */}
          <div>
            <Image
              src={IcCorporate}
              alt="Corporate Social Responsibility Icon"
              width={120}
              height={120}
              className="mx-auto mb-10 lg:h-[120px]"
            />
            <h4 className="text-lg tracking-wider text-charcoal font-semibold leading-[1.4] text-opacity-90">
              CORPORATE SOCIAL <br /> RESPONSIBILITY
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

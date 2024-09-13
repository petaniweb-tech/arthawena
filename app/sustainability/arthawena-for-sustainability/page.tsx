// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import HeroBackground from "@/assets/images/sustainability/img-hero-background.webp";

// Import Icons
import IcWeGrow from "@/assets/icons/sustainability/ic-we-grow.webp";
import IcWeEvolve from "@/assets/icons/sustainability/ic-we-evolve.webp";
import IcWeCare from "@/assets/icons/sustainability/ic-we-care.webp";
import IcCo2 from "@/assets/icons/sustainability/ic-co2.webp";
import IcReuse from "@/assets/icons/sustainability/ic-reuse.webp";
import IcTech from "@/assets/icons/sustainability/ic-tech.webp";
import IcMinimizaWaste from "@/assets/icons/sustainability/ic-minimize-waste.webp";
import IcGreener from "@/assets/icons/sustainability/ic-greener.webp";
import IcCorporate from "@/assets/icons/sustainability/ic-corporate.webp";

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
      <div className="relative h-screen pt-content-padding-2xl">
        {/* Hero background image */}
        <Image
          src={HeroBackground}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-10 text-white">
          {/* We Grow Section */}
          <div className="text-center">
            <h1 className="font-aeonik-regular text-4xl font-bold mb-4">We Grow</h1>
            <Image src={IcWeGrow} alt="We Grow Icon" width={80} height={80} className="mx-auto mb-4" />
            <p className="font-light mt-4">Excellent</p>
          </div>

          {/* We Evolve Section */}
          <div className="text-center">
            <h1 className="font-aeonik-regular text-4xl font-bold mb-4">We Evolve</h1>
            <Image src={IcWeEvolve} alt="We Evolve Icon" width={80} height={80} className="mx-auto mb-4" />
            <p className="font-light mt-4">Service</p>
          </div>

          {/* We Care Section */}
          <div className="text-center">
            <h1 className="font-aeonik-regular text-4xl font-bold mb-4">We Care</h1>
            <Image src={IcWeCare} alt="We Care Icon" width={80} height={80} className="mx-auto mb-4" />
            <p className="font-light mt-4">Accountability</p>
          </div>
        </div>
        {/* Optional: Add an overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
      </div>

      {/* <-- === Content Section === --> */}
      <section className="bg-white py-16">
        <div className="px-content-padding-sm">
          <div className="text-left mb-12">
            <h2 className="text-sm text-charcoal">WE GROW</h2>
            <h3 className="text-2xl font-medium text-primary mt-4">Excellent</h3>
            <p className="text-lg text-charcoal mt-4">
              <span className="font-semibold"> We innovate, we plan and put into action as we work towards sustainable goals. </span>  Through careful planning and action, we continuously innovate and implement renewable energy initiatives using the latest machinery to increase efficiency and productivity. This allows us to surpass our clients expectations and meet their evolving needs. Come together for sustainability with our environmentally friendly products and processes that prioritize customer safety.
            </p>
            <p className="text-lg text-charcoal mt-4">
              We strive to consistently maintain high Key Performance Indicators, showing our commitment to improving the world we live in.
            </p>
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Image src={IcCo2} alt="CO2 Icon" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-lg mb-4">REDUCE GHG EMISSION <br /> INTENSITY 0.005 in 2023</h4>
              <p className="text-sm text-charcoal">in Tons CO₂eq / 1000 pcs</p>
            </div>
            <div>
              <Image src={IcReuse} alt="Reuse Icon" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-lg mb-4">REUSE ACTIVITY ON <br /> AVERAGE RATE 96%</h4>
            </div>
            <div>
              <Image src={IcTech} alt="Technology Icon" width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-lg mb-4">NEWEST TECHNOLOGY <br /> ENABLE TO USE 10-14% <br /> LESS MATERIAL </h4>
              <p className="text-sm text-charcoal">Without compromising <br /> their initial quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* <-- === Content Section (We Evolve) === --> */}
      <section className="bg-white py-16">
        <div className="px-content-padding-sm">

          <div className="w-full h-0.5 bg-primary mb-14"></div>

          <div className="text-left mb-12">
            <h2 className="text-sm text-charcoal">WE EVOLVE</h2>
            <h3 className="text-2xl font-medium text-primary mt-4">Service</h3>
            <p className="text-lg text-charcoal mt-4">
              Realizing the importance of a strong team, we prioritize building a supportive and skilled community.
              <span className="font-semibold"> Our team members are our greatest asset and we invest in their training and education to provide the best services possible. </span>
              Prioritizing Employee Health and Safety measures at work, we design our work environment with ergonomic considerations to enhance comforts that lead to improved productivity and efficiency.
            </p>
            <p className="text-lg text-charcoal mt-4">
              <span className="font-semibold"> Our company prioritizes career development and promotes ethical conduct amongst our people and partners. </span>
              Practice for transparency,
              non-discrimination, ethics, and gender equality
              are constantly emphasised in our workplace,
              while also valuing diversity to allow us to work
              towards the same goals. With well-equipped
              and thoughtfully designed facilities, our
              employees work safely, comfortably and
              efficiently
            </p>
          </div>

          {/* Button */}
          <div className="text-start">
            <a href="#!" className="inline-block text-primary border border-orange-500 py-1 px-4 rounded-full">
              READ OUR CULTURE
            </a>
          </div>

          <div className="w-full h-0.5 bg-primary mt-14"></div>
        </div>
      </section>
    </>
  );
}

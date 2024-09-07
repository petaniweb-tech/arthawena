import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import joinUsImage from "@/assets/images/img-join-us.png";

export default function JoinUs() {
  return (
    <>
      {/* <-- === Breadcrumb Start === --> */}
      <DynamicBreadcrumb
        backgroundColor="bg-black"
        breadcrumbColor="text-white/75 lg:text-charcoal/50"
        breadcrumbPageColor="text-white lg:text-charcoal"
        whiteFontHover="lg:hover:text-white duration-300"
      />
      {/* <-- === Breadcrumb End === --> */}

      {/* <-- === Image with Text Overlay === --> */}

      <div className="relative w-full h-screen lg:h-96 lg:mt-44">
        <Image
          src={joinUsImage}
          alt="Join Us"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
        <div className="absolute inset-0 flex flex-col justify-end lg:justify-start items-start text-white px-content-padding-sm lg:px-0 pb-28">
          <div className="lg:bg-background lg:w-full lg:px-content-padding-lg 2xl:px-content-padding-2xl">
            <h1 className="font-aeonik-medium text-5xl lg:text-primary mb-8">Join Us</h1>
          </div>

          <div className="lg:bg-background lg:pl-[90px] 2xl:pl-[120px] lg:pb-7 lg:pr-8">
            <p className="text-start text-sm font-light max-w-lg lg:text-charcoal">
              Arthawena as a growing national company, realizes that human resources
              play an important role in developing PT. Arthawenasakti Gemilang, to
              be one of the best in the national OEM manufacturers. For that, we want
              our employees to advance and develop with the company.
            </p>
          </div>

        </div>
      </div>

      {/* <-- === Additional Content === --> */}
      <div className="container mx-auto px-content-padding-sm py-14 lg:py-18 lg:pb-20 flex items-center justify-center text-base font-light leading-relaxed">
        <div className="text-start lg:max-w-xl">
          <p className="mb-6">
            If you are looking for a career that provides challenges, potential
            for growth, and an opportunity to help redefine the magnitude of
            this company&#39;s resources, we invite you to get to know Arthawena
            more closely by being part of us, to progress, develop, and succeed
            with PT. Arthawenasakti Gemilang.
          </p>
          <p className="mb-4 lg:mb-12">
            With the development of the company, we currently open several
            positions with the following requirements:
          </p>

          <h2 className="text-sm text-primary font-medium mt-8 mb-4">Send your cv to:</h2>
          <p className="mb-4 text-sm font-medium">
            HRD & GA Department
            <br />
            PT. Arthawenasakti Gemilang
          </p>

          <p className="mb-8">
            Jl. Kertanegara 85 Grimyoyo Karangploso,
            <br />
            Malang, Jawa Timur
          </p>

          <p className="text-sm text-primary font-medium mb-2">
            Or Email:
          </p>

          <a href="mailto:recruitment@arthawena.com" className="text-xs lg:text-sm font-medium">
            recruitment@arthawena.com
          </a>

          <p className="text-sm text-primary font-medium mt-5 mb-2">Kindly fill in the attached form:</p>
          <a
            href="https://forms.gle/pBPay3YQqyZNUMvFA"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 w-fit p-2 px-6 text-center font-medium lg:text-start mb-2"
          >
            https://forms.gle/pBPay3YQqyZNUMvFA
          </a>
        </div>
      </div>


    </>
  );
}

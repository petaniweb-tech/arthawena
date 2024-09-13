import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import joinUsImage from "@/assets/images/img-join-us.png";
import { client } from "@/sanity/lib/client";
import portableTextComponents from "@/components/atoms/portable-text";
import { PortableText } from "next-sanity";
import { joinUsQuery } from "@/sanity/services/join-us-query";



export default async function JoinUs() {

  const joinUsData = await client.fetch(joinUsQuery);

  return (
    <>
      {/* <-- === Breadcrumb Start === --> */}
      <DynamicBreadcrumb
        backgroundColor="bg-black"
        breadcrumbColor="text-white/75 lg:text-charcoal/50"
        breadcrumbPageColor="text-white lg:text-charcoal"
        whiteFontHover="lg:hover:text-charcoal duration-300"
      />
      {/* <-- === Breadcrumb End === --> */}

      {/* <-- === Image with Text Overlay === --> */}

      <div className="relative w-full h-screen lg:h-[500px] lg:mt-52">
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

          <div className="lg:bg-background lg:px-content-padding-lg 2xl:px-content-padding-2xl lg:pb-7 lg:pr-14">
            <p className="text-[15px] lg:text-[17px] lg:leading-relaxed lg:font-light w-fit lg:text-charcoal">
              Arthawena as a growing national company, realizes that human resources <br className="hidden lg:block" />
              play an important role in developing PT. Arthawenasakti Gemilang, to be one <br className="hidden lg:block" /> 
              of the best in the national OEM manufacturers. For that, we want our  <br className="hidden lg:block" />  
              employees to advance and develop with the company.
            </p>
          </div>

        </div>
      </div>

      {/* <-- === Additional Content === --> */}
      <div className="px-content-padding-sm py-14 lg:py-20 lg:pb-20 lg:flex lg:items-center lg:justify-center text-base font-light leading-relaxed">
        <div className="text-start lg:max-w-xl">
          <p className="mb-6 lg:mb-11 text-[15px] lg:text-[17px] lg:leading-relaxed text-charcoal">
            If you are looking for a career that provides challenges, potential
            for growth, and an opportunity to help redefine the magnitude of
            this company&#39;s resources, we invite you to get to know Arthawena
            more closely by being part of us, to progress, develop, and succeed
            with PT. Arthawenasakti Gemilang.
          </p>
          <p className="mb-4 lg:mb-[72px] text-[15px] lg:text-[17px] lg:leading-relaxed text-charcoal">
            With the development of the company, we currently open several
            positions with the following requirements:
          </p>

          <h2 className="text-[15px] lg:text-lg text-primary font-medium mt-8 mb-4 lg:mb-3">Send your cv to :</h2>
          <p className="mb-4 text-[15px] lg:text-lg font-medium lg:mb-3">
            HRD & GA Department
            <br />  
            PT. Arthawenasakti Gemilang
          </p>
 
          <div className="mb-8 text-charcoal">
            <PortableText value={joinUsData?.address} components={portableTextComponents} />
          </div>

          <p className="text-[15px] lg:text-lg text-primary font-medium mb-2">
            Or Email :
          </p>

          <a href="mailto:recruitment@arthawena.com" className="text-[15px] lg:text-lg font-medium">
            {joinUsData?.email}
          </a>

          <p className="text-sm text-primary font-medium mt-8 mb-5 lg:mb-4 lg:text-lg">Kindly fill in the attached form :</p>
          <a
            href="https://forms.gle/pBPay3YQqyZNUMvFA"
            target="_blank"
            rel="noopener noreferrer"
            className="font-aeonik-regular block border border-gray-300 max-w-full lg:w-fit lg:px-6 text-lg lg:text-[19px] py-2 px-4 text-start font-medium lg:text-start mb-4 truncate"
          >
            {joinUsData.link}
          </a>
        </div>
      </div>
    </>
  );
}

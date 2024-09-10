// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image"
import { Images } from "./images";

export default function ArthawenaAtGlance() {
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
      { /* section A1 1975 the beginning */}
      <div className="text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image 
        src={Images.asset1}
        alt="A1 1975 - The Beginning"
        priority={true}
        className="w-[78px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">1975 - The Beginning</h1>
        <p className="font-light text-[19px]">CV. Benteng Mas. Has a food processing unit and corned beef packaging processing unit.</p>
        <p className="font-light text-[19px] mt-7"><span className="font-medium">Number of employees : 10</span>
        <br />Malang, East Java</p>
      </div>

      {/* section 1991 - Expanding Focus */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset2}
          alt="Arthawena 1991 Expanding Focus"
          priority={true}
          className="w-[230px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">1991 - Expanding Focus</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="mt-6 font-medium">Changed company name to PT Arthawenasakti Gemilang, </span>engaged in can packaging for 
        general products, such as paint, chemicals, varnish, and others.</p>
      </div>

      {/* section 1998 - Economic Crisis */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset3}
          alt="Arthawena 1998 Economic Crisis"
          priority={true}
          className="w-[90px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">1998 - Economic Crisis</h1>
        <p className="font-light text-[19px] lg:text-center">During the economic monetary crisis, we expanded by renting another business location to {""}
        work on Pertamina's tender products. <span className="font-medium">Successfully survived <span className="lg:font-light">the economic crisis and </span></span>
        <span className="font-medium text-[19px]">became stronger in its field</span>.</p>
        <p className="font-medium text-[19px] mt-7 lg:font-light">Number of employees : around 250</p>
      </div>

      {/* 2004 - Business Expansion */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
      <Image
        src={Images.asset4}
        alt="2004 - Business Expansion"
        priority={true}
        className="w-[260px] h-auto"
      ></Image>
      <h1 className="text-2xl font-semibold my-7">2004 Business Expansion</h1>
      <p className="font-light text-21[px] lg:text-center"><span className="font-medium lg:font-light">Completed construction of the new plant on Jl. Kertanegara 85 Girimoyo Karangploso, Kab. Malang. </span>
      <span className="lg:font-medium">Moving the previous business location</span> to a new factory in plant A2.</p>
      <p className="font-medium text-[19px] mt-7 lg:hidden">Number of employees : 400</p>
      </div>

      {/* 2005 - First Certification */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset5}
          alt="2005 - First Certification"
          priority={true}
          className="w-[180px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2005 - First Certification</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium lg:font-light">Implementation of ISO 9001:2000,</span>{" "}a proud
        achievement for the company with the <span className="lg:font-medium">first ISO certification obtained by PT Arthawena</span>, as a commitment to producing goods with consistent 
        and guaranteed quality.</p>
      </div>

      {/* 2006 - New Location */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset6}
          alt="2006 - New Location"
          priority={true}
          className="w-[290px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2006 - New Location</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium"><span className="lg:font-light">Inauguration of </span>a new plant in the Tangerang </span>
        <span className="lg:font-medium">area </span>as an effort to get closer to customers in the Jabodetabek area, and to be more competitive in terms of quality and service.</p>
      </div>

      {/* 2008 - Renovation */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset7}
          alt="2008 - Renovation"
          priority={true}
          className="w-[120px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2008 - Renovation</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium">Renovation and expansion of the A1 Malang factory, <span className="lg:font-light">becoming a raw material warehouse & raw material cutting process unit to support the core plant in Malang. </span></span>
        Implementation of an integrated HR management system, such as Talent Management, Performance Assessment and competency-based remuneration.</p>
      </div>

      {/* 2010 - Advanced Certification */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset8}
          alt="2010 - Advanced Certification"
          priority={true}
          className="w-[260px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2010 - Advanced Certification</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium">Successfully passed ISO 9001:2008 certification, </span>as proof of our commitment to continuously improving product quality and continuous improvement of our internal systems.</p>
      </div>

      {/* 2012-2013 - Plant Expansion */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset9}
          alt="2012-2013 - Plant Expansion"
          priority={true}
          className="w-[130px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2012-2013 - Plant Expansion</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium lg:font-light">Expansion, construction of several finished product warehouses and additional printing units at the Plant at A2 in Malang. </span>
        With the <span className="lg:font-medium">increase in the number of sales and customers, </span>we have made quite a large investment to increase existing capacity.</p>
      </div>

      {/* div 2014 - New Plant */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset10}
          alt="2014 - New Plant"
          priority={true}
          className="w-[220px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2014 - New Plant</h1>
        <p className="font-light text-[19] lg:text-center"><span className="font-medium lg:font-light">Inauguration of the <span className="lg:font-medium">new operational Plant in Tangerang Cikupa, </span></span>
        in response to demands of customer and market expansion that existed at that time.</p>
      </div>

      {/* div 2015 - Acquire */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset11}
          alt="2015 - Acquire"
          priority={true}
          className="w-[220px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2015 - Acquire</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium">Pt. Arthawena acquire can company PT Jasa Lestari in Bogor, </span>to increase production capacity and gain more market share.</p>
      </div>

      {/* 2017 - Achieved New Certification */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset12}
          alt="2017 - Achieved New Certification"
          priority={true}
          className="w-[230px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2017 - Achieved New Certification</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium">Successfully achieved ISO 9001:2015 <span className="lg:font-light">certification</span></span>, 
        as a sign of our success in achieving an internal control and documentation system that has been tested and recognized by standard our international customers.</p>
      </div>

      {/* 2018 - New Speed */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%]">
        <Image
          src={Images.asset13}
          alt="2018 - New Speed"
          priority={true}
          className="w-[120px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2018 - New Speed</h1>
        <p className="font-light text-[19px] lg:text-center">We entered <span className="font-medium"><span className="lg:font-light">a new </span>aerosol production line, </span>adding product categories and larger customers.</p>
      </div>

      {/* 2023 - FSSC Certification */}
      <div className=" text-charcoal flex flex-col lg:items-center lg:w-[59%] mb-32">
        <Image
          src={Images.asset14}
          alt="2023 - FSSC Certification"
          priority={true}
          className="w-[170px] h-auto"
        ></Image>
        <h1 className="text-2xl font-semibold my-7">2023 - FSSC Certification</h1>
        <p className="font-light text-[19px] lg:text-center"><span className="font-medium"><span className="lg:font-light">We expand into the sardine market and </span>successfully achieve FSSC 22000 certification, </span>
        which means we have the right to produce various food products healthily and safely.</p>
      </div>
      </section>
    </main>
    </>
  );
}

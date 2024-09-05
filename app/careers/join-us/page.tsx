import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image"; // Import the Image component from Next.js
import joinUsImage from "@/assets/images/img-join-us.png"; // Import your image file

export default function JoinUs() {
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

      {/* <-- === Image with Text Overlay === --> */}
      <div className="relative w-full h-screen">
        <Image
          src={joinUsImage}
          alt="Join Us"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-start text-white px-content-padding-sm pb-28">
          <h1 className="font-aeonik-medium text-5xl font-bold mb-8">Join Us</h1>
          <p className="text-start text-sm font-light max-w-lg">
            Arthawena as a growing national company, realizes that human resources
            play an important role in developing PT. Arthawenasakti Gemilang, to
            be one of the best in the national OEM manufacturers. For that, we want
            our employees to advance and develop with the company.
          </p>
        </div>
      </div>

      {/* <-- === Additional Content === --> */}
      <div className="container mx-auto px-content-padding-sm py-14 text-sm font-light">
        <p className="mb-6">
          If you are looking for a career that provides challenges, potential
          for growth, and an opportunity to help redefine the magnitude of
          this company&#39;s resources, we invite you to get to know Arthawena
          more closely by being part of us, to progress, develop, and succeed
          with PT. Arthawenasakti Gemilang.
        </p>
        <p className="mb-4 text-sm font-light">
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

        <a href="mailto:recruitment@arthawena.com" className="text-xs font-medium">
          recruitment@arthawena.com
        </a>

        <p className="text-sm text-primary font-medium mt-5 mb-2">Kindly fill in the attached form:</p>
        <a
          href="https://forms.gle/pBPay3YQqyZNUMvFA"
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-300 rounded p-2 text-center mb-2"
        >
          https://forms.gle/pBPay3YQqyZNUMvFA
        </a>
      </div>
    </>
  );
}

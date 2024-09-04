// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import bgtest from "@/assets/images/bgtest.jpg";
import Image from "next/image";

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

      <Image src={bgtest} alt="test" className="w-full h-[2000px]" />
      {/* <-- === The content must be placed right here === --> */}
    </>
  );
}

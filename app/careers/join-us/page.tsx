// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import bgtest from "@/assets/images/foto join us.png";
import Image from "next/image";

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

      {/* <-- === The content must be placed right here === --> */}
    </>
  );
}

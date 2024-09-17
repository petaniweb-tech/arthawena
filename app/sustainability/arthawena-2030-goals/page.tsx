// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import MobileBackground from "@/assets/images/sustainability/img-goal-mobile.webp";
import DesktopBackground from "@/assets/images/sustainability/img-goal-desktop.webp";
import GoalItem from "../components/atoms/goal-item";
import { client } from "@/sanity/lib/client";
import { goalQuery } from "@/sanity/services/goal-query";
import { GoalType } from "@/types/sustainability";

export default async function Arthawena2030Goals() {

  const goalData: GoalType[] = await client.fetch(goalQuery);

  console.log(goalData);

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
      {/* <-- === Hero Section === --> */}
      <div className="pt-[83px]">
        {/* Hero background image */}
        <Image
          src={MobileBackground}
          alt="Hero Background"
          priority
          className="lg:hidden"
        />

        <Image
          src={DesktopBackground}
          alt="Hero Background"
          priority
          className="lg:block hidden"
        />
      </div>

      {/* <-- === New Content Section === --> */}
      <section className="px-content-padding-sm lg:px-64 py-16 lg:py-24 bg-white">
        {goalData.map((item, index) => (
          <GoalItem
            key={index}
            title={item.title}
            description={item.description ?? []}
            image={item.imageUrl}
            index={index}
          />
        ))}
      </section>
    </>
  );
}

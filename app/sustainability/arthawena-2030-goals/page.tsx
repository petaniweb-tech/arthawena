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
      <div className="pt-[83px]">
        {/* Hero background image */}
        <Image
          src={MobileBackground}
          alt="Hero Background"
          priority
          className="lg:hidden block"
        />

        <Image
          src={DesktopBackground}
          alt="Hero Background"
          priority
          className="lg:block hidden"
        />
      </div>

      {/* <-- === New Content Section === --> */}
      <section className="px-content-padding-sm lg:px-64 2xl:px-52 pt-12 pb-11 lg:pt-32 lg:pb-16">
        {goalData.map((item, index) => (
          <div key={`goals-${item.title}`} className="lg:mb-40">
            <GoalItem
              key={index}
              title={item.title}
              description={item.description ?? []}
              imageUrl={item.imageUrl}
              index={index}
            />
          </div>
        ))}
      </section>
    </>
  );
}

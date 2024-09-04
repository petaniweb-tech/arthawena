// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";

export default function CsrPrograms() {
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
    </>
  );
}

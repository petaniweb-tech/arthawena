import Image from "next/image";
import Link from "next/link";

// Import Assets //
import technology from "@/assets/images/home/technology.webp";
import sustainability from "@/assets/images/home/sustainability.webp";
import csrprograms from "@/assets/images/home/csr-program.webp";
import ourproduct from "@/assets/images/home/our-product.webp";
import technologyicon from "@/assets/images/home/technology-icon.webp";
import sustainabilityicon from "@/assets/images/home/sustainability-icon.webp";
import csrprogramsicon from "@/assets/images/home/csr-programs-icon.webp";
import ourproducticon from "@/assets/images/home/our-product-icon.webp";

export default function Showcase() {
  return (
    <main className="w-screen lg:h-[520px] 2xl:h-[560px] block">
      <div className="w-full h-full gap-2 flex items-center justify-center">
        <div className="group flex relative w-full h-full object-cover object-center overflow-hidden">
          <Image
            src={technology}
            alt="Technology"
            priority={true}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h5 className="text-3xl font-aeonik-medium text-white text-center leading-tight">
              Technology
            </h5>

            <div className="flex flex-col items-center gap-9">
              <Image
                src={technologyicon}
                alt="Technology Icon"
                priority={true}
                className="h-20 w-auto"
              />
              <Link href="/our-business/technology">
                <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 hover:bg-opacity-25 duration-300 border border-white border-opacity-30">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="group flex relative w-full h-full object-cover object-center overflow-hidden">
          <Image
            src={sustainability}
            alt="Sustainability"
            priority={true}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h5 className="text-3xl font-aeonik-medium text-white text-center leading-tight">
              Arthawena
              <br />
              for Sustainability
            </h5>

            <div className="flex flex-col items-center gap-9">
              <Image
                src={sustainabilityicon}
                alt="Sustainability Icon"
                priority={true}
                className="h-20 w-auto"
              />
              <Link href="/sustainability/arthawena-for-sustainability">
                <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 hover:bg-opacity-25 duration-300 border border-white border-opacity-30">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="group flex relative w-full h-full object-cover object-center overflow-hidden">
          <Image
            src={csrprograms}
            alt="CSR Programs"
            priority={true}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h5 className="text-3xl font-aeonik-medium text-white text-center leading-tight">
              CSR
              <br />
              Programs
            </h5>

            <div className="flex flex-col items-center gap-9">
              <Image
                src={csrprogramsicon}
                alt="CSR Programs Icon"
                priority={true}
                className="h-20 w-auto"
              />
              <Link href="/sustainability/csr-programs">
                <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 hover:bg-opacity-25 duration-300 border border-white border-opacity-30">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="group flex relative w-full h-full object-cover object-center overflow-hidden">
          <Image
            src={ourproduct}
            alt="Our Product"
            priority={true}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-between pt-11 pb-12 bg-gradient-to-b from-transparent from-25% to-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h5 className="text-3xl font-aeonik-medium text-white text-center leading-tight">
              Our
              <br />
              Product
            </h5>

            <div className="flex flex-col items-center gap-9">
              <Image
                src={ourproducticon}
                alt="Our Product Icon"
                priority={true}
                className="h-20 w-auto"
              />
              <Link href="/our-business/our-product">
                <button className="flex items-center justify-center text-sm text-white font-medium tracking-wider px-4 py-[5px] rounded-full bg-white bg-opacity-15 hover:bg-opacity-25 duration-300 border border-white border-opacity-30">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

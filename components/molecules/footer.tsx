import Link from "next/link";
import Image from "next/image";

// Import Assets //
import logo from "@/assets/images/img-white-logo.png";
import logosymbol from "@/assets/images/img-white-logo-symbol.png";

export default function Footer() {
  return (
    <>
      <main className="bg-arsenic w-full px-content-padding-sm lg:px-content-padding-lg 2xl:px-content-padding-2xl pt-12 lg:pt-14 pb-[60px] lg:pb-12">
        {/* <-- === Footer Mobile Start === --> */}
        <section className="flex flex-col lg:hidden">
          <div className="block lg:hidden w-auto">
            <Link href="/">
              <Image
                src={logo}
                alt="Arthawena Logo"
                priority={true}
                className="w-auto h-10"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-14 text-[15px] text-white font-medium">
            <Link href="/about-us/arthawena-at-glance">
              <div className="w-fit pb-1 border-b border-white border-opacity-70">
                <p>ABOUT US</p>
              </div>
            </Link>

            <Link href="/our-business/our-product">
              <div className="w-fit pb-1 border-b border-white border-opacity-70">
                <p>OUR BUSINESS</p>
              </div>
            </Link>

            <Link href="/careers/culture">
              <div className="w-fit pb-1 border-b border-white border-opacity-70">
                <p>CAREERS</p>
              </div>
            </Link>

            <Link href="/sustainability/arthawena-for-sustainability">
              <div className="w-fit pb-1 border-b border-white border-opacity-70">
                <p>SUSTAINABILITY</p>
              </div>
            </Link>

            <Link href="/contact">
              <div className="w-fit pb-1 border-b border-white border-opacity-70">
                <p>CONTACT</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col w-full mt-20 gap-[18px] lg:hidden">
            <p className="text-sm text-white font-medium">arthawena.com</p>
            <h4 className="text-[22px] text-white font-aeonik-medium">
              Arthawena, The Reliable Partner You Can Trust.
            </h4>
          </div>

          <div className="block w-full mt-14 lg:hidden">
            <p className="text-sm text-white font-medium">
              ALL RIGHTS RESERVED &bull; 2024
            </p>
          </div>
        </section>
        {/* <-- === Footer Mobile End === --> */}

        {/* <-- === Footer Desktop Start === --> */}
        <section className="hidden lg:flex flex-col w-full gap-[62px]">
          <div className="flex w-full items-end justify-center gap-16">
            <Link href="/">
              <Image
                src={logosymbol}
                alt="Arthawena Logo"
                priority={true}
                className="w-28 h-auto"
              />
            </Link>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start justify-center gap-4">
                <Link href="/">
                  <p className="text-[13px] text-white font-medium">
                    arthawena.com
                  </p>
                </Link>
                <h4 className="text-4xl leading-tight text-white font-aeonik-medium tracking-wide">
                  Arthawena, The Reliable Partner
                  <br />
                  You Can Trust.
                </h4>
              </div>

              <div className="flex gap-20 text-[13px] text-white font-medium tracking-wide">
                <div className="flex flex-col gap-5">
                  <Link href="/about-us/arthawena-at-glance">
                    <div className="w-fit pb-1 border-b border-white border-opacity-60 hover:border-opacity-100 duration-300 cursor-pointer">
                      <p>ABOUT US</p>
                    </div>
                  </Link>

                  <Link href="/our-business/our-product">
                    <div className="w-fit pb-1 border-b border-white border-opacity-60 hover:border-opacity-100 duration-300 cursor-pointer">
                      <p>OUR BUSINESS</p>
                    </div>
                  </Link>

                  <Link href="/careers/culture">
                    <div className="w-fit pb-1 border-b border-white border-opacity-60 hover:border-opacity-100 duration-300 cursor-pointer">
                      <p>CAREERS</p>
                    </div>
                  </Link>
                </div>

                <div className="flex flex-col gap-5">
                  <Link href="/sustainability/arthawena-for-sustainability">
                    <div className="w-fit pb-1 border-b border-white border-opacity-60 hover:border-opacity-100 duration-300 cursor-pointer">
                      <p>SUSTAINABILITY</p>
                    </div>
                  </Link>

                  <Link href="/contact">
                    <div className="w-fit pb-1 border-b border-white border-opacity-60 hover:border-opacity-100 duration-300 cursor-pointer">
                      <p>CONTACT</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-between text-[13px] text-white font-medium">
            <p>PT ARTHAWENASAKTI GEMILANG</p>
            <p>ALL RIGHTS RESERVED &bull; 2024</p>
          </div>
        </section>
        {/* <-- === Footer Desktop End === --> */}
      </main>
    </>
  );
}

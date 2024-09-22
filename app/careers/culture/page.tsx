// Import Components //
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import Image from "next/image";
import cultureImageMobile from "@/assets/images/culture/img-culture-mobile.webp";
import cultureImage from "@/assets/images/culture/img-culture.webp";
import asset1 from "@/assets/images/culture/Asset1.webp";
import asset2 from "@/assets/images/culture/Asset2.webp";
import asset3 from "@/assets/images/culture/Asset3.webp";
import asset4 from "@/assets/images/culture/Asset4.webp";
import asset5 from "@/assets/images/culture/Asset5.webp";
import asset6 from "@/assets/images/culture/Asset6.webp";

export default function Culture() {
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

      {/* <-- === Image with Text Overlay === --> */}
      <div className="relative w-full h-screen lg:h-[500px] lg:mt-52">
        <div>
          <Image
            src={cultureImageMobile}
            alt="Culture"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover object-right block lg:hidden"
          />
          <Image
            src={cultureImage}
            alt="Culture"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="object-cover object-right hidden lg:block"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-start lg:w-full lg:items-start h-fit bg-gradient-to-b from-white via-white via-70% to-transparent pt-content-padding-top-sm lg:pt-0 lg:bg-none lg:justify-start items-start px-content-padding-sm lg:px-0 pb-[110px]">
          <div className="lg:bg-background lg:w-full lg:px-content-padding-lg 2xl:px-content-padding-2xl">
            <h1 className="font-aeonik-medium text-[50px] text-primary mb-8">
              Culture
            </h1>
          </div>

          <div className="lg:bg-background lg:pb-[30px] lg:pl-[140px] 2xl:pl-[160px] lg:pr-20">
            <p className="text-[15px] lg:text-[17px] lg:leading-relaxed lg:font-light w-fit text-charcoal">
              We prioritize building a supportive and skilled community.{" "}
              <br className="hidden lg:block" />
              Our team members are our greatest asset and we invest in their{" "}
              <br className="hidden lg:block" />
              training and education to provide the best services possible.
            </p>
          </div>
        </div>
      </div>

      {/* <!-- === Culture Content === --> */}
      <div className="px-content-padding-sm lg:px-[220px] 2xl:px-[230px] pt-16 lg:pt-32 pb-28 flex flex-col w-full gap-[70px] lg:gap-44 lg:pb-48">
        <section className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-0 w-full">
          <div className="flex lg:justify-center lg:items-start lg:pt-12 lg:w-full">
            <Image
              src={asset1}
              alt="Code of Conduct Training"
              priority={true}
              className="w-[70px] h-auto lg:w-32"
            ></Image>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h1 className="text-primary text-3xl lg:text-4xl font-aeonik-medium lg:pb-4">
              Code of Conduct
              <br />
              Training
            </h1>
            <div className="flex flex-col gap-5">
              <p className="text-charcoal text-[15px] leading-relaxed text-opacity-90">
                PT. Arthawenasakti Gemilang has established a Business Ethics
                and Code of Conduct {"("}code of conduct{")"} that serves as a
                guideline and applies to all personnel of PT. Arthawenasakti
                Gemilang, from the Board of Directors to all employees, in their
                work and interactions with fellow employees and external
                stakeholders.
              </p>
              <p className="text-charcoal text-[15px] leading-relaxed text-opacity-90">
                To ensure that the code of conduct is understood and followed by
                all employees, PT. Arthawenasakti Gemilang has conducted
                socialization in the form of Code of Conduct training. After the
                training is completed, all employees sign a Declaration Letter
                containing a statement of their willingness to comply with all
                provisions outlined in the Code as a commitment to adherence.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full">
          <div className="flex lg:justify-center lg:items-center lg:w-full">
            <Image
              src={asset2}
              alt="Code of Conduct Training"
              priority={true}
              className="w-[70px] h-auto lg:w-32"
            ></Image>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h1 className="text-primary text-3xl lg:text-4xl font-aeonik-medium lg:pb-4">
              Safety Training
            </h1>
            <div className="flex">
              <p className="text-charcoal text-[15px] leading-relaxed text-opacity-90">
                Training covering various occupational safety topics, including
                identifying potential hazards in the workplace, implementing a
                5S culture, hazard identification methods, accident reporting
                and recording, machine and work tool technical training, as well
                as safe driving techniques.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-0 w-full">
          <div className="flex lg:justify-center lg:items-center lg:w-full">
            <Image
              src={asset3}
              alt="Code of Conduct Training"
              priority={true}
              className="w-[70px] h-auto lg:w-32"
            ></Image>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h1 className="text-primary text-3xl lg:text-4xl font-aeonik-medium lg:pb-4">
              Safety Talk
            </h1>
            <div className="flex">
              <p className="text-charcoal text-[15px] leading-relaxed text-opacity-90">
                A routine 5-10 minute briefing at the start of the workday, led
                by the team leader, aimed at reminding all team members to
                prioritize workplace safety.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full">
          <div className="flex lg:justify-center lg:items-center lg:w-full">
            <Image
              src={asset4}
              alt="Code of Conduct Training"
              priority={true}
              className="w-[70px] h-auto lg:w-32"
            ></Image>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h1 className="text-primary text-3xl lg:text-4xl font-aeonik-medium lg:pb-4">
              Performance Management System (PMS)
            </h1>
            <div className="flex">
              <p className="text-charcoal text-[15px] leading-relaxed text-opacity-90">
                PMS evaluation serves as a platform for setting work targets
                (Maintaining Plan) and skill matrices (Improvement Plan) that
                employees must master, which are then evaluated by their
                supervisors. PMS evaluations also serve as a tool to analyze
                strengths and areas for improvement to help employees achieve
                set performance targets, which are incorporated into their
                Development Plan.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-0 w-full">
          <div className="flex lg:justify-center lg:items-center lg:w-full">
            <Image
              src={asset5}
              alt="Code of Conduct Training"
              priority={true}
              className="w-[70px] h-auto lg:w-32"
            ></Image>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h1 className="text-primary text-3xl lg:text-4xl font-aeonik-medium lg:pb-4">
              GKM
            </h1>
            <div className="flex">
              <p className="text-charcoal text-[15px] leading-relaxed text-opacity-90">
                Gugus Kendali Mutu, it&apos;s a forum held by each department to
                discuss various issues faced by the team, with the goal of
                finding solutions and supporting their implementation.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 w-full">
          <div className="flex lg:justify-center lg:items-center lg:w-full">
            <Image
              src={asset6}
              alt="Code of Conduct Training"
              priority={true}
              className="w-[70px] h-auto lg:w-32"
            ></Image>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <h1 className="text-primary text-3xl lg:text-4xl font-aeonik-medium lg:pb-4">
              Ergonomics
            </h1>
            <div className="flex">
              <p className="text-charcoal text-[15px] leading-relaxed text-opacity-90">
                An integral study of workers, tasks, tools, workplace, and work
                environment aimed at creating a safe and comfortable work
                environment. The goal is to enhance work effectiveness and
                efficiency, including the use of comfortable tools, reducing
                errors, increasing productivity, promoting safety, reducing
                fatigue and stress, improving job satisfaction, and enhancing
                quality of life.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

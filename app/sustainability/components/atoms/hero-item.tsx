import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface HeroItemProps {
  title: string;
  imageSrc: string | StaticImport;
  altText: string;
  description: string;
  isReversed?: boolean;
}

export const HeroItem = ({
  title,
  imageSrc,
  altText,
  description,
  isReversed,
}: HeroItemProps) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:w-full items-center text-center lg:space-y-2"
      dir={isReversed ? "rtl" : "ltr"}
    >
      {/* Title */}
      <h1
        className={`font-aeonik-regular lg:w-full text-4xl lg:text-7xl mb-4 lg:mb-0 ${isReversed ? "lg:text-left" : "lg:text-right"}`}
      >
        {title}
      </h1>

      <div className="flex justify-center lg:w-full lg:justify-center lg:px-14">
        <Image
          src={imageSrc}
          alt={altText}
          className="h-20 w-20 lg:h-52 lg:w-52 rounded-full border border-white bg-white bg-opacity-5"
        />
      </div>

      {/* Description */}
      <p className="font-light text-[15px] lg:w-full lg:text-xl mt-4 lg:mt-0 lg:text-start">
        {description}
      </p>
    </div>
  );
};

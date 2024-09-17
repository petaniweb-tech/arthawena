import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface HeroItemProps {
  title: string;
  imageSrc: string | StaticImport;
  altText: string;
  description: string;
  isReversed?: boolean;
}

export const HeroItem = ({ title, imageSrc, altText, description, isReversed }: HeroItemProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center text-center lg:space-x-10 lg:space-y-2" dir={isReversed ? 'rtl' : 'ltr'}>
      {/* Title */}
      <h1 className={`font-aeonik-regular text-4xl mb-4 lg:mb-0 ${isReversed ? 'lg:ml-10' : 'ml-0'}`}>
        {title}
      </h1>

      <div className="flex justify-center lg:justify-center">
        <Image
          src={imageSrc}
          alt={altText}
          className="h-20 w-20 lg:h-32 lg:w-32 rounded-full border border-white bg-white bg-opacity-5"
        />
      </div>

      {/* Description */}
      <p className="font-light mt-4 lg:mt-0 lg:text-start">
        {description}
      </p>
    </div>
  );
};
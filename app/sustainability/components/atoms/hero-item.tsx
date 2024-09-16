import { cn } from "@/lib/utils";
import { TitlePosition } from "@/types/sustainability";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface HeroItemProps {
    title: string;
    imageSrc: string | StaticImport;
    altText: string;
    description: string;
    titlePosition: string;
  }
  
  export const HeroItem = ({ title, imageSrc, altText, description, titlePosition }: HeroItemProps) => {
    return (
      <div
        className={cn(
          'lg:flex lg:items-center text-center lg:justify-between space-y-4 lg:space-y-0',
          {
            'lg:flex-row': titlePosition === TitlePosition.LEFT,
            'lg:flex-row-reverse': titlePosition === TitlePosition.RIGHT,
          }
        )}
      >
        {/* Title */}
        <h1 className="font-aeonik-regular text-4xl mb-4 lg:mb-0">{title}</h1>
  
        {/* Icon */}
        <Image
          src={imageSrc}
          alt={altText}
          className="mx-auto mb-4 h-20 w-20 lg:h-32 lg:w-32 rounded-full border-2 border-white bg-white bg-opacity-5"
        />
  
        {/* Description */}
        <p className="font-light mt-4 lg:mt-0">{description}</p>
      </div>
  
    );
  };
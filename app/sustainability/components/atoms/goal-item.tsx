import Image from "next/image";
import { PortableText } from "next-sanity";
import portableTextComponents from "@/components/atoms/portable-text";

interface GoalItemProps {
  title: string;
  imageUrl: string;
  description: any[];
  index: number;
}

const GoalItem = ({ title, description, imageUrl, index }: GoalItemProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full lg:justify-between">
      {/* Text Content */}
      <div
        className={`flex flex-col justify-center items-start w-full lg:w-[80%] mb-8 lg:mb-0 ${
          index % 2 !== 0 ? "lg:order-2 justify-self-end" : ""
        }`}
      >
        <h2 className="text-3xl lg:text-4xl text-primary font-aeonik-medium mb-[26px]">
          {title}
        </h2>

        {description && Array.isArray(description) && (
          <div className="text-charcoal text-[15px] leading-relaxed whitespace-pre-line text-opacity-80">
            <PortableText
              value={description}
              components={portableTextComponents}
            />
          </div>
        )}
      </div>

      {/* Image */}
      <div
        className={`flex object-cover object-center w-full h-[250px] lg:w-[80%] lg:h-[300px] mb-16 lg:mb-0
        ${index % 2 !== 0 ? "" : "lg:justify-self-end"}`}
      >
        <Image
          src={imageUrl}
          alt="2030 Goals"
          className="rounded-lg object-cover object-center w-full h-[250px] lg:h-full"
          width={600}
          height={600}
          priority={true}
        />
      </div>
    </div>
  );
};

export default GoalItem;

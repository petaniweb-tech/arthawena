import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { PortableText } from "next-sanity";
import portableTextComponents from "@/components/atoms/portable-text";

interface GoalItemProps {
  title: string;
  image: string | StaticImport;
  description: any[];
  index: number;
}

const GoalItem = ({ title, description, image, index }: GoalItemProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start">
      {/* Text Content */}
      <div
        className={`flex flex-col justify-center items-center lg:items-start lg:w-[450px] mb-8 lg:mb-0 ${
          index % 2 !== 0 ? "lg:order-2" : ""
        }`}
      >
        <h2 className="text-3xl lg:text-4xl text-orange-600 mb-7">{title}</h2>

        {description && Array.isArray(description) && (
          <div className="text-charcoal whitespace-pre-line text-opacity-80">
            <PortableText
              value={description}
              components={portableTextComponents}
            />
          </div>
        )}
      </div>

      {/* Image */}
      {/* <div className={`flex ${index % 2 !== 0 ? "lg:justify-start" : "lg:justify-start"}`}> */}
      <div className="flex lg:justify-start object-cover object-center h-[250px] lg:w-[450px] lg:h-[300px] mb-16">
        <Image
          src={image}
          alt="2030 Goals"
          className="rounded-lg object-cover object-center"
          objectFit="cover"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default GoalItem;

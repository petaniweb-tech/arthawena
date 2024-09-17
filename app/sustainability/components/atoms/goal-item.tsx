import Image from "next/image";
import HeroBackground from "@/assets/images/sustainability/img-hero-background.webp"; // Adjust the path if needed
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8" dir="rtl">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl text-orange-600 mb-6">
                    {title}
                </h2>

                {description &&
                    Array.isArray(description) && (
                        <div className="text-charcoal">
                            <PortableText
                                value={description}
                                components={portableTextComponents}
                            />
                        </div>
                    )}

            </div>
            {/* Image */}
            <Image
                src={image}
                alt="2030 Goals"
                className="rounded-lg shadow-lg w-full h-auto max-w-[500px] max-h-[300px] mb-16"
                objectFit="cover"
                width={500}
                height={300}
            />
        </div>
    );
};

export default GoalItem;

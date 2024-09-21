import { GoalType } from './../sanity/schemaTypes/goal';
import IcWeGrow from "@/assets/icons/sustainability/ic-we-grow.webp";
import IcWeEvolve from "@/assets/icons/sustainability/ic-we-evolve.webp";
import IcWeCare from "@/assets/icons/sustainability/ic-we-care.webp";

export type CsrImageType = {
  type: string;
  url: string;
};

export const heroSustainType = [
  {
    title: "We Grow",
    imageSrc: IcWeGrow,
    altText: "We Grow Icon",
    description: "Excellent",
    isReversed: false,
  },
  {
    title: "We Evolve",
    imageSrc: IcWeEvolve,
    altText: "We Evolve Icon",
    description: "Service",
    isReversed: true,
  },
  {
    title: "We Care",
    imageSrc: IcWeCare,
    altText: "We Care Icon",
    description: "Accountability",
    isReversed: false,
  },
];

export type GoalType = {
  title: string;
  imageUrl: string;
  description?: any[];
}

export type CsrType = {
  title: string;
  titleColor: string;
  subtitle: string; 
  description: any[];
  images: CsrImageType[];
}
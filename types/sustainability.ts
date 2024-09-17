import IcWeGrow from "@/assets/icons/sustainability/ic-we-grow.webp";
import IcWeEvolve from "@/assets/icons/sustainability/ic-we-evolve.webp";
import IcWeCare from "@/assets/icons/sustainability/ic-we-care.webp";


export const TitlePosition = Object.freeze({
  LEFT: "left",
  RIGHT: "right",
});

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
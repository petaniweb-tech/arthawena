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
      titlePosition: TitlePosition.LEFT,
    },
    {
      title: "We Evolve",
      imageSrc: IcWeEvolve,
      altText: "We Evolve Icon",
      description: "Service",
      titlePosition: TitlePosition.RIGHT,
    },
    {
      title: "We Care",
      imageSrc: IcWeCare,
      altText: "We Care Icon",
      description: "Accountability",
      titlePosition: TitlePosition.LEFT,
    },
  ];
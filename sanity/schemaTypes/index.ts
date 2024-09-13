import { type SchemaTypeDefinition } from "sanity";
import { BannerType } from "./banner";
import { JoinUsType } from "./join-us";
import { CertificationType } from "./certification";
import { ProductType } from "./product";
import { ArthawenaAtGlanceType } from "./arthawena-at-glance"
import { GoalType } from "./goal";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    BannerType, 
    JoinUsType, 
    CertificationType, 
    ProductType, 
    ArthawenaAtGlanceType, 
    GoalType,
  ],
};

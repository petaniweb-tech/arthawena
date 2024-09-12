import { type SchemaTypeDefinition } from "sanity";
import { BannerType } from "./banner";
import { JoinUsType } from "./join-us";
import { CertificationType } from "./certification";
import { ProductType } from "./product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BannerType, JoinUsType, CertificationType, ProductType],
};

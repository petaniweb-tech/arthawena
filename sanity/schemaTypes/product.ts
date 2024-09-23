import { defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";
import { ValidationContext } from "@sanity/types";
import { positionValidation } from "../lib/position-validation";

export const ProductType = defineType({
  name: "product",
  title: "Our Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "number",
      description: "The position of content",
      validation: (Rule: any) =>
        Rule.positive().custom((value: number, context: ValidationContext) => {
          return positionValidation("product", value, context);
        }),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: any) => Rule.required(), // Requires only one image
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      position: "position",
    },
    prepare(selection) {
      const { title, media, position } = selection;
      return {
        title: title,
        subtitle: `Position: ${position ? position : "-"}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Position",
      name: "positionDesc",
      by: [{ field: "position", direction: "asc" }],
    },
  ],
});

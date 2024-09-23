import { defineField, defineType } from "sanity";
import { BookIcon } from '@sanity/icons'
import { ValidationContext } from "@sanity/types";
import { positionValidation } from "../lib/position-validation";

export const ArthawenaAtGlanceType = defineType({
  name: "arthawena-at-glance",
  title: "Arthawena at Glance",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "number",
      description: "The position of content",
      validation: (Rule: any) =>
        Rule.positive().custom((value: number, context: ValidationContext) => {
          return positionValidation("arthawena-at-glance", value, context);
        }),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: any) => Rule.required(), // Requires only one image
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [],
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "employee",
      title: "Employee",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
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

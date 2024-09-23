import { defineField, defineType } from "sanity";
import { SparkleIcon } from "@sanity/icons";
import { ValidationContext } from "@sanity/types";
import { positionValidation } from "../lib/position-validation";

export const TechnologyType = defineType({
  name: "technology",
  title: "Our Technology",
  type: "document",
  icon: SparkleIcon,
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "number",
      description: "The position of content",
      validation: (Rule: any) =>
        Rule.positive().custom((value: number, context: ValidationContext) => {
          return positionValidation("technology", value, context);
        }),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "specification",
      title: "Specification",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [],
          },
        },
      ],
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
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [],
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Assets",
      type: "array",
      of: [
        {
          type: "image",
          title: "Image",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      position: "position",
    },
    prepare(selection) {
      const { title, position } = selection;
      return {
        title: title,
        subtitle: `Position: ${position ? position : "-"}`,
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

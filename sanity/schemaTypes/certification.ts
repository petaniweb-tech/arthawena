import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";
import { ValidationContext } from "@sanity/types";
import { positionValidation } from "../lib/position-validation";

export const CertificationType = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "number",
      description: "The position of content",
      validation: (Rule: any) =>
        Rule.positive().custom((value: number, context: ValidationContext) => {
          return positionValidation("certification", value, context);
        }),
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
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "backgroundColor",
      title: "Color",
      type: "color",
      validation: (Rule: any) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
      position: "position",
    },
    prepare(selection) {
      const { title, position } = selection;

      return {
        title,
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

import { defineField, defineType } from "sanity";
import { SparkleIcon } from "@sanity/icons";
import { ValidationContext } from "@sanity/types";

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
        Rule.positive().custom(
          async (value: number, context: ValidationContext) => {
            try {
              if (!value) return true;

              const { document, getClient } = context;

              const client = getClient({ apiVersion: "vX" });
              if (!client) throw new Error("Sanity client is not available");

              const documentID = document?._id;
              if (!documentID) throw new Error("Document not found!");

              const query = `!defined(*[_type == "technology" && !(_id in [$id, $draftID]) && position == $position][0]._id)`;
              const isUnique = await client.fetch(query, {
                position: value,
                id: documentID?.replace("drafts.", "") || documentID,
                draftID: documentID,
              });

              if (isUnique) {
                return true;
              }

              throw new Error("Position must be unique");
            } catch (error: any) {
              return error.message;
            }
          }
        ),
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

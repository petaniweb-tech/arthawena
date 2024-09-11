import React from "react"; // Import React
import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";
import { ValidationContext } from "@sanity/types";
import { Box } from "@sanity/ui";

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
        Rule.positive().custom(
          async (value: number, context: ValidationContext) => {
            try {
              if (!value) return true;

              const { document, getClient } = context;

              const client = getClient({ apiVersion: "vX" });
              if (!client) throw new Error("Sanity client is not available");

              const documentID = document?._id;
              if (!documentID) throw new Error("Document not found!");

              const query = `!defined(*[_type == "projects" && !(_id in [$id, $draftID]) && position == $position][0]._id)`;
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

import { defineField, defineType } from "sanity";
import { BookIcon } from '@sanity/icons'
import { ValidationContext } from "@sanity/types";

export const ArthawenaAtGlanceType = defineType({
  name: "arthawenaAtGlance",
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
        Rule.positive().custom(
          async (value: number, context: ValidationContext) => {
            try {
              if (!value) return true;

              const { document, getClient } = context;

              const client = getClient({ apiVersion: "vX" });
              if (!client) throw new Error("Sanity client is not available");

              const documentID = document?._id;
              if (!documentID) throw new Error("Document not found!");

              const query = `!defined(*[_type == "arthawenaAtGlance" && !(_id in [$id, $draftID]) && position == $position][0]._id)`;
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

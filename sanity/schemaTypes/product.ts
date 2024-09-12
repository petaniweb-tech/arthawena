import { defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";
import { ValidationContext } from "@sanity/types";

export const ProductType = defineType({
  name: "product",
  title: "product",
  type: "document",
  icon: PackageIcon,
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

              const query = `!defined(*[_type == "product" && !(_id in [$id, $draftID]) && position == $position][0]._id)`;
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

import { defineField, defineType, ValidationContext } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const CSRType = defineType({
    name: "csr",
    title: "CSR",
    type: "document",
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "titleColor",
            title: "Title Color",
            type: "color",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "array",
            of: [{
                type: 'block',
                marks: {
                    annotations: [],
                },
            }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule: any) => Rule.required(), // Requires only one image
        }),
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

                            const query = `!defined(*[_type == "csr" && !(_id in [$id, $draftID]) && position == $csr][0]._id)`;
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
    ],
    preview: {
        select: {
            title: "title",
            media: "images",
            position: "position",
        },
        prepare(selection) {
            const { title, position, media } = selection;
            return {
                title: title.toUpperCase(),
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
import { defineField, defineType, ValidationContext } from "sanity";
import { BlockElementIcon } from "@sanity/icons";
import { positionValidation } from "../lib/position-validation";

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
            name: "position",
            title: "Position",
            type: "number",
            description: "The position of content",
            validation: (Rule: any) => Rule.positive().custom((value: number, context: ValidationContext) => {
                return positionValidation("csr", value, context);
            }),

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
                title: title.toUpperCase(),
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
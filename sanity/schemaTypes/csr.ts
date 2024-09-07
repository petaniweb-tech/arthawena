import { defineField, defineType } from "sanity";
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
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            options: {
                layout: "grid",
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "position",
            title: "Position",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
            media: "images",
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            const firstImage = media.find((m: any) => m._type === "image");
            return {
                title: title.toUpperCase(),
                subtitle: subtitle,
                media: firstImage,
            };
        },
    },
});
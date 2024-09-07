import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const GoalType = defineType({
    name: "goals",
    title: "Goals",
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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
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
            media: "image",
        },
        prepare(selection) {
            const { title, media } = selection;
            return {
                title: title.toUpperCase(),
                media: media,
            };
        },
    },
});

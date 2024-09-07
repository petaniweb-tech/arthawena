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
            type: "text",
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
            type: "string",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Right", value: "right" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
});
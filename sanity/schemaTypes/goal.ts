import { defineField, defineType, ValidationContext } from "sanity";
import { DiamondIcon } from "@sanity/icons";
import { positionValidation } from "../lib/position-validation";

export const GoalType = defineType({
    name: "goals",
    title: "Goals",
    type: "document",
    icon: DiamondIcon,
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
            description: "The position of content",
            validation: (Rule: any) => Rule.positive().custom((value: number, context: ValidationContext) => {
                return positionValidation("goals", value, context);
            }),

        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
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

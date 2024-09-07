import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const JoinUsType = defineType({
    name: "join-us",
    title: "Join Us",
    type: "document",
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: "address",
            title: "Address",
            type: "text",
            validation: (Rule) => Rule.required(),
            description: "Enter the full address in HTML format",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule) =>
                Rule.required()
                    .regex(
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        { name: "email", invert: false }
                    )
                    .error("Please enter a valid email address."),
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url",
            validation: (Rule) => Rule.required().uri({ allowRelative: false }),
            description: "Enter a valid URL. (example: https://www.google.com)",
        }),
    ],
});

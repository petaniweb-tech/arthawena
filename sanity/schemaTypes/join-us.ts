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
            description: "Enter a valid URL. (example: https://www.google.com)",
            validation: (Rule) => Rule.required().uri({ allowRelative: false }),
        }),
    ],
    preview: {
        select: {
          title: "email",
          subtitle: "address",
        },
        prepare(selection) {
          const { title, subtitle } = selection;

          const addressText = subtitle && subtitle[0] && subtitle[0].children
          ? subtitle[0].children.map((item: { text: any; }) => item.text).join(' ')
          : 'No address provided';

          return {
            title: `Section for ${title}`,
            subtitle: addressText,
          };
        },
      },
});

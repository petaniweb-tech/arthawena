import { defineField, defineType } from "sanity";
import { BlockElementIcon } from "@sanity/icons";

export const BannerType = defineType({
  name: "banners",
  title: "Banners",
  type: "document",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      readOnly: true,
      validation: (Rule: any) => Rule.required(),
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
        {
          type: "file",
          title: "Video", // More generic title to reflect both image and video
          options: {
            accept: "video/*", // Allows both image and video files
          },
          fields: [
            {
              name: "thumbnail",
              title: "Thumbnail",
              type: "image",
              hidden: ({ parent }) => !parent?.asset,
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "section",
      media: "images",
    },
    prepare(selection) {
      const { title, media } = selection;
      const firstImage = media.find((m: any) => m._type === "image");
      return {
        title: title.toUpperCase(),
        subtitle: `Configuration section ${title.toUpperCase()}`,
        media: firstImage,
      };
    },
  },
});

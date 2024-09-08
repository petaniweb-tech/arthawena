import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Arthawena",

  projectId: "ezpddyb6",
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },

  document: {
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      const { type, schemaType } = creationContext;
      if (
        type === "structure" &&
        ["banners", "join-us"].includes(schemaType)
      ) {
        return [];
      }

      return prev;
    },
  },
});

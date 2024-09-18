import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemaTypes";
import { colorInput } from "@sanity/color-input";

export default defineConfig({
  name: "default",
  title: "Arthawena",

  projectId: "ezpddyb6",
  dataset: "production",

  plugins: [structureTool(), visionTool(), colorInput()],

  schema: {
    types: schema.types,
  },

  document: {
    newDocumentOptions: (prev, { currentUser, creationContext }) => {
      const { type, schemaType } = creationContext;
      if (type === "structure" && ["banners", "join-us", "goals"].includes(schemaType)) {
        return [];
      }

      return prev;
    },
  },
});

import { ValidationContext } from "sanity";

export const positionValidation = async (collectionName: string, value: number, context: ValidationContext) => {
    try {
      if (!value) return true;
  
      const { document, getClient } = context;
  
      const client = getClient({ apiVersion: "vX" });
      if (!client) throw new Error("Sanity client is not available");
  
      const documentID = document?._id;
      if (!documentID) throw new Error("Document not found!");
  
      const query = `!defined(*[_type == "${collectionName}" && !(_id in [$id, $draftID]) && position == $"${collectionName}"][0]._id)`;
  
      const isUnique = await client.fetch(query, {
        position: value,
        id: documentID?.replace("drafts.", "") || documentID,
        draftID: documentID,
      });
  
      if (isUnique) {
        return true;
      }
  
      throw new Error("Position must be unique");
    } catch (error: any) {
      return error.message;
    }
  };
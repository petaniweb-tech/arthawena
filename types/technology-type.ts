export type TechnologyImageType = {
  type: string;
  url: string;
};

export type TechnologyType = {
  title: string;
  specification: any[]; // You can refine this to a more specific type if needed
  description: any[];
  images: TechnologyImageType[]; // Add the 'images' array
  _createdAt: string;
  _updatedAt: string;
};

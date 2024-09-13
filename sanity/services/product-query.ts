export const productQuery = `*[_type == "product"]{
  title,
  position,
  "imageUrl": image.asset->url,
  _createdAt,
  _updatedAt
} | order(position asc)`;

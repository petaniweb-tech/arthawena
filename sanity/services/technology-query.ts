export const technologyQuery = `*[_type == "technology"]{
  title,
  position,
  specification[],
  description[],
  images[]{
      _type == "image" => {
        "type": "image",
        "url": asset->url
      },
    },
  _createdAt,
  _updatedAt
} | order(position asc)`;

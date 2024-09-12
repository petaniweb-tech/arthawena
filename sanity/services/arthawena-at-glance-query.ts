export const arthawenaAtGlanceQuery = `*[_type == "arthawena-at-glance"]{
    title,
    position,
    description[] {
      ...,
      children[]{
        text
      }
    },
    employee,
    location,
    "imageUrl": image.asset->url,
    _createdAt,
    _updatedAt
  } | order(position asc)`;  
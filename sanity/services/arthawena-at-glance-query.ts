export const arthawenaAtGlanceQuery = `*[_type == "arthawena-at-glance"]{
    title,
    position,
    description[],
    employee,
    location,
    "imageUrl": image.asset->url,
    _createdAt,
    _updatedAt
  } | order(position asc)`;  
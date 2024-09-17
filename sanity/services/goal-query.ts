export const goalQuery = `*[_type == "goals"]{
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    position
  } | order(position asc)`;
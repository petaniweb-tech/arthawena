export const goal = `*[_type == "goals"]{
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    position
  }`;
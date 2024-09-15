export const csrQuery = `*[_type == "csr"]{
    _id,
    title,
    titleColor,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    position
  }`;
export const csrQuery = `*[_type == "csr"]{
    _id,
    title,
    "titleColor": titleColor.hex,
    subtitle,
    description,
    images[]{
        _type == "image" => {
          "type": "image",
          "url": asset->url
        },
      },
    position
  } | order(position asc)`;
  
export const certificationQuery = `
  *[_type == "certification"]{
    title,
    position,
    description[] {
      ...,
      children[]{
        text
      }
    },
    "backgroundColor": backgroundColor.hex,
    _createdAt,
    _updatedAt
  } | order(position asc)
`;

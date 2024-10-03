export const bannerQuery = `
  *[_type == "banners"] {
    section,
    images[]{
      _type == "image" => {
        "type": "image",
        "url": asset->url
      },
      _type == "file" => {
        "type": "video",
        "url": asset->url,
        "thumbnail": thumbnail.asset->url
      }
    }
  }
`;

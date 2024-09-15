export const joinUsQuery = `*[_type == "join-us"][0]{
    email,
    address[],
    link
  }`;


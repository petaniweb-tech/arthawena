import {
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from "@portabletext/react";

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    block: ({ value }: PortableTextTypeComponentProps<any>) => {
      switch (value.style) {
        case "h1":
          return <h1 className="text-4xl font-bold">{value.children}</h1>;
        case "h2":
          return <h2 className="text-3xl font-semibold">{value.children}</h2>;
        case "h3":
          return <h3 className="text-2xl font-medium">{value.children}</h3>;
        case "h4":
          return <h4 className="text-xl font-normal">{value.children}</h4>;
        case "h5":
          return <h5 className="text-lg font-normal">{value.children}</h5>;
        case "h6":
          return <h6 className="text-base font-normal">{value.children}</h6>;
        default:
          return (
            <p>
              {value.children.map((child: any, index: number) => (
                <span key={index}>
                  {child.marks && child.marks.includes("strong") ? (
                    <strong>{child.text}</strong>
                  ) : child.marks && child.marks.includes("em") ? (
                    <em>{child.text}</em>
                  ) : child.marks && child.marks.includes("strike-through") ? (
                    <s>{child.text}</s>
                  ) : child.marks && child.marks.includes("code") ? (
                    <code className="bg-gray-200 text-red-600 p-1 rounded">
                      {child.text}
                    </code>
                  ) : (
                    child.text
                  )}
                </span>
              ))}
            </p>
          );
      }
    },
    listItem: ({ value }: PortableTextTypeComponentProps<any>) => (
      <li className="ml-4 list-disc">
        {value.children.map((child: any, index: number) => child.text)}
      </li>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6">{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }: PortableTextMarkComponentProps<any>) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: PortableTextMarkComponentProps<any>) => (
      <em className="italic">{children}</em>
    ),
    strikeThrough: ({ children }: PortableTextMarkComponentProps<any>) => (
      <s>{children}</s>
    ),
    code: ({ children }: PortableTextMarkComponentProps<any>) => (
      <code className="bg-gray-200 text-red-600 p-1 rounded">{children}</code>
    ),
  },
};

export default portableTextComponents;

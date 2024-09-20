import React from "react";

import {
  PortableTextReactComponents,
  PortableTextMarkComponentProps,
  PortableTextTypeComponentProps,
} from "@portabletext/react";

interface PortableTextValue {
  style: keyof JSX.IntrinsicElements;
  children: string | string[];
}

const headingStyles: Record<string, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  h4: "text-xl font-normal",
  h5: "text-lg font-normal",
  h6: "text-base font-normal",
};

const isHeading = (style: PortableTextValue["style"]): boolean =>
  style in headingStyles;
const renderHeading = (value: PortableTextValue) => {
  const Tag = value.style;
  return <Tag className={headingStyles[value.style]}>{value.children}</Tag>;
};

const renderParagraph = (children: string[]) => (
  <p>
    {children.map((child: string, index: number) => renderChild(child, index))}
  </p>
);

const renderChild = (child: string | Record<string, any>, index: number) => {
  if (typeof child === "string") {
    return renderTextWithLineBreaks(child, index);
  }
  return renderMarkComponent(child, index);
};

const renderTextWithLineBreaks = (text: string, index: number) =>
  text.split("\n").map((line: string, i: number) => (
    <React.Fragment key={`${index}-${i}`}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ));

const renderMarkComponent = (child: Record<string, any>, index: number) => {
  const markComponents: Record<string, React.JSX.Element> = {
    strong: <strong>{child.text}</strong>,
    em: <em>{child.text}</em>,
    underline: <u>{child.text}</u>,
    "strike-through": <s>{child.text}</s>,
    code: (
      <code className="bg-gray-200 text-red-600 p-1 rounded">{child.text}</code>
    ),
  };
  const Mark = child.marks?.[0] && markComponents[child.marks[0]];
  return <span key={index}>{Mark || child.text}</span>;
};

const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    block: ({ value }: PortableTextTypeComponentProps<PortableTextValue>) => {
      if (isHeading(value.style)) return renderHeading(value);

      return renderParagraph(value.children as string[]);
    },
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
    underline: ({ children }: PortableTextMarkComponentProps<any>) => (
      <u className="underline">{children}</u> // Underline support added here
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

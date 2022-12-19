import React from "react";

type Tag = "div" | "span" | "h1" | "h2";
type Variant = "title-1" | "body" | "lable" | "lable-2";

interface TypographyProps {
  tag?: Tag;
  variant: Variant;
  children: string;
}
export const Typography: React.FC<TypographyProps> = ({
  tag = "div",
  variant,
  children,
}) => {
  const Component = tag;

  return <Component className={variant}>{children}</Component>;
};

import React from "react";

type GridCardProps = {
  children?: React.ReactNode;
  href?: string;
  style?: {},
};

function GridCard({ children, style, href }: GridCardProps) {
  const className = `
    flex flex-col grow-1
    place-content-stretch
    p-8 rounded-2xl
  `;

  const finalStyle = { ...style, flexBasis: "48%" }

  return <div className={className} style={finalStyle}>
    {children}
  </div>;
}

export default GridCard;

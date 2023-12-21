import React from "react";

type GridCardProps = {
  children?: React.ReactNode;
  href?: string;
};

function GridCard({ children }: GridCardProps) {
  const style = "w-full h-full bg-zinc-900 p-8";

  return <div className={style}>
    {children}
  </div>;
}

export default GridCard;

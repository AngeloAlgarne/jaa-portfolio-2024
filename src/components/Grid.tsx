import React from "react";

type GridProps = {
  children?: React.ReactNode;
  style?: {};
};

function Grid({ children, style }: GridProps) {
  return (
    <div
      className="flex flex-wrap gap-4 w-full h-full justify-start"
      style={style}
    >
      {children}
    </div>
  );
}

export default Grid;

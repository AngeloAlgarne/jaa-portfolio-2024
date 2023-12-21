import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

type GridProps = {
  children?: React.ReactNode;
  row?: number;
  col?: number;
};

function Grid({ children, row = 2, col = 2 }: GridProps) {
  const style = `grid grid-rows-${row} grid-cols-${col} gap-8`;
  return <div className={style}>{children}</div>;
}

export default Grid;

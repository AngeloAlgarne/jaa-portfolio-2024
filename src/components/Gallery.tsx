"use client";

import React from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type GalleryType = {
  srcArray: {
    src: string;
    alt: string;
  }[];
};

function Gallery({ srcArray }: GalleryType) {
  const arrowButtonStyle = { verticalAlign: "middle", height: "100%" };
  const ArrowButton = ({ children }: { children: React.ReactNode }) => {
    const className: string = `
      p-2 rounded-2xl
      hover:bg-slate-700 cursor-pointer transition-all duration-500
    `
    return (
      <div className={className}>
        {children}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="overflow-hidden rounded-2xl w-fit">
        {srcArray &&
          srcArray.map(({ src, alt }, index) => {
            return (
              <Image key={index} src={src} alt={alt} width={600} height={400} />
            );
          })}
      </div>
      <div className="flex justify-center gap-10 p-5">
        <ArrowButton>
          <IoIosArrowBack style={arrowButtonStyle} />
        </ArrowButton>
        <div className="flex flex-col justify-center h-full"><p>⚪⚫⚫</p></div>
        <ArrowButton>
          <IoIosArrowForward style={arrowButtonStyle} />
        </ArrowButton>
      </div>
    </div>
  );
}

export default Gallery;

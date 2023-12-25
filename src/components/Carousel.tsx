import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type CarouselType = {
  children: React.ReactNode
  style?: any,
}

function Carousel({ children, style }: CarouselType) {

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
    <div className="flex flex-col justify-center" style={style}>
      <div className="h-16">
        {/* TO EQUALIZE SPACE */}
      </div>
      <div className="overflow-hidden rounded-2xl w-fit">
        {children}
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

export default Carousel;

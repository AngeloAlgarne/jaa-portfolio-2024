import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex-1 flex w-full h-full">
      <div className="flex flex-col w-3/5 gap-10 justify-center">
        <h1>Helloooo</h1>
        <h1 className="text-8xl font-bold">Hello World.</h1>
        <h1>Goodbye World.</h1>
      </div>
      <div className="flex flex-col w-2/5 justify-center">
        <div className="overflow-hidden rounded-2xl w-fit">
          <Image
            src="/img/my_image_1.jpg"
            alt="My image"
            width={600}
            height={400}
          />
        </div>
        <div className="flex justify-center gap-10 p-5">
          <div>prev</div>
          <div>pagination</div>
          <div>next</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

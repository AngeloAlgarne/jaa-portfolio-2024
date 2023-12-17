import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex h-full justify-between">
      <div id="hero__left" className="flex flex-col gap-10 justify-center">
        <h1>Hi,</h1>
        <h1 className="text-8xl font-bold">Hello World.</h1>
        <h1>Goodbye World.</h1>
      </div>
      <div className="right-part flex flex-col justify-center">
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
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";

function Gallery() {
  return (
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
  );
};

export default Gallery;

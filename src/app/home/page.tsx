import React from "react";
import { Gallery } from "@/components";

function Home() {
  const heroImageSrcArray = [
    { src: "/img/home/my_image_1.jpg", alt: "My image 1" },
    // {src:"/img/home/my_image_2.png", alt:"My image 2"},
  ];

  return (
    <>
      <section className="flex min-h-screen justify-between">
        <div id="hero__left" className="flex flex-col gap-10 justify-center">
          <h1>Hi,</h1>
          <h1 className="text-8xl font-bold">Hello World.</h1>
          <h1>Goodbye World.</h1>
        </div>
        <Gallery srcArray={heroImageSrcArray} />
      </section>
      <section>
        <div className="flex flex-col justify-center">

        </div>
        <div id="hero__left" className="flex flex-col gap-10 justify-center">
          <h1 className="text-8xl">My</h1>
          <h1 className="text-8xl font-bold">Projects</h1>
        </div>
      </section>
    </>
  );
}

export default Home;

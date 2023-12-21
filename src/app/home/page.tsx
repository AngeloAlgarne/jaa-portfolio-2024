import React from "react";
import { promises as fs } from "fs";
import { Gallery, Grid, GridCard } from "@/components";

async function Home() {
  const heroImageSrcArray = [
    { src: "/img/home/my_image_1.jpg", alt: "My image 1" },
    // {src:"/img/home/my_image_2.png", alt:"My image 2"},
  ];

  // const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  // const data = JSON.parse(file);


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
      <section className="flex justify-between mb-64">
        <div className="flex flex-col justify-center w-3/5">
          <Grid row={2} col={2}>
            <GridCard>
              <div>
                1
              </div>
            </GridCard>
            <GridCard>
              <div>
                1
              </div>
            </GridCard>
            <GridCard>
              <div>
                1
              </div>
            </GridCard>
            <GridCard>
              <div>
                1
              </div>
            </GridCard>
          </Grid>
        </div>
        <div id="hero__left" className="flex flex-col gap-10 justify-center">
          <h1 className="text-7xl">My</h1>
          <h1 className="text-7xl font-bold">Projects</h1>
        </div>
      </section>
    </>
  );
}

export default Home;

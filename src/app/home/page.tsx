import React from "react";
import Image from "next/image";
import { Carousel, Grid, GridCard } from "@/components";
import { HeroSection, ProjSkillSection } from "@/data/home";
import SkillCard from "./SkillCard";

function Home() {
  const images = HeroSection.imgs;
  const profile = HeroSection.profile;
  const skills = ProjSkillSection.skills;

  const projects = ProjSkillSection.projects;
  const projCardBaseStyle = {
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundColor: "rgba(24,24,27,0.9)",
    backgroundBlendMode: "darken",
  };

  const projCardStyles = [];
  for (let proj of projects) {
    const style = projCardBaseStyle;
    style.backgroundImage = `url("${proj.src}")`;
    projCardStyles.push(style);
  }

  return (
    <>
      <section className="flex min-h-screen justify-between gap-20">
        <div
          id="hero__left"
          className="flex flex-col gap-10 justify-center w-2/3"
        >
          <h1 className="text-8xl whitespace-pre-wrap">
            John Angelo{"\n"}
            <span className="font-bold">Algarne</span>
          </h1>
          <p className="">{profile}</p>
        </div>
        <Carousel>
          {images &&
            images.map(({ src, alt }, index) => {
              return (
                <Image
                  key={index}
                  width={520}
                  height={400}
                  src={src}
                  alt={alt}
                  priority
                />
              );
            })}
        </Carousel>
      </section>
      <section className="flex mt-16 mb-64">
      <div className="w-2/5 h-full pr-12 border-r-2">
          <div className="flex justify-end w-full mb-4">
            <h1 className="text-5xl whitespace-nowrap">
              MY<span className="font-bold">SKILLS</span>
            </h1>
          </div>
          <div className="w-full h-full">
            <ul className="flex flex-col text-base gap-4">
              {skills &&
                skills.map(({ name, details }) => {
                  return (
                    <li>
                      <SkillCard name={name} details={details} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full h-max pl-12">
          <div className="flex w-full justify-start mb-4">
            <h1 className="flex justify-start text-5xl whitespace-nowrap">
              MY <span className="font-bold">PROJECTS</span>
            </h1>
          </div>
          <Grid>
            {projects &&
              projects.map((proj) => {
                const style = { ...projCardBaseStyle };
                style.backgroundImage = `url("${proj.src}")`;
                return (
                  <GridCard style={style}>
                    <h1 className="w-full text-center font-bold text-lg mb-5">
                      {proj.name}
                    </h1>
                    <p>{proj.desc}</p>
                  </GridCard>
                );
              })}
          </Grid>
        </div>
        
      </section>
    </>
  );
}

export default Home;

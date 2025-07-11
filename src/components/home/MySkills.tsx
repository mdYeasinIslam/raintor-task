import React from "react";
import SkillsCard from "./SkillsCard";
import OuterArrowButton from "../shared/OuterArrowButton";

export default function MySkills() {
  return (
    <section className=" text-white px-1 md:px-5 heading">
      <div className="container mx-auto bg-black py-16 xl:py-20 px-4 lg:px-8 xl:px-16 rounded-xl space-y-8 xl:space-y-10">
        {<OuterArrowButton title="Why Choose Us" />}
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <h1 className=" text-4xl lg:text-4xl xl:text-6xl leading-[40px] lg:leading-[50px] xl:leading-[80px] font-semibold">
            My Extensive <br />
            List of Skills
          </h1>
          <p className="md:text-end text-sm xl:text-normal">
            Building the worlds best marketing Your
            <br /> trusted partner for strategy, design, and dev.
          </p>
        </div>
        <div>
          <SkillsCard />
        </div>
      </div>
    </section>
  );
}

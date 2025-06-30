import React from "react";
import { BiDownArrowCircle } from "react-icons/bi";
import SkillsCard from "./SkillsCard";

export default function MySkills() {
  return (
    <section className="bg-white my-10 text-white p-5 heading">
      <div className="container mx-auto bg-black py-16 xl:py-20 px-4 lg:px-8 xl:px-16 rounded-xl space-y-8 xl:space-y-10">
        <div className="flex items-center "> 
            <BiDownArrowCircle className="w-10 h-10"/>
            <button className="border rounded-full px-3 py-2">Why Choose Us</button>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <h1 className=" text-4xl lg:text-4xl xl:text-6xl leading-[40px] lg:leading-[50px] xl:leading-[80px] font-semibold">My Extensive <br />List of Skills</h1>
          <p className="md:text-end text-sm xl:text-normal">
            Building the worlds best marketing Your<br /> trusted partner for
            strategy, design, and dev.
          </p>
        </div>
        <div>
            <SkillsCard/>
        </div>
      </div>
    </section>
  );
}

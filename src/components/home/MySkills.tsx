import React from "react";
import { BiDownArrowCircle } from "react-icons/bi";

export default function MySkills() {
  return (
    <section className="bg-white my-10 text-white p-5 heading">
      <div className="container mx-auto bg-black py-20 px-16 rounded-xl space-y-10">
        <div className="flex items-center gap-2"> 
            <BiDownArrowCircle className="w-10 h-10"/>
            <button className="border rounded-full px-3 py-2">Why Choose Us</button>
        </div>
        <div className="flex justify-between">
          <h1 className="text-6xl leading-[80px] font-semibold">My Extensive <br />List of Skills</h1>
          <p className="text-end">
            Building the worlds best marketing Your<br /> trusted partner for
            strategy, design, and dev.
          </p>
        </div>
      </div>
    </section>
  );
}

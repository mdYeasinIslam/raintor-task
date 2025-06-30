import React from "react";
import OuterArrowButton from "../shared/OuterArrowButton";
import ServiceAllCard from "./ServiceAllCard";

export default function WorkProcessSection() {
  return (
    <section className="bg-white text-white px-2 md:px-5 heading">
      <div className="container mx-auto bg-[#141414] py-16 xl:py-20 px-4 lg:px-8 xl:px-16 rounded-xl space-y-8 xl:space-y-10 ">
        {/* heding part */}
        <div className="flex items-center gap-10">
          <OuterArrowButton title="Work Process" />
          <h1 className=" text-4xl lg:text-4xl xl:text-6xl leading-[40px] lg:leading-[50px] xl:leading-[80px] font-semibold">
            My Work Process
          </h1>
        </div>
        {/* card par */}
        <div>
          <ServiceAllCard />
        </div>
      </div>
    </section>
  );
}

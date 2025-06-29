import Image from "next/image";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export default function () {
  return (
    <section className=" h-[500px]">
      <Image
        src="/herobg.png"
        alt="hero image"
        fill
        className=" absolute-0 w-full h-full z-0"
        priority
      />
      <div className="relative  pl-12 z-10 mt-24">
        <h1 className=" text-[78px] font-semibold leading-[126px] heading">
          Trusted{" "}
          <span className="bg-black text-white rounded-md px-2">Partner</span>{" "}
          for <br /> Your Website{" "}
          <span className="bg-black text-white rounded-md px-2">Develop.</span>
        </h1>
        <div className="w-[40%] mx-auto mt-12 space-y-10">
          <p className="text-xl ">
            Building the worlds best marketing websites for over a decade.{" "}
            <br />
            Your trusted partner for strategy, design, and dev.
          </p>
          <button className="flex items-center border border-gray-400 rounded-full px-4 py-2 bg-white hover:bg-gray-100 transition-colors">
            <FiArrowRightCircle className="flex items-center justify-center w-8 h-8 rounded-full   mr-2" />

            <span className="font-semibold text-gray-800">Schedule a Call</span>
          </button>
        </div>
      </div>
    </section>
  );
}

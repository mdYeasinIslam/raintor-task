import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";

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
        <h1 className=" text-[78px] font-semibold leading-[126px] heading ">
          Trusted{" "}
          <span className="bg-black m-0 p-0 text-white rounded-md px-2  ">Partner</span>{" "}
          for 7 Your Website{" "}
          <span className="bg-black text-white rounded-md px-2  ">Develop.</span>
        </h1>

        <div className="flex items-start">
          {/* content-1 */}
          <div className="flex flex-row-reverse items-center ">
            <div className="flex flex-col items-center relative ">
              <a
                href="https://twitter.com/williamrey"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <FaTwitter className="w-7 h-7"/>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <GrInstagram className="w-7 h-7"/>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-7 h-7"/>
              </a>
            <div className="border-l border-black h-16 my-2"></div>
            </div>
            <span className="translate-y-12  rotate-[-90deg] text-black font-medium text-md ">
              @williamrey
            </span>
          </div>
          {/* content-2 */}
          <div className="w-[40%] mx-auto mt-12 space-y-10">
            <p className="text-xl ">
              Building the worlds best marketing websites for over a decade.{" "}
             
              Your trusted partner for strategy, design, and dev.
            </p>
            <button className="flex items-center border border-gray-400 rounded-full px-4 py-2 bg-white hover:bg-gray-100 transition-colors heading">
              <FiArrowRightCircle className="flex items-center justify-center w-8 h-8 rounded-full   mr-2" />

              <span className="font-semibold text-gray-800">
                Schedule a Call
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

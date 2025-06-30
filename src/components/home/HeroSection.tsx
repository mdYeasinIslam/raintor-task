import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { GrInstagram } from "react-icons/gr";
import Button from "../shared/Button";

export default function () {
  return (
    <section className=" h-full">
      <Image
        src="/herobg.png"
        alt="hero image"
        fill
        className=" absolute-0 w-full h-full z-0"
        priority
      />
      <div className=" container mx-auto relative pl-5 md:pl-0 z-10 mt-24 space-y-14">
        <h1 className="flex  flex-col gap-4 md:gap-7 lg:gap-10 xl:gap-4 text-2xl md:text-4xl lg:text-6xl xl:text-[78px] font-semibold lg:leading-20 xl:leading-[126px] heading md:pl-5 ">
          <span>
            Trusted{" "}
            <span className="bg-black m-0 p-0 text-white rounded-md px-2  ">
              Partner
            </span>{" "}
            for
          </span>
          <span>
            Your Website{" "}
            <span className="bg-black text-white rounded-md px-2  ">
              Develop.
            </span>
          </span>
        </h1>

        <div className="flex">
          {/* content-1 */}
          <div className="flex md:flex-row-reverse md:items-center pl-5 md:pl-0">
            <div className="flex flex-col items-center relative space-y-3">
              <a
                href="https://twitter.com/williamrey"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaTwitter className="w-7 h-7" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <GrInstagram className="w-7 h-7" />
              </a>
              <a
                href="https://www.facebook.com/mohammad.yeasin.895788/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-7 h-7" />
              </a>
              <div className="border-l border-black h-16 "></div>
            </div>
            <span className="translate-y-12  rotate-[-90deg] text-black font-medium text-md ">
              @williamrey
            </span>
          </div>
          {/* content-2 */}
          <div className="md:w-[60%] mx-auto flex flex-col justify-between ">
            <p className="text-xl ">
              Building the worlds best marketing websites for over a decade.{" "}
              Your trusted partner for strategy, design, and dev.
            </p>
            <Button title="Schedule a Call" icon="IoMdCall" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { ServiceType } from "@/types/serviceType";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function SeviceSignleCard({service}:{service:ServiceType}) {
  return (
    <div
      className={`rounded-3xl p-8 lg:py-10 lg:px-8 relative overflow-hidden space-y-5 ${
        service?.id == 2 ? "bg-[#C5FF41] rotate-4 hover:rotate-0 duration-500" : "bg-black"
      }`}
    >
      <div className=" flex justify-between items-center">
        <span
          className={` px-6 py-2 rounded-full text-sm font-medium ${
            service?.id == 2 ? "bg-black text-white" : "bg-[#C5FFEE] text-black"
          }`}
        >
          {service.title}
        </span>
        <div className="flex items-center justify-end">
          <button
            className={`${service.textColor} hover:opacity-80 transition-opacity duration-300 flex items-center gap-2 text-sm font-medium underline`}
          >
            <span>Read More</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="">
        <p className={`${service.textColor} text-lg leading-relaxed`}>
          {service.description}
        </p>
      </div>
    </div>
  );
}

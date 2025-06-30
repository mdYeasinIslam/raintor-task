import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export default function Button({
  title,
  icon,
}: {
  title: string;
  icon?: string;
}) {
  return (
    <div>
      <button className="flex items-center border border-gray-400 rounded-full py-2 bg-white hover:bg-gray-100 transition-colors heading">
        {icon == "FiArrowRightCircle" && (
          <FiArrowRightCircle className="flex items-center justify-center w-8 h-8 rounded-full " />
        )}
        

        <span className="font-semibold text-gray-800 px-4 ">{title}</span>
      </button>
    </div>
  );
}

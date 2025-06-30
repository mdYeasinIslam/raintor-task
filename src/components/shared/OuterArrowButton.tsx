import React from "react";
import { BiDownArrowCircle } from "react-icons/bi";

export default function OuterArrowButton({title}:{title:string}) {
  return (
    <div className="flex items-center ">
      <BiDownArrowCircle className="w-10 h-10" />
          <button className="border rounded-full px-3 py-2">{title}</button>
    </div>
  );
}

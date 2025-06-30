import { SkillType } from '@/types/skillsType';
import React from 'react'

type PropType = {
  skill: SkillType;
  getCardWidthClass: () => "w-full" | "w-1/2" | "w-1/3";
};

export default function SingleCard({ skill, getCardWidthClass }:PropType) {
  return (
    <div
      
      className={`${getCardWidthClass()} flex-shrink-0 px-2 md:px-3 py-2 md:py-4`}
    >
      <div
        className={`bg-[#141414] rounded-2xl p-4 md:p-6 lg:p-8 h-full transition-transform duration-300 hover:scale-105 ${
          skill.id % 2 === 0 ? "rotate-[10deg]" : ""
        }`}
      >
        <div className="mb-4 md:mb-6">{skill.icon}</div>
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-4">
          {skill.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {skill.description}
        </p>
      </div>
    </div>
  );
}

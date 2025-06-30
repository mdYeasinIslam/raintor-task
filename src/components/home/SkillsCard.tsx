"use client";

import type React from "react";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { skillsData } from "../../../public/db/skillsJsonData";

export default function SkillsCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;
  const maxIndex = skillsData.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  return (
    <section className=" px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-end mb-12">
          {/* buttons for navigation */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* skills slider */}
        <div className="relative overflow-hidden py-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {skillsData.map((skill) => (
              <div key={skill.id} className="w-1/3 flex-shrink-0 px-3 py-4">
                <div
                  className={`bg-gray-800 rounded-2xl p-8 h-full transition-transform duration-300 hover:scale-105 ${
                    skill.id % 2 === 0
                      ? "rotate-[7deg] hover:rotate-0 duration-500"
                      : "rotate-0 hover:rotate-[7deg] duration-500"
                  }`}
                >
                  <div className="mb-6">{skill.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dot icon for navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { skillsData } from "../../../public/db/skillsFakeData";
import SingleCard from "./SingleCard.";


export default function SkillsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const maxIndex = Math.max(0, skillsData.length - cardsPerView);
  const autoPlayInterval = 3000; 
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 768) {
        setCardsPerView(2); 
      } else {
        setCardsPerView(1); 
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerView]);

  // autoplay system
  useEffect(() => {
    if (isAutoPlaying && maxIndex > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); 
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);  
  };

    
  const handleAutoPlay = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); 
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };
  //make responsive card
  const getCardWidthClass = () => {
    if (cardsPerView === 1) return "w-full";
    if (cardsPerView === 2) return "w-1/2";
    return "w-1/3";
  };

  return (
    <section className=" px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-end ">
          {/* arrow icon for nevigate */}
          <div className="flex  gap-2 md:gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
              aria-label="Next slide"
            >
              <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* skills card are displayed here */}
        <div
          className="relative overflow-hidden py-4 md:py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {skillsData?.map((skill) => (
              <SingleCard
                key={skill.id}
                getCardWidthClass={getCardWidthClass}
                skill={skill}
              />
            ))}
          </div>
        </div>

        {/* dot icons  */}
        {maxIndex > 0 && (
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleAutoPlay(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* slider auto play */}
        <div className="flex justify-center mt-4">
          <div
            className={`text-xs md:text-sm text-gray-400 ${
              isAutoPlaying ? "opacity-100" : "opacity-50"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
}

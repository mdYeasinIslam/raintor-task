"use client";

import type React from "react";

import { useState } from "react";
import { FiPhone, FiSend, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import OuterArrowButton from "../shared/OuterArrowButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleContactMe = () => {
    window.location.href = "mailto:hello@example.com";
  };

  return (
    <section className="relative bg-white px-4 min-h-screen flex items-center ">
        <Image
          src="/about-bg.png"
          alt="hero image"
          fill
          className=" absolute w-full h-full z-0  rotate-180"
          priority
        />
      <div className="container mx-auto z-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
          {/* left-side */}
          <div className="space-y-8">
            {/* upper button */}
            <div className="flex items-center">
             <OuterArrowButton title="Contact"/>
            </div>

            {/*  header part */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Interested in{" "}
                <span className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block">
                  work
                </span>{" "}
                together?
              </h2>
            </div>

            {/* details */}
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other
            </p>

            
            <button className="flex items-center gap-3 px-8 py-4 border-2 border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300 font-medium">
              <FiPhone className="w-5 h-5" />
              Schedule a Call
            </button>
          </div>

          {/* right- Form */}
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 text-white">
            <form onSubmit={handleSubmit} className="space-y-6">
            
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  name="project"
                  placeholder="Describe your project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-600 pb-3 text-white placeholder-gray-400 focus:border-white focus:outline-none resize-none transition-colors duration-300"
                  required
                />
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
                >
                  <FiSend className="w-4 h-4" />
                  Send
                </button>
                <span className="text-gray-400">or</span>
                <button
                  type="button"
                  onClick={handleContactMe}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full hover:border-white transition-colors duration-300 font-medium"
                >
                  <FiMail className="w-4 h-4" />
                  Contact me
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-700">
              <span className="text-gray-400">@williamrey</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

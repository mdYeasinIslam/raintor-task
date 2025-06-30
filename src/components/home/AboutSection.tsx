import Image from "next/image";
import OuterArrowButton from "../shared/OuterArrowButton";
import { companies } from "../../../public/db/FakeData";



export default function AboutSection() {

  return (
    <section className="relative min-h-screen  px-4 flex items-center pt-10 ">
      <Image
        src="/about-bg.png"
        alt="hero image"
        fill
        className=" absolute w-full h-full z-0  top-0"
        priority
      />
      <div className="container mx-auto z-10 heading">
        {/* about button */}
        <div className="flex justify-end items-center gap-4 mb-16 ">
          <OuterArrowButton title="About Us" />
        </div>

        {/* all about content*/}
        <div className="text-center space-y-12 ">
          {/* heading */}
          <div className="space-y-4 text-4xl md:text-6xl lg:text-7xl xl:text-7xl">
            <h1 className=" font-bold text-gray-900 leading-tight">
              I&quot;ve been{" "}
              <span className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block">
                Developing
              </span>
            </h1>
            <h1 className=" font-bold text-gray-900 leading-tight">
              Websites since{" "}
              <span className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block">
                2013
              </span>
            </h1>
          </div>

          {/* details  */}
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other and recommend the best course
              of action.
            </p>
          </div>

          {/* comapy logo */}
          <div className="pt-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 ">
              
              <div className="lg:pt-8">
                <h3 className="text-gray-900 font-bold text-lg tracking-wider">
                  PREVIOUSLY
                  <br />
                  WORKED ON
                </h3>
              </div>

              <div className="flex-1 grid justify-end ">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl ">
                  {companies.map((company, index) => (
                    <div
                      key={index}
                      className={`${company.style} px-6 py-3 rounded-full text-center font-medium text-sm md:text-base hover:scale-105 transition-transform duration-300 shadow-sm`}
                      style={{
                        transform: `rotate(${Math.random() * 6 - 3}deg)`,
                      }}
                    >
                      {company.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

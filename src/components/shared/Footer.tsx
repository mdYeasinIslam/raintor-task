import React from 'react';

export default function Footer() {
  return (
    <footer className="  text-white  mt-8  flex flex-col justify-between p-5">
      <div className="container mx-auto rounded-[40px] bg-black px-8 md:px-16 py-12 md:py-20">
        <div className=" grid grid-cols-4 justify-between items-start">
          <div className=''>
            <span className="text-[#D4FF5A] font-extrabold text-3xl md:text-4xl tracking-tight leading-none">
              DEVLOP.ME
            </span>
          </div>

          <div className="col-span-2 flex-1 flex justify-start">
            <h1 className="text-[64px] md:text-[88px] font-bold text-center leading-none">
              As you <span className="text-white">can</span>
            </h1>
          </div>
          <div className="w-[120px] md:w-[180px]" />
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 justify-between">
          {/* Say hello & Call */}
          <div></div>
          <div>
            <div>
              <span className="font-semibold text-gray-400 text-lg">
                Say hello
              </span>
              <div className="mt-2 flex flex-col gap-1 text-base font-normal">
                <span>HELLO@DEVLOP.ME.COM</span>
                <span>MAHBUBUL@ME.COM</span>
              </div>
            </div>
            <div className="mt-8">
              <span className="font-semibold text-gray-400 text-lg">Call</span>
              <div className="mt-2 flex flex-col gap-1 text-base font-normal">
                <span>+784549 4981 00</span>
                <span>+8845 0100 211</span>
              </div>
            </div>
          </div>
          {/* Menu */}
          <div>
            <span className="font-semibold text-gray-400 text-lg">Menu</span>
            <div className="mt-2 flex flex-col gap-1 text-base font-normal">
              <span>HOME</span>
              <span>ABOUT</span>
              <span>PORTFOLIO</span>
              <span>BLOG</span>
            </div>
          </div>
          {/* Social */}
          <div>
            <span className="font-semibold text-gray-400 text-lg">Social</span>
            <div className="mt-2 flex flex-col gap-1 text-base font-normal">
              <span>TWITTER</span>
              <span>INSTAGRAM</span>
              <span>FACEBOOK</span>
              <span>BEHANCE</span>
              <span>DRIBBBLE</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-end mt-auto pt-16">
          {/* Left */}
          <span className="text-xl font-extrabold tracking-tight">BESNIK</span>
          {/* Center */}
          <span className="text-gray-400 text-base">&copy; devlop.me 2022</span>
          {/* Right */}
          <span className="text-gray-400 text-base">PRIVACY - TERMS</span>
        </div>
      </div>
    </footer>
  );
}

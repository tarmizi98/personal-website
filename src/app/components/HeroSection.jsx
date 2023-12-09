/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I'm{" "}
            </span>
            <br />
            {/* <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Muhammad Tarmizi",
                1000, // Pause for 5 second
                "Full Stack Web Developer",
                1000,  // Pause for 5 second
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            /> */}
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit delectus suscipit 
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 text-white hover:bg-slate-200">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to bg-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download My CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <Image
            src="/images/profile2.png"
            alt="profile image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

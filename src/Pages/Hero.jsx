import React from "react";
import HeroImg from "../assets/RobertGarciaHero.png";
import linkedin from "../assets/linkedinicon.svg";
import github from "../assets/githubicon.svg";
import doticon from "../assets/dot-icon.png";
import arrowicon from "../assets/Arrow-icon.svg";

const Hero = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 items-center mx-4 lg:mx-20 mt-10 lg:mt-20">
        <div className="mb-0 lg:mb-6">
          <h1 className="bebas-neue lg:text-8xl text-5xl">
            Hi, I AM <br /> ROBERT GARCIA.
          </h1>
          <p className=" font-[400] text-lg manrope lg:leading-[1.6] leading-[1.4] mt-4 lg:mt-1">
            A Sydney based front-end developer passionate about building
            accessible and user friendly websites.
          </p>

          {/* Contact-buttons */}
          <div className="flex gap-4 mt-6 lg:mt-6">
            {/* Button */}
            <div className="">
              <div className="bg-[#D3E97A] rounded-full h-12 w-40 gap-3 flex justify-center items-center">
                <button className="manrope text-black text-[14px] lg:text-[16px] font-[600]">
                  CONTACT ME
                </button>
                <img
                  src={doticon}
                  alt="dot-icon"
                  className="h-5 w-5 hidden lg:block"
                />
                <div className="lg:hidden bg-black w-8 h-8 rounded-full flex justify-center items-center">
                  <img src={arrowicon} alt="Arrow-icon" className="" />
                </div>
              </div>
            </div>

            {/* linked-icon */}
            <div className="bg-[#222222] w-12 h-12 rounded-full flex justify-center items-center">
              <img src={linkedin} alt="linkedin-icon" className="" />
            </div>

            {/* github-icon */}
            <div className="bg-[#222222] w-12 h-12 rounded-full flex justify-center items-center">
              <a
                href="https://github.com/Wayles-D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="github-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* image div */}
        <div className="grid justify-center">
          <img src={HeroImg} alt="" className="h mt-10 lg:mt-0" />
        </div>
      </section>
      <hr className="mt-10 border-[#C7C7C7]" />
    </>
  );
};

export default Hero;

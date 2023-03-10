import React from "react";
import Image from "next/image";
import steps from "../public/image/Bestdevelopers/steps.webp";
import profile_check from "../public/image/Bestdevelopers/profile_check.webp";
import exclusive from "../public/image/Bestdevelopers/exclusive.webp";
import income from "../public/image/Bestdevelopers/income.webp";
function Bestdevelopers() {
  return (
    <>
      <div className="w-[90%] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-auto pb-10">
        <div className="w-[557.8px] h-[449px] mt-20 lg:ml-[5%] md:flex md:justify-center md:ml-[20%]">
          <Image
            src={steps}
            alt="steps"
            height={0}
            width={0}
            className="lg:w-[100%] lg:h-[100%] md:w-[80%] md:h-[80%] sm:w-[60%] sm:h-[60%]"
          />
        </div>
        <div className="lg:w-[90%] lg:mt-12 md:w-[100%] sm:w-[105.8%] lg:ml-[5%]">
          <div className="lg:w-[557.8px] md:w-[95%] md:mt-[10px] sm:mt-[-30%]">
            <h2 className="lg:text-[36px] md:w-[100%] md:text-[34px] sm:text-[25px] font-serif">
              Why are the best developers joining Turing?{" "}
              <span className="font-serif lg:font-[36px] lg:text-[#2e6edf] md:w-[100%] md:font-[36px] md:text-[#2e6edf] sm:font-[36px] sm:text-[#2e6edf]">
                Because they want careers, not gigs.
              </span>
            </h2>
          </div>
          <div className="lg:flex lg:mt-[30px] md:flex md:mt-[30px] sm:flex sm:mt-[30px]">
            <Image
              src={profile_check}
              alt="profile_check"
              height={0}
              width={0}
              className="lg:w-[48px] lg:h-[48px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px]"
            />
            <div className="font-serif lg:text-[20px] lg:ml-5 lg:mt-2 md:text-[20px] md:ml-5 md:mt-2 sm:text-[18px] sm:ml-5  sm:py-2 lg:w-[100%] md:w-[100%] sm:w-[100%]">
              Vetted once, eligible for life
            </div>
          </div>
          <div className="lg:flex lg:mt-[30px] lg:w-[100%] md:flex md:mt-[30px] sm:flex sm:mt-[30px]">
            <Image
              src={exclusive}
              alt="exclusive"
              height={0}
              width={0}
              className="lg:w-[48px] lg:h-[48px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px]"
            />
            <div className="font-serif lg:text-[20px] lg:ml-5 lg:mt-2 md:text-[20px] md:ml-5 md:mt-2 sm:text-[16px] sm:ml-5 sm:mt-  sm:w-[150%] md:w-[100%] lg:w-[100%">
              Exclusive Turing developer success support
            </div>
          </div>
          <div className="lg:flex lg:mt-[30px]  md:flex md:mt-[30px] sm:flex sm:mt-[30px] sm:w-[100%] md:w-[100%] lg:w-[100%]">
            <Image
              src={income}
              alt="income"
              height={0}
              width={0}
              className="lg:w-[48px] lg:h-[48px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px]"
            />
            <div className="font-serif lg:text-[20px] lg:ml-5 lg:mt-2 md:text-[20px] md:ml-5 md:mt-2 sm:text-[16px] sm:ml-5  sm:-w[200%]">
              Income stability thanks to 99% rematch rate
            </div>
          </div>
          <button className="font-serif w-[30%] h-[50px] bg-[#2e6edf] rounded-lg text-[#ffffff] mt-14 lg:w-[30%] md:w-[30%]  sm:w-[60%]">
            Apply for Jobs
          </button>
        </div>
      </div>
    </>
  );
}

export default Bestdevelopers;

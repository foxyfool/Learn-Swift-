import React from "react";
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instrcutor.jpeg";
import HighlightText from "./HighlightText";

const InstructorSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-[50%]">
          <img src={Instructor} alt="" />
        </div>
        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h1 className="lg:w-[50%] text-3xl font-semibold">
            Become the next greatest instructor like
            <HighlightText text={"Maximilian Schwarzmüller"} />
          </h1>

          <p className="font-medium text-[15px] text-justify w-[90%] text-white-300">
            Instructors from around the world teach millions of students on
            LearnSwift. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;

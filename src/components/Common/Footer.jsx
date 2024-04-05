import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

const BottomFooter = [
  "Copyright © 2024 LearnSwift Technologies Pvt Ltd. All Rights Reserved.",
];
const QuickLinks = ["Articles", "Home", "Courses"];
const Legal = [
  "Privacy Policy",
  "Terms & Conditions",
  "Refund & Cancellation Policy",
];

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <div className="flex lg:flex-row gap-12 items-center justify-between max-w-maxContent text-white leading-5 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-2">
          {/* Section 1 */}

          <div className="w-[25px] flex flex-col items-center p-10 justify-center gap-3 lg:w-[25%] lg:pl-0">
            <p className="text-white text-2xl">LearnSwift</p>
            <div></div>
          </div>

          <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
            <h1 className="text-richblack-50 font-semibold text-[16px]">
              Quick Links
            </h1>

            <div className="flex flex-col gap-2 mt-2">
              {QuickLinks.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to="/">
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
            <h1 className="text-richblack-50 font-semibold text-[16px]">
              Legal
            </h1>

            <div className="flex flex-col gap-2 mt-2 underline">
              {Legal.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-2">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-3 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 ">
            Learn Swift
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

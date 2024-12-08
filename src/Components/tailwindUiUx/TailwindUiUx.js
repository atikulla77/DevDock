import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import logo from "../../Image/logo/logoImg2.png";
import beamshome from "../../Image/beams-home@95.jpg";
import { Link } from "react-router-dom";

const tailwindUiUx = (props) => {
  // useEffect(() => {
    props.setnavBarRightSideIcon(false)
  // })
  
  return (
    <div className="w-[100%] h-[100vh] flex bg-white relative">
      <div className="w-full h-full absolute top-0 left-0 z-[0]">
        <img src={beamshome} className="w-full h-full object-cover object-center" />
      </div>
      <div
        onClick={() => {
          props.setshowLeftNav(false);
        }}
        className={`w-[100%] h-[100%] ${
          props.showLeftNav ? "[@media(min-width:650px)]:pl-[160px] pl-0" : ""
        } justify-center flex items-center cursor-default pt-[105px] relative z-10`}
      >
        <div className="container h-[100%] justify-center text-center flex items-center">
          <div className="text-center mx-auto my-auto">

            <h1
              className="lg:text-[50px] text-[36px] font-[700] Poppins"
              id="title1"
            >
              DEVDOCK
            </h1>
            <p
              className={`text-[16px] lg:text-[18px] font-[400] w-[21rem] lg:w-[35rem] Poppins text-[black]`}
            >
              Welcome To DevDock. You Can Use This Components Based Website for your Work. it's Easier to use
            </p>
            <span className="inline-flex mt-6 justify-center">
              <Link
                to={""}
                className="border-r-[1px] text-[20px] pr-3 border-[#b1b1b1]"
              >
                <svg
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="23px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 leading-4 text-center text-[#03bfff] transition-all break-words cursor-pointer fill-transparent`}
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                    className="text-center cursor-pointer"
                  ></path>
                </svg>
              </Link>
              <Link
                to={""}
                className="ml-3 pr-3 border-r-[1px] border-[#b1b1b1]"
              >
                <svg
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="23px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 leading-4 text-center text-[#03bfff] transition-all break-words cursor-pointer fill-transparent`}
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                    className="text-center cursor-pointer"
                  ></path>
                </svg>
              </Link>
              <Link
                to={""}
                className="ml-3 pr-3 border-r-[1px] border-[#b1b1b1]"
              >
                <svg
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="23px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 leading-4 text-center text-[#03bfff] transition-all break-words cursor-pointer fill-transparent`}
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    className="text-center cursor-pointer text-neutral-700"
                  ></rect>
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    className="text-center cursor-pointer"
                  ></path>
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    className="text-center cursor-pointer"
                  ></line>
                </svg>
              </Link>
              <Link to={""} className="ml-3">
                <svg
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="23px"
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 leading-4 text-center text-[#03bfff] transition-all break-words cursor-pointer fill-transparent`}
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    className="text-center cursor-pointer"
                  ></path>
                  <rect
                    x="2"
                    y="9"
                    width="4"
                    height="12"
                    className="text-center cursor-pointer"
                  ></rect>
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    className="text-center cursor-pointer"
                  ></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <a
        href="https://github.com/atikulla77/DevDock"
        target={"_blank"}
        className="fixed right-[1rem] bottom-[1rem] bg-[#4a5568] h-[35px] py-[12px] font-[600] flex text-[13px] justify-center items-center rounded-[50px] text-[#fff] px-[15px] select-none z-[9999]"
      >
        <FaGithub className="text-[21px] mr-[6px]" />
        <span>GitHub</span>
      </a>
    </div>
  );
};

export default tailwindUiUx;

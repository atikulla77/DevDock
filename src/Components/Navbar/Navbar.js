import { Link } from "react-router-dom";
import logo from "../../Image/logo/logoImg3.png";

import { FaArrowLeft } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

import { FaCode } from "react-icons/fa6";
import { TbEye } from "react-icons/tb";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import { useState } from "react";

const Navbar = (props) => {
  const [showCopyCodeSuccess, setShowCopyCodeSuccess] = useState(false);

  return (
    <header
      className={`${props.showLeftNav?"[@media(min-width:650px)]:pl-[160px] pl-0":"pl-[0px]"} w-full fixed bg-[#03bfff] h-[65px] items-center justify-center flex shadow-[0px_0px_3px_0px_grey] z-[999]`}
    >
      {/* body Content */}
      <div className="w-full mx-[1rem]">
        <nav className="flex justify-between">
          <div className="flex items-center">
            <FaArrowLeft
            onClick={() => props.setshowLeftNav(false)}
              className={`${props.showLeftNav?"flex":"hidden"} text-[17px] text-[#fff] cursor-pointer mr-[12px]`}
            />
            <HiOutlineMenu
            onClick={() => props.setshowLeftNav(true)}
              className={`${props.showLeftNav?"hidden":"flex"} text-[21px] text-[#fff] cursor-pointer mr-[8px]`}
            />
            <Link to={"/"} className="flex items-center cursor-pointer">
              <img className="w-[7rem] select-none" src={logo} alt="" />
            </Link>
          </div>
          <ul className="flex">
            {/* Copy Code */}
            <CopyToClipboard text={props.copyCode}>
              <div className="relative">
                <button
                  onClick={() => {
                    setShowCopyCodeSuccess(true);
                    setTimeout(() => {
                      setShowCopyCodeSuccess(false);
                    }, 2000);
                  }}
                  className={`${
                    props.viewCode ? "flex" : "hidden"
                  } border-[2px] md:!w-[200px] [@media(min-width:510px)]:!w-[170px] [@media(min-width:380px)]:w-[100px] w-[34px] [@media(min-width:510px)]:h-[35px] h-[34px] font-[600] text-[12px] justify-center items-center rounded-[50px] ${showCopyCodeSuccess ? "text-[#1cff1c] border-[#1cff24]" : "bg-[#03bfff] border-[#fff]"} text-[#fff] [@media(min-width:510px)]:mr-[1rem] mr-[0.7rem] z-[2] relative select-none`}
                  id="CopyToClipboard"
                >
                  <IoCopyOutline className={`${showCopyCodeSuccess ? "hidden" : ""} text-[15px] [@media(min-width:380px)]:mr-[6px] mr-0`} />
                  <IoMdCheckmarkCircleOutline className={`${showCopyCodeSuccess ? "" : "hidden"} text-[16px] [@media(min-width:380px)]:mr-[6px] mr-0`} />
                  <span className="[@media(min-width:510px)]:flex hidden">COPY TO CLIPBOARD</span>
                  <span className="[@media(min-width:510px)]:hidden flex"><span className="[@media(min-width:380px)]:flex hidden">COPY</span></span>
                </button>
              </div>
            </CopyToClipboard>
            
            {/* Code Preview */}
            <p
              onClick={() => props.setViewCode(false)}
              className={`${
                props.viewCode ? "flex" : "hidden"
              } bg-transparent [@media(min-width:510px)]:!w-[135px] [@media(min-width:380px)]:w-[90px] w-[34px] [@media(min-width:510px)]:h-[35px] h-[34px] font-[600] [@media(min-width:380px)]:text-[12px] text-[11px] justify-center items-center rounded-[50px] text-[#fff] border-[2px] border-[#fff] cursor-pointer uppercase select-none`}
            >
              <TbEye className="[@media(min-width:510px)]:text-[19px] text-[18px] [@media(min-width:380px)]:mr-[6px] mr-0" />
                  <span className="[@media(min-width:510px)]:flex hidden">Preview</span>
                  <span className="[@media(min-width:510px)]:hidden [@media(min-width:380px)]:flex hidden">view</span>
            </p>

            {/* View Code */}
            <p
              onClick={() => props.setViewCode(true)}
              className={`${
                props.viewCode ? "hidden" : "flex"
              } bg-transparent [@media(min-width:380px)]:w-[140px] w-[34px] [@media(min-width:510px)]:h-[35px] h-[34px] font-[600] text-[12px] justify-center items-center rounded-[50px] text-[#fff] border-[2px] border-[#fff] cursor-pointer uppercase select-none`}
            >
              <FaCode className="[@media(min-width:510px)]:text-[20px] text-[18px] [@media(min-width:380px)]:mr-[6px] mr-0"  />
              <span className="[@media(min-width:380px)]:flex hidden">View Code</span>
            </p>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import LeftSite from "../tailwindUiUx/LeftSite/LeftSite";
import { Outlet } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const tailwindUiUx = (props) => {
  return (
    <div className="w-[100%] h-[100vh] flex bg-white relative">
      
      <LeftSite
        TailwindUiUXData={props.TailwindUiUXData}
        setViewCode={props.setViewCode}
        showLeftNav={props.showLeftNav}
      />
      <Outlet />

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

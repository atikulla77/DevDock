import React from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSite = (props) => {
  const TailwindUiUXDataMAP = [props.TailwindUiUXData];

  return (
    <div
      className={`${props.showLeftNav?"LeftSideNavToRight":"LeftSideNavToLeft"} w-[160px] scrollbar-hide bg-[#f1fcff] h-[100%] pb-[20px] top-[0] left-0 flex-col justify-center fixed overflow-auto px-[20px] [@media(min-width:650px)]:pt-[20px] pt-[90px] [@media(min-width:650px)]:z-[1000] z-[997] text-black shadow-[0px_0px_3px_0px_grey]`}
    >
      {TailwindUiUXDataMAP.map((mainKey) => {
        return (
          <div key={1}>
            {mainKey.map((key) => {
              return (
                <div key={key.id} id={key.tittle}>
                  <p className="text-[15px] font-[600] pb-[12px] select-none">{key.tittle}</p>
                  {key.catagoryData.map((key2) => {
                    return (
                      <div key={key2.id} className="mb-[35px] ">
                        <NavLink
                          to={`/${key2.link}`}
                          onClick={() => {props.setViewCode(false)}}
                          className={({ isActive }) =>
                            isActive
                              ? "flex border-[2px] border-[#03c0ff7a] shadow-[0px_0px_3px_0px_#00beffed] overflow-hidden rounded-[6px] cursor-pointer relative LeftSideNavCard"
                              : "flex border-[2px] border-[#6365f100] shadow-[0px_0px_3px_0px_#0000004f] overflow-hidden rounded-[6px] cursor-pointer relative"
                          }
                        >
                          <img src={key2.image} className="select-none" alt="" />
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default LeftSite;

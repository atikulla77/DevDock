import React, { useEffect } from "react";

const MainContentSection = (props) => {
  // Set CopyButton Value
  useEffect(() => {
    props.setCopyCode(props.InnerValueCode)
  })


  return (
    <div onClick={() => {props.setshowLeftNav(false)}} className={`w-[100%] h-[100vh] min-h-[100vh] overflow-y-auto bg-white ${props.viewCode ? "" : `pt-[105px]`} ${props.showLeftNav ? "[@media(min-width:650px)]:pl-[160px] pl-0" : ""}`}>
      <div className={`${props.viewCode ? "hidden" : "w-full h-full"}`} dangerouslySetInnerHTML={{ __html: props.InnerValueCode }}></div>

      {/* {document} */}
      <div className={`${props.viewCode ? "flex" : "hidden"} w-full pt-[105px] max-w-full h-full overflow-x-auto bg-white`}>
        <pre className="bg-white [@media(min-width:510px)]:text-black text-[#000000d2] mt-[-2rem] [@media(min-width:510px)]:ml-[-1.3rem] ml-[-2rem] pr-[2rem] [@media(min-width:510px)]:text-[16px] text-[15px] [@media(min-width:510px)]:font-[500] font-[600]">
          <code>{props.InnerValueCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default MainContentSection;
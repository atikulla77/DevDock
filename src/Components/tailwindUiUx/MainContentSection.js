import React, { useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const MainContentSection = (props) => {
  // Set CopyButton Value
  useEffect(() => {
    props.setCopyCode(props.InnerValueCode)
  })


  return (
    <div onClick={() => {props.setshowLeftNav(false)}} className={`w-[100%] h-[100vh] min-h-[100vh] Poppins overflow-y-auto ${props.viewCode ? "bg-[#F8F8FF]" : `pt-[105px] bg-[#fff]`} ${props.showLeftNav ? "[@media(min-width:650px)]:pl-[160px] pl-0" : ""}`}>
      <div className={`${props.viewCode ? "hidden" : "w-full h-full"}`} dangerouslySetInnerHTML={{ __html: props.InnerValueCode }}></div>

      {/* {document} */}
      {/* <div className={`${props.viewCode ? "flex" : "hidden"} w-full pt-[105px] max-w-full h-full overflow-x-auto bg-white`}>
        <pre className="bg-white [@media(min-width:510px)]:text-black text-[#000000d2] mt-[-2rem] [@media(min-width:510px)]:ml-[-1.3rem] ml-[-2rem] pr-[2rem] [@media(min-width:510px)]:text-[16px] text-[15px] [@media(min-width:510px)]:font-[500] font-[600]">
          <code>{`
    <> 
    ${props.InnerValueCode}
    </>
          `}</code>
        </pre>
      </div> */}
      <div className={`${props.viewCode ? "flex" : "hidden"} w-full pt-[105px] max-w-full h-full overflow-x-auto bg-[#F8F8FF]`}>
        <SyntaxHighlighter language="javascript" style={docco} className="[@media(min-width:510px)]:text-black text-[#000000d2] mt-[-2rem] [@media(min-width:510px)]:ml-[-1.3rem] ml-[-2rem] pr-[2rem] [@media(min-width:510px)]:text-[16px] text-[15px] [@media(min-width:510px)]:font-[500] font-[600]">{`
    <>
    ${props.InnerValueCode}
    </>
          `}</SyntaxHighlighter>
      </div>
    </div>
  );
};

export default MainContentSection;
import React, { useState } from "react";
import logo from "../../../../../../Image/logo/logo2.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Content5 = () => {
  const [copied, setCopied] = useState(false);

  const innerValue = `
  <section className="text-gray-600 h-[100%] bg-white body-font">
  <div className="container px-5 py-24 mx-auto bg-white flex bg-white flex-wrap">
    <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
      Kickstarter Actually Pinterest Brunch Bitters Occupy
    </h2>
    <div className="md:w-3/5 md:pl-6">
      <p className="leading-relaxed text-base">
        Taxidermy bushwick celiac master cleanse microdosing seitan.
        Fashion axe four dollar toast truffaut, direct trade kombucha
        brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
        drinking vinegar tacos.
      </p>
      <div className="flex md:mt-4 mt-6">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
          Button
        </button>
        <a className="text-indigo-500 inline-flex items-center ml-4">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
  `;

  return (
    <div className="w-[100%] h-full bg-white pt-[70px]  pl-[160px]">
      <section className="text-gray-600 h-[100%] bg-white body-font">
        <div className="container px-5 py-24 mx-auto bg-white flex bg-white flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Kickstarter Actually Pinterest Brunch Bitters Occupy
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="flex md:mt-4 mt-6">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <a className="text-indigo-500 inline-flex items-center ml-4">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CopyToClipboard text={innerValue} onCopy={() => setCopied(true)}>
        <button
          className="fixed flex bg-[#6366F1] h-[32px] py-[12px] bottom-[10px] right-[10px] font-[600]  text-[13px] justify-center items-center rounded-[15px] text-[#fff] px-[12px]"
          id="CopyToClipboard"
        >
          <svg
            className="w-[13px] mr-[6px]"
            viewBox="0 0 25 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.914 1h-18v19"></path>
            <path d="M6 5v18h18V5z"></path>
          </svg>
          <span>COPY TO CLIPBOARD</span>
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default Content5;

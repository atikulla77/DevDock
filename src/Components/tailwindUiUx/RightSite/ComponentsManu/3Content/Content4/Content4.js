import React, { useState } from "react";
import logo from "../../../../../../Image/logo/logo2.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Content4 = () => {
  const [copied, setCopied] = useState(false);

  const innerValue = `
  <section className="text-gray-600 h-[100%] bg-white body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-4">
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
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="flex flex-wrap list-none -mb-1">
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </section>
  `;

  return (
    <div className="w-[100%] h-full bg-white pt-[70px]  pl-[160px]">
      <section className="text-gray-600 h-[100%] bg-white body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents. Actually taiyaki neutra, distillery gastropub pok pok
              ugh.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-4">
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
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="flex flex-wrap list-none -mb-1">
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Fifth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Sixth Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Seventh Link</a>
              </li>
              <li className="lg:w-1/3 mb-1 w-1/2">
                <a className="text-gray-600 hover:text-gray-800">Eighth Link</a>
              </li>
            </nav>
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

export default Content4;

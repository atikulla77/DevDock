import React, { useState } from "react";
import logo from "../../../../../../Image/logo/logo2.png";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Pricing2 = () => {
  const [copied, setCopied] = useState(false);

  const innerValue = `
  <section className="text-gray-600 h-[100%] bg-white body-font">
        <div className="container px-5 py-24 mx-auto bg-white">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Plan
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Speed
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Storage
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">Start</td>
                  <td className="px-4 py-3">5 Mb/s</td>
                  <td className="px-4 py-3">15 GB</td>
                  <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                  <td className="w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $24
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $50
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Exclusive
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    48 Mb/s
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    120 GB
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
        </div>
      </section>
  `;

  return (
    <div className="w-[100%] h-full bg-white pt-[70px]  pl-[160px]">
      <section className="text-gray-600 h-[100%] bg-white body-font">
        <div className="container px-5 py-24 mx-auto bg-white">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Banh mi cornhole echo park skateboard authentic crucifix neutra
              tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
              twee
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Plan
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Speed
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Storage
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">Start</td>
                  <td className="px-4 py-3">5 Mb/s</td>
                  <td className="px-4 py-3">15 GB</td>
                  <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                  <td className="w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $24
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $50
                  </td>
                  <td className="border-t-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
                <tr>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    Exclusive
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    48 Mb/s
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    120 GB
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                    <input name="plan" type="radio" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
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

export default Pricing2;

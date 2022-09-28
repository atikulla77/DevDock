import { Link } from "react-router-dom";
import logo from "../../Image/logo/logo2.png";

const Navbar = () => {
  return (
    <header className="w-full fixed bg-[#EDF2F7] h-[65px] items-center justify-center flex pl-[160px]" style={{ boxShadow: 'grey 0px 0px 3px 0px' }}>
      <div className="container mx-3">
        <nav className="flex justify-between">
          <Link to={'/'} className="flex items-center cursor-pointer">
            <img className="w-[2rem]" src={logo} alt="" />
            <h1 className="text-[15px] text-black font-[600] pl-[8px]">
              CodeWithThunder
            </h1>
          </Link>
          <ul className="flex">
            <a
              href="https://github.com/codeWithThunder"
              target={"_blank"}
              className="bg-[#4a5568] h-[32px] py-[12px] font-[600] flex text-[13px] justify-center items-center rounded-[15px] text-[#fff] px-[12px]"
            >
              <svg
                className="w-[24px] mr-[6px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
                ></path>
              </svg>
              <span>GitHub</span>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
import React from 'react';
import LeftSite from "../tailwindUiUx/LeftSite/LeftSite";
import { Outlet } from 'react-router-dom';

const tailwindUiUx = () => {
  return (
    <div className='w-[100%] h-[100vh] flex bg-white'>
      
      <LeftSite></LeftSite>

      <Outlet></Outlet>
      
    </div>
  );
};

export default tailwindUiUx;
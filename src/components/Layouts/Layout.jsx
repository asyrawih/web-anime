/** @format */

import React from "react";
import Mobile from "../Mobile/Mobile";
import Navbar from "../Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="pr-2 pl-3  md:pr-10 md:pl-32 mb-28 md:mb-2 ">
        {children}
      </div>
      <Mobile />
    </>
  );
};

export default Layout;

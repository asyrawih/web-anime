/** @format */

import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="flex pl-32 pr-10">
        {children}
      </div>
    </>
  );
};

export default Layout;

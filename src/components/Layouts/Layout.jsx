/** @format */

import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="pr-2 pl-3 md:pr-10 md:pl-32">
        {children}
      </div>
    </>
  );
};

export default Layout;

/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar hidden md:flex flex-col w-20 h-screen shadow-2xl fixed z-50">
        <div className="bg-gray-200 p-3 text-center">Logo</div>
        <div className="flex flex-col h-screen justify-center space-y-5">
          <div
            onClick={() => setShow(!show)}
            className="px-3 py-3 bg-accent shadow-lg text-white font-mono rounded-md mx-1 h-12 cursor-pointer select-none"
          >
            Search
          </div>
          <div className="px-5 py-3 bg-accent shadow-lg text-white font-mono rounded-md mx-1 h-12 cursor-pointer">
            Item
          </div>
          <div className="px-5 py-3 bg-accent shadow-lg text-white font-mono rounded-md mx-1 h-12">
            Item
          </div>
          <div className="px-5 py-3 bg-accent shadow-lg text-white font-mono rounded-md mx-1 h-12">
            Item
          </div>
        </div>
        <div className="footer h-12 bg-accent shadow-lg text-white font-mono mx-1 px-3 rounded-md py-3">
          Footer
        </div>
        {show && <SideNavbar />}
      </div>
    </>
  );
};

export const SideNavbar = () => {
  return (
    <motion.div className="h-screen fixed bg-accent w-2/12 shadow-2xl ring-3" animate={{ x: 80 }}>
      <div className="sidenavbar text-white">side navbar</div>
    </motion.div>
  );
};

export default Navbar;

/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoFlame } from "react-icons/go";
import NextLink from "next/link";
import {
  HiOutlineChevronLeft,
  HiSearch,
  HiTag,
  HiOutlineCalendar,
} from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar hidden md:flex flex-col w-20 h-screen shadow-2xl fixed ">
        <div className="p-3 text-center bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md">
          <NextLink href="/">
            <a>
              <GoFlame className="text-5xl text-secondary" />
            </a>
          </NextLink>
        </div>
        <div className="flex flex-col h-screen justify-center space-y-5">
          <div
            onClick={() => setShow(!show)}
            className="px-4 py-3 text-white font-mono rounded-md mx-1 h-12 cursor-pointer select-none"
          >
            <HiSearch className="text-3xl hover:text-secondary" />
          </div>
          <div className="px-4 py-3 text-white font-mono rounded-md mx-1 h-12 cursor-pointer select-none">
            <NextLink href="/tags">
              <a>
                <HiTag className="text-3xl hover:text-secondary" />
              </a>
            </NextLink>
          </div>
          <div className="px-4 py-3 text-white font-mono rounded-md mx-1 h-12 cursor-pointer select-none">
            <NextLink href="/jadwal">
              <a>
                <HiOutlineCalendar className="text-3xl hover:text-secondary" />
              </a>
            </NextLink>
          </div>
        </div>
        <div className="footer h-12 text-white font-mono mx-1">
          <span className=" bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-3">
            Hanan
          </span>
        </div>
        {show && <SideNavbar />}
      </div>
    </>
  );
};

export const SideNavbar = () => {
  return (
    <motion.div
      className="h-screen fixed bg-accent w-2/12 shadow-2xl p-3"
      animate={{ x: 80 }}
    >
      <div className="sidenavbar text-white">
        <HiOutlineChevronLeft className="text-3xl" />
      </div>
    </motion.div>
  );
};

export default Navbar;

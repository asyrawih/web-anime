/** @format */

import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoFlame } from "react-icons/go";
import { HiHome, HiOutlineCalendar, HiSearch, HiTag } from "react-icons/hi";
import Link from "next/link";
const Mobile = () => {
  return (
    <>
      <div className="navbar flex justify-around w-full h-20 shadow-2xl bottom-0 fixed md:hidden py-2 px-2">
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <Link href="/">
            <a>
              <HiHome className="text-secondary text-4xl pb-2" />
            </a>
          </Link>
        </div>
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <Link href="/jadwal">
            <a>
              <HiOutlineCalendar className="text-secondary text-4xl pb-2" />
            </a>
          </Link>
        </div>
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <HiSearch className="text-secondary text-4xl pb-2" />
        </div>
        <div className="text-center flex justify-center  bg-gradient-to-tr from-gray-400 via-red-600 to-yellow-500 rounded-md p-5">
          <Link href="/tags">
            <a>
              <HiTag className="text-secondary text-4xl pb-2" />
            </a>
          </Link>
        </div>
      </div>
      {/* <SlideUp show={show} setShow={setShow} /> */}
    </>
  );
};

export const SlideUp = ({ show, setShow }) => {
  const variants = {
    open: { opacity: 1, y: -100 },
    closed: { opacity: 0, y: 1000 },
  };
  return (
    <motion.div
      animate={show ? "open" : "closed"}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={`fixed bg-white w-auto h-80 bottom-20 md:hidden px-4 mx-4 rounded-lg   justify-center`}
    >
      <div className="flex w-auto bg-indigo-700 mt-3 justify-center text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos odio
      </div>
      <div className="flex justify-center bg-indigo-900 p-3">
        <button onClick={() => setShow(!show)}>Close</button>
      </div>
    </motion.div>
  );
};

export default Mobile;

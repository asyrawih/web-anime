/** @format */

import React, { useState } from "react";
import Layout from "../components/Layouts/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import { GoPlay } from "react-icons/go";
const Home = () => {
  const panjang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Layout>
      <Head>
        <title>Nonton Anime</title>
      </Head>
      <main>
        <header className="flex justify-between md:px-24 md:py-10">
          <span className=" p-3 text-2xl text-gray-200">
            Nonton Stream Anime
          </span>
          <span className="p-4 text-white">Home</span>
        </header>
        <div className="flex flex-col md:flex-row justify-center md:space-x-2 mb-2">
          <div className="left_content   md:flex md:w-1/6 rounded-lg mb-2 ">
            <div className="ongoing min-h-0 w-full bg-accent rounded border-t-8 border-opacity-10  border-white p-3 space-y-1">
              <span className="font-mono font-bold text-secondary text-xl border-b-4 border-gray-600">
                Ongoing
              </span>
              <p className={"text-white"}>
                ducimus! Aut, eaque nostrum quibusdam quaerat optio hic repellat
                rerum est corporis ullam! Sapiente vero eligendi dolorem eaque
                nulla hic dolorum!
              </p>
            </div>
          </div>
          <div className="main_content  w-full bg-accent md:w-1/2 rounded-lg p-4 mb-2 border-t-8 border-opacity-10 border-gray-100">
            <span className="font-mono font-bold text-secondary text-xl border-b-4 border-gray-600">
              Latest Anime
            </span>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 lg:grid-cols-4  md:grid-rows-3 gap-3 mt-2">
              {panjang.map((_, index) => (
                <Card key={index} />
              ))}
            </div>
          </div>
          <div className="right_content w-full md:w-1/6 space-y-4">
            <div className="genre min-h-0 w-full bg-accent rounded border-t-8 border-opacity-10  border-white p-3">
              <span className="font-mono font-bold text-secondary text-xl border-b-4 border-gray-600">
                Genre
              </span>
              <p>
                ducimus! Aut, eaque nostrum quibusdam quaerat optio hic repellat
                rerum est corporis ullam! Sapiente vero eligendi dolorem eaque
                nulla hic dolorum!
              </p>
            </div>
            <div className="genre min-h-0  w-full bg-accent rounded  border-t-8 border-opacity-10 border-white p-3">
              <span className="font-mono font-bold text-secondary text-xl border-b-4 border-gray-600">
                Years
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                soluta eaque magni sint ex rem distinctio, dolores harum fuga?
                Ipsam excepturi cum sit fuga accusamus molestias, corporis et
                ipsa quas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const Card = () => {
  const [show, setShow] = useState(false);
  const hovering = (e) => {
    console.log("i am hovering");
    setShow(true);
  };

  const endHover = () => {
    setShow(false);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, y: 0 },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.0 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={hovering}
      onHoverEnd={endHover}
    >
      <div className="card w-full md:h-48 md:w-auto rounded-md relative shadow-2xl cursor-pointer select-none ">
        <img
          className="w-full h-full rounded-md"
          width={300}
          height={300}
          src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="anime"
        />
        <span className="absolute top-3 left-3 font-bold text-secondary text-xs">
          2020
        </span>
        <span className="absolute right-3 top-3  text-secondary text-xs font-bold">
          *7
        </span>
        <motion.div variants={variants} animate={show ? "open" : "closed"}>
          <GoPlay className="hidden md:flex absolute text-4xl bottom-0 left-12 top-20 text-secondary  " />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;

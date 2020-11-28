/** @format */

import React from "react";
import Layout from "../components/Layouts/Layout";
const Home = () => {
  return (
    <Layout>
      <main>
        <header className="ml-7">Macan</header>
        <div className="flex justify-center space-x-2 mb-2">
          <div className="left_content bg-gray-500 w-1/6 min-h-screen">1</div>
          <div className="main_content bg-yellow-300 w-1/2"></div>
          <div className="right_content  w-1/6">
            <div className="genre h-1/2 bg-red-400 space-x-2">Genre</div>
            <div className="genre bg-red-500 h-1/2">Years</div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const Card = () => {
  return (
    <div className="card h-56 w-40 mx-2 rounded-lg relative shadow-2xl">
      <img
        className="w-full h-full rounded-lg z-10"
        src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
        alt="anime"
      />
      <span className="text-gray-50 absolute top-3 left-3 font-bold shadow-inner z-30">
        Genre
      </span>
      <span className="text-gray-50 absolute right-3 top-3 z-30">Text</span>
    </div>
  );
};

export default Home;

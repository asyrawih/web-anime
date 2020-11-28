/** @format */

import React, { Suspense } from "react";
import Layout from "../../components/Layouts/Layout";
import Head from "next/head";

const Details = () => {
  return (
    <Layout>
      <Head>
        <title>Jadwal Rilis</title>
      </Head>
      <main>
        <header className="flex justify-between md:px-24 md:py-10">
          <span className=" p-3 text-2xl text-gray-200">
            Nonton Stream Anime
          </span>
          <span className="p-4 text-white">Home</span>
        </header>
        <div className="flex">Halaman Jadwal Rilis</div>
      </main>
    </Layout>
  );
};

export default Details;

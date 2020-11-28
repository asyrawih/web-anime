/** @format */

import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter >
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;

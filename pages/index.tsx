import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Component } from "react";
import { ThemeStyles } from "../context/themeStyles";
import {animated, useSpring} from 'react-spring'
import Navbar from "../components/Navbar";
//TODO Optimize image to use background layout

function Home() {
  const springStyles = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(-500px, 0px, 0)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
    delay: 250,
    config: {
      duration: 500,
    }
  })
  return (
    <div
      className="bg-slate-100"
      style={{
        height: "100%",
      }}
    >
      <Head>
        <title>History of Computing</title>
        <meta
          name="description"
          content="An fun and innovative way to learn the History of Computing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center text-slate-900">
          <animated.div style={springStyles}>
            <h1 className="flex flex-col text-6xl sm:text-6xl md:text-7xl lg:text-9xl text-center">
              Welcome to
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br py-8 from-pink-400 via-sky-400 to-indigo-400">
                The History of Computing
              </span>
              interactive timeline!
            </h1>
          </animated.div>
          <h1 className="flex text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-5/6">
            This website is a condensed history of how computers evolved
            technologically, from the Ancient Sumerians to the 2010s.
          </h1>
        </div>
        <div className="flex self-center text-slate-900 justify-center rounded-xl items-center h-20 w-64 bg-gradient-to-br bg-indigo-300 mb-24 transition-all duration-500 hover:bg-indigo-500 hover:text-white">
          <Link href="/Timeline/all">
            <a className="text-2xl ">Go to the Timeline</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;

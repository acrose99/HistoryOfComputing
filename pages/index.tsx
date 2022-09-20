import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Component } from "react";
import { ThemeStyles } from "../context/themeStyles";
import { animated, useSpring } from "react-spring";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { CalendarIcon, ClockIcon, ListBulletIcon, Pencil2Icon, QuoteIcon } from "@radix-ui/react-icons";
//TODO Optimize image to use background layout

const features = [
  {
    name: "126 Unique Events",
    description:
      "Each event contains the year it happened, a detailed description, a relevant image, and a link to any related events.",
    icon: Pencil2Icon,
  },
  {
    name: "7 Historical Eras",
    description:
      "The timeline spans over 5,000 years of history, from the invention of the Abacus to the invention of the iPhone. The user can traverse seamlessly between eras for a more convienient experience.",
    icon: CalendarIcon,
  },
  {
    name: "6 Unique Categories",
    description:
      "Unlike most other projects about the history of computing, this website focuses on more then just hardware and software. Users can explore different subjects based on their interests.",
    icon: ListBulletIcon,
  },
  {
    name: "Source Citations",
    description: "Each event has a list of sources that can be used to verify the accuracy of the information presented.",
    icon: QuoteIcon,
  },
];


function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>History of Computing</title>
        <meta
          name="description"
          content="An fun and innovative way to learn the History of Computing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col items-center bg-gradient-to-tl from-violetA-6 dark:from-violetA-3 via-violetA-3 to-mauveA-1 min-h-screen overflow-hidden">
        <div className="text-mauve-12 text-center prose prose-mauve m-12 max-w-7xl">
          <h1 className="text-6xl pre-wrap font-normal">
            Welcome to{" "}
            <span className="text-violet-11 font-black">
              The History of Computing
            </span>{" "}
            interactive timeline!
          </h1>
          <h3>
            This website contains a condensed history of how computers evolved
            technologically, with a special focus on the people who made it, the
            impact it had on society, and the events that shaped the industry.
          </h3>
        </div>
        <div
          onClick={() => router.push("//Timeline/all")}
          className="flex self-center bg-violet-3 text-mauve-12 font-extrabold cursor-pointer  border-2 border-violet-7 justify-center rounded-xl items-center h-16 w-64 mb-6 
        shadow shadow-violet-9 hover:shadow-violet-10 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <Link href="/Timeline/all">
            <a className="text-xl">Go to the Timeline</a>
          </Link>
        </div>
        <div className="text-center m-12 max-w-7xl">
          <h1 className="text-6xl text-violet-12 font-semibold">Features:</h1>
          <p className="lead text-2xl mx-12">
            Although this is a student project, the scale and unique features of
            this website make it a great resource for anyone interested in the
            history of computing.
          </p>
        </div>
        <div className="mt-10 max-w-7xl pb-24  mx-12">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-violet-10 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-mauve-12">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-mauve-11">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
export default Home;

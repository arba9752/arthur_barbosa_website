"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkedinBorder } from "./twitterLink";
import AnimatedLogoCloud from "./ImageSliders";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import YearsActiveCounter from "./YearsActiveCounter";
import SplineEmbed from "./SplineEmbed";

const slap = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
  viewport: { once: true },
};

function Hero() {
  return (
    <>
      {/* SplineEmbed for 3D interaction */}
      <div className="absolute left-0 top-[5%] transform -translate-y-1 z-10 hidden lg:block md:w-1/3">
        <SplineEmbed />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center mt-24 md:mt-32 max-w-3xl mx-auto">
        <div className="flex flex-col gap-5 justify-center items-center">
          {/* High-priority h1 */}
          <motion.h1
            {...{
              ...slap,
              transition: { ...slap.transition }, // No delay
            }}
            className="text-center mx-auto bg-[linear-gradient(180deg,#FFF_0%,rgba(255,255,255,0)_202.08%)] bg-clip-text text-4xl tracking-tighter sm:text-5xl text-transparent md:text-6xl lg:text-7xl"
          >
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-300 from-zinc-300">
              Arthur Barbosa,
            </span>{" "}
            a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-zinc-300">
              Software Developer
            </span>{" "}
          </motion.h1>

          <motion.p
            {...{
              ...slap,
              transition: { ...slap.transition, delay: 0.3 },
            }}
            className="text-lg text-center font-medium text-[rgb(245,245,245)]"
          >
           At <YearsActiveCounter /> years old, I am currently pursuing a degree in Computer Science with a Business Minor at CU Boulder. With a strong foundation in software development and a drive for continuous growth, I aim to contribute to impactful projects that push the boundaries of technology.
          </motion.p>

          <LinkedinBorder />
        </div>
      </section>

      <br />
      <AnimatedLogoCloud />
    </>
  );
}

export default Hero;

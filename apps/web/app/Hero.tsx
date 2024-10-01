"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter } from "@repo/ui/components/icons";
import EmailInput from "./EmailInput";
import LinkArrow from "./linkArrow";
import { TwitterBorder } from "./twitterLink";
import AnimatedLogoCloud from "./ImageSliders";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import YearsActiveCounter from './YearsActiveCounter';
import SplineEmbed from "./SplineEmbed"

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
			<section className="flex relative flex-col gap-5 justify-center items-center mt-24 max-w-xl md:mt-32 md:max-w-2xl lg:max-w-3xl">
				
				<motion.h1
					{...{
						...slap,
						transition: { ...slap.transition, delay: 0.2 },
					}}
					className="text-center  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter  sm:text-5xl text-transparent md:text-6xl lg:text-7xl"
				>
					I am{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-200 from-zinc-300">
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
					I've been alive for{' '}
					<YearsActiveCounter /> 
					years. I'm interested in New Grad Software Engineer, App Developer, Data Scientist, and Web Developer roles for May 2025.
				</motion.p>

				<TwitterBorder />
				
			</section>
			<br />
		
				
				<SplineEmbed />
				
		
				<AnimatedLogoCloud />
		
		</>
	);
}

export default Hero;

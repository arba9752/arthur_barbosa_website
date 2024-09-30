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
					className="text-lg text-center font-semibold text-[rgb(245,245,245)]"
				>
					I've been alive for{' '}
					<YearsActiveCounter /> 
					years. Your curated space for insightful tweets, capturing the essence of thought and conversation. 
					Explore a rich tapestry of ideas, perspectives, and perspectives that challenge, inspire, and enlighten. 
				</motion.p>

				<TwitterBorder />

				
			</section>
			<br />
			<AnimatedLogoCloud />
			<div className="relative z-50">
				<motion.img
					{...{
						...slap,
						transition: { ...slap.transition, delay: 0.35 },
					}}
					src="/images/landing-hero.jpeg"
					alt="Landing page background"
					width={1512}
					height={1405}
					draggable="false"
					className="z-40 md:mt-[-40px] hidden sm:block h-full max-w-[70vw] mx-auto md:w-full select-none px-5 !rounded-2xl"
					style={{
						borderRadius: "20px",
					}}
				/>
				<div
					className="absolute -z-10 left-0 top-[10%] h-32 w-[90%] overflow-x-hidden bg-[rgb(54,157,253)] bg-opacity-100  blur-[337.4px]"
					style={{ transform: "rotate(-30deg)" }}
				/>
			</div>
		</>
	);
}

export default Hero;

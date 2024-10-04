"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
	React,
	TailwindIcon,
	Notion,
	Reddit,
	NextJSLogo,
	Cloudflare,
	TurboRepo,
} from "@repo/ui/components/icons";

import ab_logo_white from "../public/images/ab_logo_white.webp";
import Image from "next/image";

const icons = [
	<div className="rounded-full bg-blue-300/20 p-4">
		<React className="h-8 w-8 text-blue-400" />
	</div>,
	<div className="rounded-full bg-white/85 p-4">
		<NextJSLogo className="h-8 w-8 text-black" />
	</div>
	,
	<div className="rounded-full bg-blue-200/30 p-4">
		<TailwindIcon className="h-8 w-8 text-white" />
	</div>,
	<div className="rounded-full bg-orange-600/90 p-0">
		<Cloudflare className="h-16 w-16 text-orange" />
	</div>
	,
	<div className="rounded-full bg-[#f0f0f0] p-4 flex items-center justify-center">
		<TurboRepo className="h-8 w-8" />
	</div>,
];

const RotatingIcons: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true }); // Trigger once when it's in view

	return (
		<div
			ref={ref}
			className="relative flex w-full flex-col items-center justify-center gap-8 px-4 sm:px-6 mt-10"
		>
			<motion.h1
				{...{
					transition: { delay: 0.2 },
				}}
				className="text-center max-w-2xl  mx-auto bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]  bg-clip-text text-4xl tracking-tighter   text-transparent md:text-5xl lg:text-6xl"
			>
				This website was built with these modern web technologies
			
			</motion.h1>
			<div className="flex items-center justify-center">
				<div className="relative m-2 mx-auto h-96 w-96 scale-[70%] md:scale-100 ">
					<div className="relative h-full w-full rounded-full border border-gray-800">
						{icons.map((icon, index) => (
							<motion.div
								key={index}
								className="absolute top-1/2 -translate-x-10 transform"
								style={{
									originX: "200px",
									originY: "-8px",
								}}
								animate={isInView ? { rotate: [0, 360] } : {}} // Only animate when in view
								transition={{
									repeat: Infinity,
									duration: 5,
									ease: "linear",
									delay: index,
								}}
							>
								<motion.div
									style={{
										rotate: index * 72,
									}}
									animate={isInView ? { rotate: [0, -360] } : {}} // Only animate when in view
									transition={{
										repeat: Infinity,
										duration: 5,
										ease: "linear",
										delay: index,
									}}
								>
									{icon}
								</motion.div>
							</motion.div>
						))}
						<Image
							src={ab_logo_white}
							alt="ab_logo"
							width={75}
							height={75}
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white"
						/>
					</div>
				</div>
			</div>
			<p className="text-center text-sm text-zinc-500   md:text-2xl lg:text-3xl">
				React-based Next.js for frontend <br />
				TailwindCSS for styling<br />
				Cloudflare Pages for hosting<br />
				Turborepo for monorepo management<br />
				Biome for formatting and linting<br />
				ShadcnUI as the component library<br />
			</p>
		</div>
	);
};

export default RotatingIcons;

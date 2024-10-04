"use client";

import { useId } from "react";
import Image, { type ImageProps } from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { AnimatedBeamShow } from "../app/CardPatterns/AnimatedBeamWithOutput";
import TestImg from "../../public/images/carousel-illustration-01.png";
import Search from "../../public/images/search.svg";
import Memroy from "../../public/images/memory.svg";
interface Feature {
	name: React.ReactNode;
	summary: string;
	description: string;
	image: ImageProps["src"];
	icon: React.ComponentType;
}
export function Showcases() {
	return (
		<section
			id="use-cases"
			className=" bg-page-gradient bg-opacity-0 relative pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 w-full mt-10"
		>
			<Container>
				<div className="-z-1 absolute inset-x-0 -top-0 h-[600px]  w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]  bg-[size:6rem_4rem] opacity-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
				<div
					className="h-fukl absolute inset-0  rotate-180 blur-xl"
				
				></div>

				<div className="mr-auto relative max-w-3xl md:text-start">
					<h2 className="font-display text-4xl tracking-tight text-gray-200 sm:text-7xl mb-4"> {/* Add margin-bottom */}
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-500 from-zinc-300">
							Familiar with these Tools
						</span>{" "}
					</h2>
					<div className="overflow-x-hidden overflow-y-hidden">
						<div className="absolute right-0 z-20 top-[0%] h-40 w-[17%] overflow-x-hidden bg-[#369DFD] bg-opacity-20 blur-[110px]" />
					</div>
				</div>


				<div className="overflow-hidden relative rounded-3xl border max-h-[10rem] min-h-[15rem] md:min-h-[20rem] bg-hero-gradient bg-slate-950/10 border-white/10 w-full">
				<div className="absolute inset-0">
						<AnimatedBeamShow />
					</div>
				</div>
			</Container>
		</section>
	);
}

export function Container({
	className,
	...props
}: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div
			className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
			{...props}
		/>
	);
}

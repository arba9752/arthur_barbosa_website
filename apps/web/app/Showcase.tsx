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
					// style={{
					//   background:
					//     "linear-gradient(143.6deg, rgba(52, 103, 235, 0) 20.79%, rgba(120,119,198, 0.26) 40.92%, rgba(120,119,198, 0) 70.35%)",
					// }}
				></div>

				<div className="mr-auto relative max-w-3xl md:text-start">
					<h2 className="font-display  text-4xl tracking-tight text-gray-200 sm:text-7xl">
						<span className="bg-gradient-to-br from-indigo-400 via-indigo-300 to-indigo-700 bg-clip-text text-transparent">
							Familiar with <br />
						</span>{" "}
						these technologies
					</h2>
					<p className="mt-4 text-lg tracking-tight text-gray-100">
						placeholder small text
					</p>
					<div className="overflow-x-hidden overflow-y-hidden">
						<div className="absolute right-0 z-20 top-[0%] h-40 w-[17%] overflow-x-hidden bg-[#369DFD] bg-opacity-20 blur-[110px]" />
					</div>
				</div>
				{/* <FeaturesMobile />
				<FeaturesDesktop /> */}

					<div className="overflow-hidden relative rounded-3xl border max-h-[20rem] min-h-[40rem] md:min-h-[33rem] bg-hero-gradient bg-slate-950/10 border-white/10 w-full">
						<div className="absolute inset-0">
							<AnimatedBeamShow />
						</div>

						<div className="flex absolute inset-0 flex-col justify-end items-start p-8 pl-10 mt-4 lg:-mt-20 translate-y-10 md:translate-y-0 bg-glass-gradient">
							<h4 className="text-3xl tracking-tight mb-2 text-center text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
								Bringing content in is easy.
							</h4>
							<p className="max-w-lg text-lg font-normal tracking-tighter text-gray-400 mb-[3rem]">
								You can use our chrome extension, iOS shortcut, or our API to
								send content to supermemory.
							</p>
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

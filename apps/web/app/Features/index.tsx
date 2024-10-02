import { CheckIcon, ChevronRight, GithubIcon } from "lucide-react";
import { Gradient } from "./features";
import Generating from "./generating";
import Image from "next/image";
import { AnimatedBeamShow } from "../CardPatterns/AnimatedBeamWithOutput";

const Services = () => {
	return (
		<div id="how-to-use" className="w-4/5 mx-auto"> {/* Set width to 80% of screen and center */}
			<div className="w-full">
				<div className="mr-auto w-full">
					<h1 className="text-left font-geistSans tracking-tighter text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
						Sounds super cool? There's more.
					</h1>
					<p className="mb-10 text-lg tracking-tight text-left font-normal"></p>
				</div>

				<div className="relative bg-page-gradient w-full"> {/* Full width within 80% parent */}

					<div
						style={{
							background:
								"linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(140, 121, 249, 0.2) 40.92%, rgba(140, 121, 249, 0) 80.35%)",
						}}
						className="flex overflow-hidden relative items-center p-8 mt-5 mb-5 rounded-3xl border lg:p-20 bg-page-gradient z-1 h-[38rem] border-white/20 xl:h-[28rem] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-full"
					>
						<img
							src="/images/tailwind-bg-gradient.avif"
							className="absolute top-0 right-0 opacity-60 z-2"
						/>

						<div className="absolute top-0 right-0 left-0 mx-auto w-full h-full xl:w-auto">
							<img
								className="object-cover z-40 w-full h-full border-r-2 md:scale-110 border-r-white/5"
								width={800}
								alt="Github"
								height={730}
								src={"/images/github.webp"}
							/>
						</div>

						<div className="absolute right-0 left-0 bottom-5 mx-auto mt-20 text-center z-1 p-8">
							<h4 className="mb-4 text-4xl tracking-tighter text-white lg:text-5xl">
								Proudly <br /> Open Source
							</h4>
							<p className="text-lg body-2 mb-[3rem] ">
								You don't even need to trust us. Just deploy it yourself and
								enjoy the benefits.
							</p>
							<a
								href="https://git.new/memory"
								className="inline-flex gap-x-1 justify-center items-center py-4 px-10 text-center bg-transparent bg-gradient-to-tr to-transparent rounded-xl transition-colors sm:w-auto w-fit mt-[-20px] bg-glass-gradient group from-zinc-300/5 via-gray-400/5 border-white/10 border-[1px] hover:bg-transparent/10"
							>
								<GithubIcon className="inline-flex justify-center items-center w-5 h-5" />{" "}
								Star us on Github
								<ChevronRight className="ml-2 w-4 h-4 duration-300 group-hover:translate-x-1" />
							</a>
						</div>
					</div>

					<Gradient />
				</div>
			</div>
		</div>
	);
};


export default Services;
const supermemoryPoints = [
	"Privacy focused",
	"Works everywhere you are",
	"Self hostable",
	"Super affordable, with a generous free tier",
];

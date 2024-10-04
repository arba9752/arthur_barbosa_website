// index.tsx
import { CheckIcon, ChevronRight, GithubIcon } from "lucide-react";
import Generating from "./generating";
import Image from "next/image";
import { AnimatedBeamShow } from "../CardPatterns/AnimatedBeamWithOutput";
import RotatingIcons from "../RotatingIcons";

const OpenSource = () => {
  return (
    <div id="how-to-use" className="w-full mx-auto"> 
      <div className="w-full">
        <div className="mr-auto w-full">
          <p className="mb-10 text-lg tracking-tight text-left font-normal"></p>
        </div>

        <div className="relative w-4/5 mx-auto"> 
          <div
            className="flex overflow-hidden relative items-center p-8 mt-5 mb-5 rounded-3xl border lg:p-20 z-1 h-[38rem] border-white/20 xl:h-[28rem] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-full"
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

            <a
              href="https://github.com/arba9752/arthur_barbosa_website"
              target="_blank"
              className="block"
            >
              <div className="absolute right-0 left-0 bottom-5 mx-auto mt-20 text-center z-1 p-8 cursor-pointer">
                <h4 className="mb-4 text-4xl tracking-tighter text-white lg:text-5xl">
                  Open Source
                </h4>
                <p className="text-lg body-2 mb-[3rem] text-white/80">
                    See for yourself how this website was made.
                </p>
                <div
                  className="inline-flex gap-x-1 justify-center items-center py-4 px-10 text-center bg-transparent bg-gradient-to-tr to-transparent rounded-xl transition-colors sm:w-auto w-fit mt-[-20px] bg-glass-gradient group from-zinc-300/5 via-gray-400/5 border-white/10 border-[1px] hover:bg-transparent/10 text-white/80"
                >
                  <GithubIcon className="inline-flex justify-center items-center w-5 h-5 text-white/80" />
                  Repository link
                  <ChevronRight className="ml-2 w-4 h-4 duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;

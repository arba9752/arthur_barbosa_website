import { JavaLogo } from "@repo/ui/components/icons";
import { SoccerBall } from "@repo/ui/components/icons";
import { AstroLogo } from "@repo/ui/components/icons";
import { Twitter } from "@repo/ui/components/icons";
import { PawLogo } from "@repo/ui/components/icons";
import { EnglishLogo } from "@repo/ui/components/icons";
import { GlareCard } from "./CardPatterns/Glare";
import React from "react";

export default function FUIFeatureSectionWithCards() {
  const features = [
    {
      icon: <SoccerBall className="w-5 h-5" />,
      title: "Soccer Sentiment Analysis",
      desc: "Utilized Twitter Data and did sentiment analysis of different soccer teams utilizing a fine-tuned large language model. Performed Data Analysis, modeling, and graphing for each Team’s result.",
      link: "https://docs.google.com/presentation/d/1Uy7nenS4OXiekBzreS9F8f0-OFMSjWcSiHZUBE-STmI/edit?usp=sharing", 
    },
    {
      icon: <JavaLogo className="w-5 h-5" />,
      title: "Java-based Arcane Game",
      desc: "Dungeons and Dragons game, leveraging object-oriented programming principles to enhance system scalability. Applied TDD and achieved 100% class coverage and 80% method coverage",
      link: "https://example.com/java-arcane-game", // Placeholder link
    },
    {
      icon: <AstroLogo className="w-5 h-5" />,
      title: "Astro Adventures Website",
      desc: "Developed Space website with several built-in APIs and features. Daily updates with NASA’s Picture of the Day, real-time solar flare data, and live ISS location shown on Google Maps.",
      link: "https://github.com/jkaphammer/AstroAdventures-012-Group6", 
    },
    {
      icon: <PawLogo className="w-5 h-5" />,
      title: "Paw Planner",
      desc: "Creating an iOS app designed to simplify pet care management by providing customizable schedules and smart notifications for feeding, grooming, and walks.",
      link: "https://docs.google.com/document/d/1jeX-UK-tHsaXEvosOGgvtH82f-RicctBct2Kl0bCL_c/edit?usp=sharing", 
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      title: "Thought Bird",
      desc: "Created a full website leveraging AI for quote and knowledge-sharing purposes, also displays featured tweets. Connected with an X account where I post insights and quotes",
      link: "https://thought-bird-2w0gyup.gamma.site/", 
    },
    {
      icon: <EnglishLogo className="w-5 h-5" />,
      title: "English 101",
      desc: "Initiated and led a free online mentorship program, helping low-income Brazilian students prepare for international exams. Reaching over 2,500 Instagram followers and 100+ students.",
      link: "https://www.instagram.com/english101asl/",
    },
  ];

  return (
    <section className="relative z-20 pb-14">
      <div className="px-4 mx-auto max-w-screen-xl text-gray-400 md:px-8 lg:px-0">
        <div className="relative z-20 mt-[4rem]">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <GlareCard key={`l-${idx}`}>
                <li
                  className="z-20 transform-gpu space-y-3 rounded-xl border border-white/10 bg-transparent/20 p-4 [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
                >
                  <a
                    href={item.link}
                    className="block h-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-fit transform-gpu rounded-full p-4 text-purple-600 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold tracking-tighter text-gray-300 font-geist">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </a>
                </li>
              </GlareCard>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

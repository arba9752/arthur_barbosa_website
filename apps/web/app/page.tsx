import dynamic from "next/dynamic";
import Hero from "./Hero";
import { Navbar } from "./Navbar";
import { Toaster } from "@repo/ui/shadcn/toaster";
import Projects from "./Projects";
import { redirect } from "next/navigation";
export const runtime = "edge";

// Dynamically import components
const RotatingIcons = dynamic(() => import("./RotatingIcons"), {
  loading: () => <div>Loading icons...</div>, // Optional loading state
});
const OpenSource = dynamic(() => import("./Features/index"), {
  loading: () => <div>Loading features...</div>,
});
const Footer = dynamic(() => import("./footer"), {
  loading: () => <div>Loading footer...</div>,
});

export default async function Home() {
  // const user = await auth();

  // if (user) {
  //   await redirect("/home");
  // }

  return (
    <>
      <main className="dark flex overflow-x-hidden relative flex-col items-center px-2 min-h-screen md:px-0 font-geistSans bg-hero-gradient">
        <div className="absolute top-0 -z-10 min-h-screen w-screen overflow-hidden bg-inherit bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <Navbar />

        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <div className="overflow-x-hidden">
            <div
              className="absolute left-0 h-32 w-[95%] overflow-x-hidden bg-[#E236FD] bg-opacity-70 blur-[337.4px]"
              style={{ transform: "rotate(-30deg)" }}
            />
          </div>
        </div>

        <Hero />
        <Projects />
        <RotatingIcons />
        <OpenSource />
        <Toaster />
        <Footer />
      </main>
    </>
  );
}

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between overflow-x-hidden">
      {/* LEFT SIDE */}
      <FramerWrapper
        className="flex flex-col justify-start gap-4 pt-5 sm:pt-12 px-4 lg:px-8 w-full lg:w-1/2"
        y={0}
        x={-200}
      >
        <HeroTexts />
        <div className="w-full flex gap-4">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>

      {/* RIGHT SIDE image */}
      <FramerWrapper
        className="relative w-full lg:w-[40%] max-lg:mt-10"
        y={0}
        x={200}
      >
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON */}
      <GithubBtn />
    </main>
  );
}

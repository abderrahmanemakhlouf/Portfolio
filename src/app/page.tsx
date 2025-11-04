import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <>
      {/* LEFT SIDE */}
      <FramerWrapper
        className="h-full w-auto flex flex-col justify-start gap-4 pt-5 sm:pt-12"
        y={0}
        x={-200}
      >
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </FramerWrapper>

      {/* RIGHT SIDE image */}
      <FramerWrapper
        className="h-full w-[40%] relative block max-lg:hidden"
        y={0}
        x={200}
      >
        <HeroImage />
      </FramerWrapper>

      {/* GITHUB BUTTON */}
      <GithubBtn />
    </>
  );
}

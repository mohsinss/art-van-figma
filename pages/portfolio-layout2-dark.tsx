import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Top1 from "../components/top1";
import TheNightCafetext from "../components/the-night-cafetext";
import MainTextFrame from "../components/main-text-frame";
import Footer from "../components/footer";

const PortfolioLayout2Dark: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  const onNextContainerClick = useCallback(() => {
    router.push("/portfolio-layout1-dark");
  }, [router]);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-24 box-border gap-[150px] tracking-[normal] text-center text-5xl text-black font-portfolio-thumbnails-14-18-aa mq450:gap-[150px] mq750:gap-[150px]">
      <Top1
        iconsArrow="/iconsarrow1.svg"
        iconsDarkLight="/iconsdarklight1@2x.png"
        iconsMenu="/iconsmenu1.svg"
        frameDarkLightIconsMenuColor="#fff"
        h1Color="#fff"
        onHeaderLeftContainerClick={onHeaderLeftContainerClick}
      />
      <img
        className="w-[1122px] relative max-h-full object-cover max-w-full"
        alt=""
        src="/image-11@2x.png"
      />
      <TheNightCafetext
        propColor="rgba(255, 255, 255, 0.4)"
        propColor1="#fff"
        propColor2="rgba(255, 255, 255, 0.4)"
        propColor3="#fff"
        propColor4="rgba(255, 255, 255, 0.4)"
        propColor5="#fff"
        propColor6="rgba(255, 255, 255, 0.4)"
        propColor7="#fff"
        propColor8="#fff"
      />
      <section className="w-[1160px] flex flex-row items-start justify-start py-0 px-5 box-border gap-[32px] max-w-full mq750:gap-[32px] mq1050:flex-wrap">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[416px] min-h-[625px] mq750:min-w-full"
          loading="eager"
          alt=""
          src="/image-21@2x.png"
        />
        <img
          className="self-stretch w-[448px] relative max-h-full object-cover min-h-[625px] max-w-full mq1050:flex-1"
          loading="eager"
          alt=""
          src="/image-31@2x.png"
        />
      </section>
      <MainTextFrame propColor="#000" />
      <section className="w-[968px] flex flex-col items-start justify-start pt-0 px-5 pb-[42px] box-border gap-[48px] max-w-full text-left text-53xl text-white font-portfolio-thumbnails-14-18-aa mq750:gap-[48px] mq750:pb-5 mq750:box-border mq1050:pb-[27px] mq1050:box-border">
        <h1 className="m-0 self-stretch h-[704px] relative text-inherit leading-[88px] uppercase font-medium font-inherit inline-block mq450:text-24xl mq450:leading-[53px] mq750:text-39xl mq750:leading-[70px]">
          Although The Starry Night was painted during the day in Van Gogh's
          ground-floor studio, it would be inaccurate to state that the picture
          was painted from memory.
        </h1>
        <h1 className="m-0 self-stretch h-40 relative text-13xl leading-[40px] uppercase font-medium font-inherit inline-block mq450:text-lgi mq450:leading-[24px] mq750:text-7xl mq750:leading-[32px]">{`The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. `}</h1>
      </section>
      <section className="w-[1160px] flex flex-row items-start justify-start pt-0 px-5 pb-[100px] box-border max-w-full mq750:pb-[65px] mq750:box-border">
        <img
          className="h-[502px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="eager"
          alt=""
          src="/gallery-image-5@2x.png"
        />
      </section>
      <div className="w-[776px] flex flex-row items-start justify-between pt-0 px-5 pb-[106px] box-border gap-[20px] max-w-full mq450:pb-[69px] mq450:box-border mq750:flex-wrap">
        <div className="w-64 flex flex-col items-center justify-start pt-16 px-[25px] pb-20 box-border relative gap-[18px]">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-white" />
          <img
            className="w-12 h-[22px] relative object-contain z-[1]"
            loading="eager"
            alt=""
            src="/iconsarrow-11.svg"
          />
          <h2 className="m-0 self-stretch h-[72px] relative text-inherit leading-[32px] uppercase font-medium font-inherit flex items-center justify-center shrink-0 z-[1] mq450:text-lgi mq450:leading-[26px]">
            Paul Gauguin's Armchair
          </h2>
        </div>
        <div
          className="h-64 w-64 relative cursor-pointer"
          onClick={onNextContainerClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
          <h2 className="m-0 absolute top-[104px] left-[32px] text-inherit leading-[32px] uppercase font-medium font-inherit flex items-center justify-center w-48 h-[72px] z-[1] mq450:text-lgi mq450:leading-[26px]">
            The Night Café
          </h2>
          <img
            className="absolute top-[64px] left-[104px] w-12 h-[22px] z-[1]"
            loading="eager"
            alt=""
            src="/iconsarrow-21.svg"
          />
        </div>
      </div>
      <Footer
        dimensionCode="/iconsarrow-31@2x.png"
        dimensionCodeText="/iconsarrow-41@2x.png"
        dimensionCodeImage="/iconsarrow-51@2x.png"
        dimensionCodeImageUrl="/iconsarrow-61@2x.png"
        dimensionCodeText2="/iconsarrow-71@2x.png"
        dimensionCodeImageText="/up1.svg"
        footerWidth="1160px"
        footerFlex="unset"
        vangoghcomColor="#fff"
        linkedinColor="#fff"
        dividerBackgroundColor="rgba(255, 255, 255, 0.16)"
        dribbbleColor="#fff"
        dividerBackgroundColor1="rgba(255, 255, 255, 0.16)"
        myspaceColor="#fff"
        dividerBackgroundColor2="rgba(255, 255, 255, 0.16)"
        gITHUBColor="#fff"
        dividerBackgroundColor3="rgba(255, 255, 255, 0.16)"
        instagramColor="#fff"
      />
    </div>
  );
};

export default PortfolioLayout2Dark;

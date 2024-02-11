import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Top1 from "../components/top1";
import TheNightCafetext from "../components/the-night-cafetext";
import MainTextFrame from "../components/main-text-frame";
import PrevNextEllipse from "../components/prev-next-ellipse";
import Footer from "../components/footer";

const PortfolioLayout2Light: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  const onNextContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-24 box-border gap-[150px] tracking-[normal] mq450:gap-[150px] mq750:gap-[150px]">
      <Top1
        iconsArrow="/iconsarrow.svg"
        iconsDarkLight="/iconsdarklight@2x.png"
        iconsMenu="/iconsmenu.svg"
        onHeaderLeftContainerClick={onHeaderLeftContainerClick}
      />
      <img
        className="w-[1122px] relative max-h-full object-cover max-w-full"
        alt=""
        src="/image-11@2x.png"
      />
      <TheNightCafetext />
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
      <MainTextFrame />
      <section className="w-[968px] flex flex-col items-start justify-start pt-0 px-5 pb-[42px] box-border gap-[48px] max-w-full text-left text-53xl text-black font-portfolio-thumbnails-14-18-aa mq750:gap-[48px] mq750:pb-5 mq750:box-border mq1050:pb-[27px] mq1050:box-border">
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
        <PrevNextEllipse
          iconsArrow="/iconsarrow-1.svg"
          paulGauguinsArmchair="Paul Gauguin's Armchair"
        />
        <PrevNextEllipse
          iconsArrow="/iconsarrow-2.svg"
          paulGauguinsArmchair="The Night Café"
          propBackgroundColor="#000"
          propMargin="0"
          propColor="#fff"
          onNextContainerClick={onNextContainerClick}
        />
      </div>
      <Footer
        dimensionCode="/iconsarrow-3@2x.png"
        dimensionCodeText="/iconsarrow-4@2x.png"
        dimensionCodeImage="/iconsarrow-5@2x.png"
        dimensionCodeImageUrl="/iconsarrow-6@2x.png"
        dimensionCodeText2="/iconsarrow-7@2x.png"
        dimensionCodeImageText="/up4.svg"
        footerWidth="1160px"
        footerFlex="unset"
        vangoghcomColor="#000"
        linkedinColor="#000"
        dividerBackgroundColor="rgba(0, 0, 0, 0.16)"
        dribbbleColor="#000"
        dividerBackgroundColor1="rgba(0, 0, 0, 0.16)"
        myspaceColor="#000"
        dividerBackgroundColor2="rgba(0, 0, 0, 0.16)"
        gITHUBColor="#000"
        dividerBackgroundColor3="rgba(0, 0, 0, 0.16)"
        instagramColor="#000"
      />
    </div>
  );
};

export default PortfolioLayout2Light;

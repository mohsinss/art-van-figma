import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FRAME from "../components/f-r-a-m-e";
import FrameComponent2 from "../components/frame-component2";
import Frametitleleft from "../components/frametitleleft";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const PortfolioLayout1Dark: NextPage = () => {
  const router = useRouter();

  const onHeaderLeftContainerClick = useCallback(() => {
    router.push("/dark");
  }, [router]);

  const onPreviousContainerClick = useCallback(() => {
    router.push("/portfolio-layout2-dark");
  }, [router]);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-0 pb-24 pr-0 pl-8 box-border gap-[152px] tracking-[normal] mq750:gap-[152px] mq450:gap-[152px]">
      <header className="self-stretch flex flex-row items-start justify-start gap-[78px] max-w-full mq750:gap-[78px] mq450:gap-[78px]">
        <FRAME
          iconsArrow="/iconsarrow1.svg"
          propColor="#fff"
          propColor1="#fff"
          onHeaderLeftContainerClick={onHeaderLeftContainerClick}
        />
        <FrameComponent2
          iconsDarkLight="/iconsdarklight1@2x.png"
          iconsMenu="/iconsmenu1.svg"
          propColor="#fff"
        />
      </header>
      <main className="w-[1152px] flex flex-row items-start justify-start pt-0 pb-[104px] px-0 box-border max-w-full lg:pb-11 lg:box-border mq1050:pb-[29px] mq1050:box-border mq750:pb-5 mq750:box-border">
        <section className="w-[1044px] flex flex-col items-end justify-start py-0 pr-5 pl-0 box-border gap-[128px] max-w-full text-left text-sm text-gray-100 font-portfolio-thumbnails-14-18-aa mq1050:gap-[128px] mq750:gap-[128px] mq450:gap-[128px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-6 px-0 box-border max-w-full">
            <div className="w-[832px] flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[32px]">
              <div className="w-[352px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px] max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                  <div className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0">
                    year
                  </div>
                  <div className="flex-1 relative leading-[18px] uppercase text-white inline-block min-w-[25px]">
                    1888
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                  <div className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0">
                    MEDIUM
                  </div>
                  <div className="flex-1 relative leading-[18px] uppercase text-white inline-block min-w-[86px]">
                    Oil on canvas
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                  <div className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0">
                    LOCATION
                  </div>
                  <div className="flex-1 relative leading-[18px] uppercase text-white inline-block min-w-[155px]">
                    AYale University Gallery
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                  <div className="w-[88px] relative leading-[18px] uppercase inline-block shrink-0">
                    SIZE
                  </div>
                  <div className="flex-1 relative leading-[18px] uppercase text-white inline-block min-w-[88px]">
                    28.5 in × 36.3 in
                  </div>
                </div>
              </div>
              <div className="flex-1 relative leading-[20px] text-white inline-block min-w-[291px] max-w-full">
                The Night Café (French: Le Café de nuit) is an oil painting
                created by Dutch artist Vincent van Gogh in September 1888 in
                Arles. Its title is inscribed lower right beneath the signature.
                The painting is owned by Yale University and is currently held
                at the Yale University Art Gallery in New Haven, Connecticut.
              </div>
            </div>
          </div>
          <Frametitleleft propColor="#fff" />
          <div className="w-[927px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="w-[735px] relative max-h-full object-cover max-w-full"
              loading="eager"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <FrameComponent1 propColor="#fff" />
          <FrameComponent
            iconsArrow="/iconsarrow-11.svg"
            iconsArrow1="/iconsarrow-21.svg"
            propBackgroundColor="#fff"
            propColor="#000"
            propBackgroundColor1="#fff"
            propColor1="#000"
            onPreviousContainerClick={onPreviousContainerClick}
          />
        </section>
      </main>
      <div className="w-[1152px] flex flex-row items-start justify-start py-0 pr-8 pl-0 box-border max-w-full">
        <Footer
          dimensionCode="/iconsarrow-31@2x.png"
          dimensionCodeText="/iconsarrow-41@2x.png"
          dimensionCodeImage="/iconsarrow-51@2x.png"
          dimensionCodeImageUrl="/iconsarrow-61@2x.png"
          dimensionCodeText2="/iconsarrow-71@2x.png"
          dimensionCodeImageText="/up3.svg"
          footerWidth="unset"
          footerFlex="1"
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
    </div>
  );
};

export default PortfolioLayout1Dark;

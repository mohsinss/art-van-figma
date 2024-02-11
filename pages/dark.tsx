import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component3";
import FooterLeft from "../components/footer-left";
import Footer from "../components/footer";

const Dark: NextPage = () => {
  const router = useRouter();

  const onIconsDarkLightClick = useCallback(() => {
    router.push("/light");
  }, [router]);

  const onIconsMenuClick = useCallback(() => {
    router.push("/extra-content1280-dark");
  }, [router]);

  const onHeaderContainerClick = useCallback(() => {
    router.push("/extra-content1280-dark");
  }, [router]);

  const onImage1Click = useCallback(() => {
    router.push("/portfolio-layout2-dark");
  }, [router]);

  const onImage2Click = useCallback(() => {
    router.push("/portfolio-layout1-dark");
  }, [router]);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-6 px-5 pb-24 box-border gap-[104px] tracking-[normal] mq450:gap-[104px] mq750:gap-[104px]">
      <header className="self-stretch h-[49px] flex flex-row items-start justify-between pt-0 px-3 pb-3 box-border gap-[20px]">
        <img
          className="h-8 w-[182.9px] relative overflow-hidden shrink-0"
          loading="eager"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="h-[33px] flex flex-row items-start justify-start">
            <div className="h-[25.6px] overflow-hidden flex flex-row items-start justify-start gap-[16px] z-[1]">
              <div className="h-[25px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                <div className="h-[29px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                  <img
                    className="w-8 h-8 relative object-contain cursor-pointer"
                    loading="eager"
                    alt=""
                    src="/iconsdarklight1@2x.png"
                    onClick={onIconsDarkLightClick}
                  />
                </div>
              </div>
              <div className="h-[25px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
                <div className="h-[29px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                  <img
                    className="w-8 h-8 relative cursor-pointer"
                    alt=""
                    src="/iconsmenu2.svg"
                    onClick={onIconsMenuClick}
                  />
                </div>
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-center opacity-[0] cursor-pointer ml-[-32px]"
              onClick={onHeaderContainerClick}
            >
              <div className="h-8 w-8 relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hidden" />
                <input
                  className="m-0 absolute h-[43.75%] w-[43.75%] top-[28.13%] right-[28.13%] bottom-[28.13%] left-[28.13%] box-border z-[1] border-[0px] border-solid border-black"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-[1120px] flex flex-row items-start justify-start max-w-full text-left text-53xl text-white font-portfolio-thumbnails-14-18-aa">
        <h1 className="m-0 h-[264px] w-[832px] relative text-inherit leading-[88px] uppercase font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-24xl mq450:leading-[53px] mq1050:text-39xl mq1050:leading-[70px]">
          <p className="m-0">Vincent Van Gogh.</p>
          <p className="m-0">post-impressionist painter and artist</p>
        </h1>
      </section>
      <section className="w-[1120px] flex flex-col items-start justify-start pt-0 px-0 pb-[72px] box-border gap-[110px] max-w-full text-left text-sm text-gray-100 font-portfolio-thumbnails-14-18-aa lg:gap-[110px] lg:pb-[47px] lg:box-border mq750:gap-[110px] mq750:pb-5 mq750:box-border mq1050:pb-[31px] mq1050:box-border">
        <div className="w-[1024px] flex flex-row flex-wrap items-center justify-start gap-[128px] max-w-full mq450:gap-[128px] mq750:gap-[128px] mq1050:gap-[128px]">
          <div className="h-[448px] flex-1 relative min-w-[291px] max-w-full">
            <div className="absolute top-[0px] left-[0px] leading-[18px] uppercase inline-block w-[3px]">
              1
            </div>
            <div className="absolute top-[0px] left-[48px] leading-[18px] uppercase text-white">
              The Starry Night
            </div>
            <img
              className="absolute top-[5.3px] left-[197px] w-[16.5px] h-[7.4px]"
              loading="eager"
              alt=""
              src="/iconsarrow2.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover cursor-pointer z-[1]"
              alt=""
              src="/image1@2x.png"
              onClick={onImage1Click}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[12px] min-w-[291px] max-w-full">
            <img
              className="self-stretch h-[340px] relative max-w-full overflow-hidden shrink-0 object-cover cursor-pointer"
              loading="eager"
              alt=""
              src="/image2@2x.png"
              onClick={onImage2Click}
            />
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                2
              </div>
              <div className="relative leading-[18px] uppercase text-white">
                The Night Café
              </div>
              <img
                className="h-[7.4px] w-[16.5px] relative"
                alt=""
                src="/iconsarrow-12.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[1024px] flex flex-col items-end justify-start gap-[80px] max-w-full mq750:gap-[80px] mq1050:gap-[80px]">
            <div className="w-[928px] flex flex-row items-start justify-start gap-[128px] max-w-full mq450:gap-[128px] mq1050:flex-wrap mq1050:gap-[128px]">
              <div className="h-[382px] w-[352px] flex flex-col items-start justify-start gap-[12px] min-w-[352px] max-w-full mq450:min-w-full mq1050:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="eager"
                  alt=""
                  src="/image3@2x.png"
                />
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                    3
                  </div>
                  <div className="relative leading-[18px] uppercase text-white">
                    The Red Vineyard
                  </div>
                  <img
                    className="h-[7.4px] w-[16.5px] relative"
                    alt=""
                    src="/iconsarrow-12.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[291px] max-w-full">
                <img
                  className="self-stretch h-[620px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="eager"
                  alt=""
                  src="/image4@2x.png"
                />
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                    4
                  </div>
                  <div className="relative leading-[18px] uppercase text-white">
                    Ward in the Hospital in Arles
                  </div>
                  <img
                    className="h-[7.4px] w-[16.5px] relative"
                    alt=""
                    src="/iconsarrow-12.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq750:gap-[32px] mq1050:flex-wrap">
              <div className="h-[370px] w-[448px] flex flex-col items-start justify-start gap-[12px] min-w-[448px] max-w-full mq750:min-w-full mq1050:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="eager"
                  alt=""
                  src="/image5@2x.png"
                />
                <div className="flex flex-row items-center justify-start gap-[16px] max-w-full">
                  <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                    3
                  </div>
                  <div className="relative leading-[18px] uppercase text-white">
                    Ploughman in the Fields near Arles
                  </div>
                  <img
                    className="h-[7.4px] w-[16.5px] relative"
                    alt=""
                    src="/iconsarrow-12.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border min-w-[354px] max-w-full mq450:min-w-full mq750:pt-9 mq750:box-border">
                <div className="self-stretch h-[574px] flex flex-col items-start justify-start gap-[12px]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="eager"
                    alt=""
                    src="/image6@2x.png"
                  />
                  <div className="flex flex-row items-center justify-start gap-[16px]">
                    <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                      4
                    </div>
                    <div className="relative leading-[18px] uppercase text-white">
                      Paul Gauguin's Armchair
                    </div>
                    <img
                      className="h-[7.4px] w-[16.5px] relative"
                      alt=""
                      src="/iconsarrow-52.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent propColor="#fff" propColor1="#fff" />
      <FooterLeft
        instagramDividerBackgroundImage="unset"
        companyColor="#fff"
        positionColor="#fff"
        yearColor="rgba(255, 255, 255, 0.4)"
        companyColor1="#fff"
        positionColor1="#fff"
        yearColor1="rgba(255, 255, 255, 0.4)"
        companyColor2="#fff"
        positionColor2="#fff"
        yearColor2="rgba(255, 255, 255, 0.4)"
        companyColor3="#fff"
        positionColor3="#fff"
        yearColor3="rgba(255, 255, 255, 0.4)"
        companyColor4="#fff"
        positionColor4="#fff"
        yearColor4="rgba(255, 255, 255, 0.4)"
      />
      <Footer
        dimensionCode="/iconsarrow-31@2x.png"
        dimensionCodeText="/iconsarrow-72@2x.png"
        dimensionCodeImage="/iconsarrow-51@2x.png"
        dimensionCodeImageUrl="/iconsarrow-61@2x.png"
        dimensionCodeText2="/iconsarrow-71@2x.png"
        dimensionCodeImageText="/up2.svg"
        footerWidth="1120px"
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

export default Dark;

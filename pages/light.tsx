import type { NextPage } from "next";
import LogoIcon from "../components/logo-icon";
import ImageComponent from "../components/image-component";
import Image3Icon from "../components/image3-icon";
import Image4Icon from "../components/image4-icon";
import FooterItemFrame from "../components/footer-item-frame";
import FrameComponent from "../components/frame-component3";
import FooterLeft from "../components/footer-left";
import Footer from "../components/footer";

const Light: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-6 px-5 pb-24 box-border gap-[104px] tracking-[normal] mq450:gap-[104px] mq750:gap-[104px]">
      <header className="self-stretch flex flex-row items-center justify-between pt-0 px-3 pb-4 gap-[20px]">
        <LogoIcon />
        <div className="h-[25.6px] overflow-hidden flex flex-row items-start justify-start gap-[16px]">
          <div className="h-[25px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
            <div className="h-[29px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
              <img
                className="w-8 h-8 relative object-contain"
                loading="eager"
                alt=""
                src="/iconsdarklight@2x.png"
              />
            </div>
          </div>
          <div className="h-[25px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border">
            <div className="h-[29px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
              <img
                className="w-8 h-8 relative"
                loading="eager"
                alt=""
                src="/iconsmenu21.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="w-[1120px] flex flex-row items-start justify-start max-w-full text-left text-53xl text-black font-portfolio-thumbnails-14-18-aa">
        <h1 className="m-0 h-[264px] w-[832px] relative text-inherit leading-[88px] uppercase font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-24xl mq450:leading-[53px] mq1050:text-39xl mq1050:leading-[70px]">
          <p className="m-0">Vincent Van Gogh.</p>
          <p className="m-0">post-impressionist painter and artist</p>
        </h1>
      </section>
      <section className="w-[1120px] flex flex-col items-end justify-start pt-0 px-0 pb-[72px] box-border gap-[80px] max-w-full text-left text-sm text-gray-300 font-portfolio-thumbnails-14-18-aa lg:gap-[80px] lg:pb-[47px] lg:box-border mq750:gap-[80px] mq750:pb-5 mq750:box-border mq1050:pb-[31px] mq1050:box-border">
        <ImageComponent />
        <div className="w-[928px] flex flex-row items-start justify-start gap-[128px] max-w-full mq450:gap-[128px] mq1050:flex-wrap mq1050:gap-[128px]">
          <div className="h-[382px] w-[352px] flex flex-col items-start justify-start gap-[12px] min-w-[352px] max-w-full mq450:min-w-full mq1050:flex-1">
            <Image3Icon />
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                3
              </div>
              <div className="relative leading-[18px] uppercase text-black">
                The Red Vineyard
              </div>
              <img
                className="h-[7.4px] w-[16.5px] relative"
                alt=""
                src="/iconsarrow3.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[291px] max-w-full">
            <Image4Icon />
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
                4
              </div>
              <div className="relative leading-[18px] uppercase text-black">
                Ward in the Hospital in Arles
              </div>
              <img
                className="h-[7.4px] w-[16.5px] relative"
                alt=""
                src="/iconsarrow3.svg"
              />
            </div>
          </div>
        </div>
        <FooterItemFrame />
      </section>
      <FrameComponent />
      <FooterLeft />
      <Footer
        dimensionCode="/iconsarrow-3@2x.png"
        dimensionCodeText="/iconsarrow-73@2x.png"
        dimensionCodeImage="/iconsarrow-5@2x.png"
        dimensionCodeImageUrl="/iconsarrow-6@2x.png"
        dimensionCodeText2="/iconsarrow-7@2x.png"
        dimensionCodeImageText="/up5.svg"
      />
    </div>
  );
};

export default Light;

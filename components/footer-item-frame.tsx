import type { NextPage } from "next";
import Image5Icon from "./image5-icon";
import Image6Icon from "./image6-icon";

const FooterItemFrame: NextPage = () => {
  return (
    <div className="w-[1024px] flex flex-col items-center justify-start gap-[12px] max-w-full text-left text-sm text-gray-300 font-portfolio-thumbnails-14-18-aa">
      <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq750:gap-[32px] mq1050:flex-wrap">
        <div className="h-[370px] w-[448px] flex flex-col items-start justify-start gap-[12px] min-w-[448px] max-w-full mq750:min-w-full mq1050:flex-1">
          <Image5Icon />
          <div className="flex flex-row items-center justify-start gap-[16px] max-w-full">
            <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
              3
            </div>
            <div className="relative leading-[18px] uppercase text-black">
              Ploughman in the Fields near Arles
            </div>
            <img
              className="h-[7.4px] w-[16.5px] relative"
              alt=""
              src="/iconsarrow3.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border min-w-[354px] max-w-full mq450:min-w-full mq750:pt-9 mq750:box-border">
          <Image6Icon />
        </div>
      </div>
      <div className="w-[485px] flex flex-row items-start justify-end max-w-full">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <div className="w-8 relative leading-[18px] uppercase inline-block shrink-0">
            4
          </div>
          <div className="relative leading-[18px] uppercase text-black">
            Paul Gauguin's Armchair
          </div>
          <img
            className="h-[7.4px] w-[16.5px] relative"
            alt=""
            src="/iconsarrow-53.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterItemFrame;
